import { createFlameProcedure } from "./procedure.service";
import { createFlameMutation, createFlameQuery } from "./action.service";
import { createFlameRouter } from "./router.service";
import { createFlameController } from "./controller.service";
import type {
  StandardSchemaV1,
  FlameProcedure,
  FlameActionHandler,
  FlameActionContext,
  QueryMethod,
  InferEndpoint,
  FlameQueryOptions,
  MutationMethod,
  FlameMutationOptions,
  FlameControllerConfig,
  ContextCallback,
  Unwrap,
  FlameBaseConfig,
  FlameBuilderConfig,
  InferActionProcedureContext,
  InferFlameContext,
  FlameControllerBaseAction,
  FlameRealtimeService as FlameRealtimeServiceType,
  DocsConfig,
  FlameRouter,
} from "../types";
import type { FlameStoreAdapter } from "../types/store.interface";
import type { FlameLogger } from "../types/logger.interface";
import type {
  JobsNamespaceProxy,
  MergedJobsExecutor,
} from "../types/jobs.interface";
import type { FlameTelemetryProvider } from "../types/telemetry.interface";
import { FlameRealtimeService } from "./realtime.service";

/**
 * Main builder class for the Flame Framework.
 * Provides a fluent interface for creating and configuring all framework components.
 *
 * @template TContext - The type of the application context
 * @template TMiddlewares - The global middleware procedures
 * @template TStore - The store adapter type
 * @template TLogger - The logger adapter type
 * @template TJobs - The job queue adapter type
 *
 * @example
 * // Initialize with custom context
 * const Flame = Flame
 *   .context<{ db: Database }>()
 *   .middleware([authMiddleware])
 *   .store(redisStore)
 *   .create();
 *
 * // Create controllers and actions
 * const userController = Flame.controller({
 *   path: 'users',
 *   actions: {
 *     list: Flame.query({ ... }),
 *     create: Flame.mutation({ ...  })
 *   }
 * });
 */
export class FlameBuilder<
  TContext extends object | ContextCallback,
  TConfig extends FlameBaseConfig,
  TStore extends FlameStoreAdapter,
  TLogger extends FlameLogger,
  TJobs extends JobsNamespaceProxy<any>,
  TTelemetry extends FlameTelemetryProvider,
  TRealtime extends FlameRealtimeServiceType<any>,
  TPlugins extends Record<string, any>,
  TDocs extends DocsConfig,
