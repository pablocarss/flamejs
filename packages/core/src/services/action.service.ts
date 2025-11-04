import type { FlamePlugin } from "../types/plugin.interface";
import type { StandardSchemaV1, FlameProcedure, FlameActionHandler, FlameActionContext, QueryMethod, InferEndpoint, FlameQueryOptions, FlameAction, MutationMethod } from "../types";

/**
 * Creates a type-safe query action for the Flame Framework.
 * Query actions are used for retrieving data and should be idempotent.
 * 
 * @template TActionContext - The type of the action context
 * @template TActionPath - The URL path for the action
 * @template TActionQuery - The query parameters schema
 * @template TActionResponse - The expected response type
 * @template TActionMiddlewares - Array of middleware procedures
 * @template TActionHandler - The action handler function type
 * @template TActionInfer - The inferred types for the action
 * 
 * @param input - Configuration options for the query action
 * @returns A configured query action
 * 
 * @example
 * ```typescript
 * const getUsers = createFlameQuery({
 *   path: 'users',
 *   query: z.object({ page: z.number() }),
 *   use: [authMiddleware],
 *   handler: async (ctx) => {
 *     // Handler implementation
 *     return ctx.response.success({ users: [] });
 *   }
 * });
 * ```
 */
export const createFlameQuery = <
  TQueryContext extends object,
  TQueryPath extends string,
  TQueryQuery extends StandardSchemaV1 | undefined,
  TQueryMiddlewares extends readonly FlameProcedure<TQueryContext, any, unknown>[] | undefined,
  TQueryPlugins extends Record<string, FlamePlugin<any, any, any, any, any, any, any, any>>,
  TQueryHandler extends FlameActionHandler<
    FlameActionContext<TQueryContext, TQueryPath, QueryMethod, undefined, TQueryQuery, TQueryMiddlewares, TQueryPlugins>,
    unknown
  >,
  TQueryResponse extends ReturnType<TQueryHandler>,
  TQueryInfer extends InferEndpoint<
    TQueryContext,
    TQueryPath,
    QueryMethod,
    undefined,
    TQueryQuery,
    TQueryMiddlewares,
    TQueryPlugins,
    TQueryHandler,
    TQueryResponse
  >
>(options: FlameQueryOptions<
  TQueryContext,
  TQueryPath,
  TQueryQuery,
  TQueryMiddlewares,
  TQueryPlugins,
  TQueryHandler
>) => {
  type TQuery = FlameAction<
    TQueryContext,
    TQueryPath,
    QueryMethod,
    undefined,
    TQueryQuery,
    TQueryMiddlewares,
    TQueryPlugins,
    TQueryHandler,
    TQueryResponse,
    TQueryInfer
  >

  return {
    ...options,
    method: 'GET' as const,
    $Infer: {} as TQueryInfer
  } as TQuery;
}

/**
 * Creates a type-safe mutation action for the Flame Framework.
 * Mutation actions are used for modifying data and typically use HTTP methods like POST, PUT, PATCH, or DELETE.
 * 
 * @template TActionContext - The type of the action context
 * @template TActionPath - The URL path for the action
 * @template TActionMethod - The HTTP method for the mutation
 * @template TActionBody - The request body schema
 * @template TActionResponse - The expected response type
 * @template TActionMiddlewares - Array of middleware procedures
 * @template TActionHandler - The action handler function type
 * @template TActionInfer - The inferred types for the action
 * 
 * @param options - Configuration options for the mutation action
 * @returns A configured mutation action
 * 
 * @example
 * ```typescript
 * const createUser = createFlameMutation({
 *   path: 'users',
 *   method: 'POST',
 *   body: z.object({
 *     name: z.string(),
 *     email: z.string().email()
 *   }),
 *   use: [authMiddleware, validateMiddleware],
 *   handler: async (ctx) => {
 *     const user = await createUserInDb(ctx.request.body);
 *     return ctx.response.created(user);
 *   }
 * });
 * ```
 */
export const createFlameMutation = <
  TMutationContext extends object,
  TMutationPath extends string,
  TMutationMethod extends MutationMethod,
  TMutationBody extends StandardSchemaV1 | undefined,
  TMutationQuery extends StandardSchemaV1 | undefined,
  TMutationMiddlewares extends readonly FlameProcedure<TMutationContext, any, any>[] | undefined,
  TMutationPlugins extends Record<string, FlamePlugin<any, any, any, any, any, any, any, any>>,
  TMutationHandler extends FlameActionHandler<
    FlameActionContext<TMutationContext, TMutationPath, TMutationMethod, TMutationBody, TMutationQuery, TMutationMiddlewares, TMutationPlugins>,
    any
  >,
  TMutationResponse extends ReturnType<TMutationHandler>,
  TMutationInfer extends InferEndpoint<
    TMutationContext,
    TMutationPath,
    TMutationMethod,
    TMutationBody,
    TMutationQuery,
    TMutationMiddlewares,
    TMutationPlugins,
    TMutationHandler,
    TMutationResponse
  >,
>(action: {
  name?: string,
  path: TMutationPath,
  method: TMutationMethod,
  description?: string,
  body?: TMutationBody,
  query?: TMutationQuery,
  use?: TMutationMiddlewares,
  handler: TMutationHandler,
}) => {
  type TMutation = FlameAction<
    TMutationContext,
    TMutationPath,
    TMutationMethod,
    TMutationBody,
    TMutationQuery,
    TMutationMiddlewares,
    TMutationPlugins,
    TMutationHandler,
    TMutationResponse,
    TMutationInfer
  >

  return {
    name: action.name,
    type: 'mutation' as const,
    path: action.path,
    method: action.method,
    description: action.description,
    body: action.body,
    query: action.query,
    use: action.use,
    handler: action.handler,
    $Infer: {} as TMutationInfer
  } as TMutation;
}