> {
  private _config: FlameBuilderConfig<
    TContext,
    TConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetry,
    TPlugins,
    TDocs
  > = {} as any;
  private _store: TStore;
  private _logger: TLogger;
  private _jobs: TJobs;
  private _telemetry: TTelemetry;
  private _realtime: TRealtime;
  private _plugins: TPlugins = {} as TPlugins;
  private _docs: TDocs = {} as TDocs;

  constructor(    
    config: FlameBuilderConfig<
      TContext,
      TConfig,
      TStore,
      TLogger,
      TJobs,
      TTelemetry,
      TPlugins,
      TDocs
    > = {} as any,
    store?: TStore,
    logger?: TLogger,
    jobs?: TJobs,
    telemetry?: TTelemetry,
    realtime?: TRealtime,
    plugins?: TPlugins,
    docs?: TDocs,
  ) {
    this._config = config;
    this._store = store || ({} as TStore);
    this._logger = logger || ({} as TLogger);
    this._jobs = jobs || ({} as TJobs);
    this._telemetry = telemetry || ({} as TTelemetry);
    this._realtime = realtime || ({} as TRealtime);
    this._plugins = plugins || ({} as TPlugins);
    this._docs = docs || ({} as TDocs);
  }

  /**
   * Configure the context function.
   */
  context<TNewContext extends object | ContextCallback>(
    contextFn: TNewContext,
  ): FlameBuilder<
    TNewContext,
    TConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetry,
    TRealtime,
    TPlugins,
    TDocs
  > {
    return new FlameBuilder(
      { ...this._config, context: contextFn },
      this._store,
      this._logger,
      this._jobs,
      this._telemetry,
      this._realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Configure router settings.
   */
  config<TNewConfig extends TConfig>(
    routerConfig: TNewConfig,
  ): FlameBuilder<
    TContext,
    TNewConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetry,
    TRealtime,
    TPlugins,
    TDocs
  > {
    return new FlameBuilder(
      { ...this._config, config: routerConfig },
      this._store,
      this._logger,
      this._jobs,
      this._telemetry,
      this._realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Configure a store adapter for caching, events, and more.
   */
  store(
    storeAdapter: FlameStoreAdapter,
  ): FlameBuilder<
    TContext,
    TConfig,
    FlameStoreAdapter,
    TLogger,
    TJobs,
    TTelemetry,
    FlameRealtimeServiceType,
    TPlugins,
    TDocs
  > {
    const realtime = new FlameRealtimeService(storeAdapter);

    return new FlameBuilder<
      TContext,
      TConfig,
      FlameStoreAdapter,
      TLogger,
      TJobs,
      TTelemetry,
      FlameRealtimeServiceType,
      TPlugins,
      TDocs
    >(
      { ...this._config, store: storeAdapter, realtime },
      storeAdapter,
      this._logger,
      this._jobs,
      this._telemetry,
      realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Configure a logger adapter for logging.
   */
  logger(
    loggerAdapter: FlameLogger,
  ): FlameBuilder<
    TContext,
    TConfig,
    TStore,
    FlameLogger,
    TJobs,
    TTelemetry,
    TRealtime,
    TPlugins,
    TDocs
  > {
    return new FlameBuilder<
      TContext,
      TConfig,
      TStore,
      FlameLogger,
      TJobs,
      TTelemetry,
      TRealtime,
      TPlugins,
      TDocs
    >(
      { ...this._config, logger: loggerAdapter },
      this._store,
      loggerAdapter,
      this._jobs,
      this._telemetry,
      this._realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Configure a job queue adapter for background processing.
   */
  jobs<
    TJobs extends MergedJobsExecutor<any>,
    TJobsProxy extends JobsNamespaceProxy<any> = ReturnType<Awaited<TJobs>["createProxy"]>
  >(jobsAdapter: TJobs) {
    const jobsProxy = jobsAdapter.createProxy() as TJobsProxy;

    return new FlameBuilder<
      TContext,
      TConfig,
      TStore,
      TLogger,
      TJobsProxy,
      TTelemetry,
      TRealtime,
      TPlugins,
      TDocs
    >(
      // @ts-expect-error - Expected
      { ...this._config, jobs: jobsProxy },
      this._store,
      this._logger,
      jobsProxy,
      this._telemetry,
      this._realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Configure a telemetry provider for observability.
   * Enables distributed tracing, metrics collection, and structured logging.
   */
  telemetry<TTelemetryProvider extends FlameTelemetryProvider>(
    telemetryProvider: TTelemetryProvider,
  ): FlameBuilder<
    TContext,
    TConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetryProvider,
    TRealtime,
    TPlugins,
    TDocs
  > {
    return new FlameBuilder<
      TContext,
      TConfig,
      TStore,
      TLogger,
      TJobs,
      TTelemetryProvider,
      TRealtime,
      TPlugins,
      TDocs
    >(
      // @ts-expect-error - Expected
      { ...this._config, telemetry: telemetryProvider },
      this._store,
      this._logger,
      this._jobs,
      telemetryProvider,
      this._realtime,
      this._plugins,
      this._docs,
    );
  }

  /**
   * Register plugins with the Flame Router
   *
   * Plugins provide self-contained functionality with actions, controllers, events, and lifecycle hooks.
   * They can access their own actions type-safely through the `self` parameter.
   *
   * @param pluginsRecord - Record of plugin name to plugin instance
   *
   * @example
   * ```typescript
   * const Flame = Flame
   *   .context<MyContext>()
   *   .plugins({
   *     auth: authPlugin,
   *     email: emailPlugin,
   *     audit: auditPlugin
   *   })
   *   .create();
   *
   * // Usage in actions
   * const userController = Flame.controller({
   *   actions: {
   *     create: Flame.mutation({
   *       handler: async (ctx) => {
   *         await ctx.plugins.auth.actions.validateToken({ token });
   *         await ctx.plugins.email.actions.sendWelcome({ email });
   *         await ctx.plugins.audit.emit('user:created', { userId });
   *       }
   *     })
   *   }
   * });
   * ```
   */
  plugins<TNewPlugins extends Record<string, any>>(
    pluginsRecord: TNewPlugins,
  ): FlameBuilder<
    TContext,
    TConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetry,
    TRealtime,
    TNewPlugins,
    TDocs
  > {
    return new FlameBuilder<
      TContext,
      TConfig,
      TStore,
      TLogger,
      TJobs,
      TTelemetry,
      TRealtime,
      TNewPlugins,
      TDocs
    >(
      // Store plugins in config for RequestProcessor access
      { ...this._config, plugins: pluginsRecord },
      this._store,
      this._logger,
      this._jobs,
      this._telemetry,
      this._realtime,
      pluginsRecord,
      this._docs,
    );
  }

  docs<TNewDocs extends DocsConfig>(
    docsConfig: TNewDocs,
  ): FlameBuilder<
    TContext,
    TConfig,
    TStore,
    TLogger,
    TJobs,
    TTelemetry,
    TRealtime,
    TPlugins,
    TNewDocs
  > {
    return new FlameBuilder(
      { ...this._config, docs: docsConfig },
      this._store,
      this._logger,
      this._jobs,
      this._telemetry,
      this._realtime,
      this._plugins,
      docsConfig,
    );
  }

  /**
   * Creates the API with global middleware types inferred.
   */
  create() {
    type TContextCallback = Unwrap<TContext>;
    type TInferedContext = TContextCallback extends object
      ? TContextCallback
      : TContext;

    return {
      /**
       * Creates a query action for retrieving data.
       */
      /**
       * Creates a query action for retrieving data.
       */
      query: <
        TQueryPath extends string,
        TQueryQuery extends StandardSchemaV1 | undefined,
        TQueryMiddlewares extends FlameProcedure<any, any, unknown>[] | undefined,
        TQueryHandler extends FlameActionHandler<
          FlameActionContext<
            TInferedContext,
            TQueryPath,
            QueryMethod,
            undefined,
            TQueryQuery,
            TQueryMiddlewares,
            TPlugins
          >,
          unknown // 🔄 MUDANÇA: 'any' → 'unknown' para melhor inferência
        >,
        TQueryResponse extends ReturnType<TQueryHandler>,
        TQueryInfer extends InferEndpoint<
          TInferedContext,
          TQueryPath,
          QueryMethod,
          undefined,
          TQueryQuery,
          TQueryMiddlewares,
          TPlugins,
          TQueryHandler,
          TQueryResponse
        >,
      >(
        // 🔄 MUDANÇA: Remoção do constraint genérico no handler para permitir inferência livre
        options: FlameQueryOptions<
          TInferedContext,
          TQueryPath,
          TQueryQuery,
          TQueryMiddlewares,
          TPlugins,
          TQueryHandler
        >,
      ) =>
        createFlameQuery<
          TInferedContext,
          TQueryPath,
          TQueryQuery,
          TQueryMiddlewares,
          TPlugins,
          TQueryHandler,
          TQueryResponse,
          TQueryInfer
        >(options),

      /**
       * Creates a mutation action for modifying data.
       */
      mutation: <
        TMutationPath extends string,
        TMutationMethod extends MutationMethod,
        TMutationBody extends StandardSchemaV1 | undefined,
        TMutationQuery extends StandardSchemaV1 | undefined,
        TMutationMiddlewares extends FlameProcedure<any, any, unknown>[] | undefined,
        TMutationHandler extends FlameActionHandler<
          FlameActionContext<
            TInferedContext,
            TMutationPath,
            TMutationMethod,
            TMutationBody,
            TMutationQuery,
            TMutationMiddlewares,
            TPlugins
          >,
          unknown // 🔄 MUDANÇA: 'any' → 'unknown' para melhor inferência
        >,
        TMutationResponse extends ReturnType<TMutationHandler>,
        TMutationInfer extends InferEndpoint<
          TInferedContext,
          TMutationPath,
          TMutationMethod,
          TMutationBody,
          TMutationQuery,
          TMutationMiddlewares,
          TPlugins,
          TMutationHandler,
          TMutationResponse
        >,
      >(
        // 🔄 MUDANÇA: Remoção do constraint genérico no handler para permitir inferência livre
        options: FlameMutationOptions<
          TInferedContext,
          TMutationPath,
          TMutationMethod,
          TMutationBody,
          TMutationQuery,
          TMutationMiddlewares,
          TPlugins,
          TMutationHandler
        >,
      ) =>
        createFlameMutation<
          TInferedContext,
          TMutationPath,
          TMutationMethod,
          TMutationBody,
          TMutationQuery,
          TMutationMiddlewares,
          TPlugins,
          TMutationHandler,
          TMutationResponse,
          TMutationInfer
        >(options),

      /**
       * Creates a controller to group related actions.
       */
      controller: <TActions extends Record<string, FlameControllerBaseAction>>(
        config: FlameControllerConfig<TActions>,
      ) =>
        createFlameController<TActions>(config),

      /**
       * Creates a router with enhanced configuration.
       */
      router: <
        TControllers extends Record<
          string,
          FlameControllerConfig<any>
        >,
      >(config: {
        controllers: TControllers;
      }) => {
        return createFlameRouter<
          TInferedContext,
          TControllers,
          TConfig,
          TPlugins
        >({
          context: this._config.context as TInferedContext,
          controllers: config.controllers,
          config: { ...(this._config.config || ({} as TConfig)), docs: this._docs },
          plugins: this._plugins,
          docs: this._docs,
        });
      },

      /**
       * Creates a reusable middleware procedure.
       */
      procedure: <TOptions extends Record<string, any>, TOutput>(
        middleware: FlameProcedure<TInferedContext, TOptions, TOutput>,
      ) => createFlameProcedure(middleware),

      store: this._store,
      logger: this._logger,
      jobs: this._jobs,
      telemetry: this._telemetry,
      realtime: this._realtime,
      plugins: this._plugins,

      $Infer: {
        context: {} as TInferedContext,
        config: {} as TConfig,
        store: {} as TStore,
        logger: {} as TLogger,
        jobs: {} as TJobs,
        telemetry: {} as TTelemetry,
        realtime: {} as TRealtime,
        plugins: {} as TPlugins,
        docs: {} as TDocs,
      }
    };
  }
}

/**
 * Factory function to create a new Flame builder instance.
 *
 * @template TContext - The type of the application context
 * @returns A new FlameBuilder instance
 *
 * @example
 * // Initialize with custom context
 * const Flame = Flame
 *   .context<{ db: Database }>()
 *   .middleware([authMiddleware])
 *   .store(redisStore)
 *   .create();
 */
export const Flame = new FlameBuilder();






