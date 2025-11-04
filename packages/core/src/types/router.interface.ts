import type { FlameControllerConfig } from "./controller.interface";
import type { DocsConfig, FlameBaseConfig } from "./builder.interface";
import type { ContextCallback } from "./context.interface";
import type { MutationActionCallerResult, QueryActionCallerResult } from "./client.interface";
import type { FlameAction } from "./action.interface";
import type { Prettify } from "./utils.interface";

export type FlameRouterCaller<
  TControllers extends Record<string, FlameControllerConfig<any>>, // ✅ Simplificado
> = {
  [C in keyof TControllers]: {
    [A in keyof TControllers[C]['actions']]:
    TControllers[C]['actions'][A]['type'] extends 'query' ? {
      type: 'query';
      query: (input: any) => Promise<TControllers[C]['actions'][A]['$Infer']['$Response']>
    } : {
      type: 'mutation';
      useMutation: (...args: any[]) => MutationActionCallerResult<TControllers[C]['actions'][A]>
      mutation: (input: any) => Promise<TControllers[C]['actions'][A]['$Infer']['$Response']>
    }
  }
}

export type ServerExtraCallerInput = {
  headers?: Record<string, string> | undefined;
  cookies?: Record<string, string>;
  credentials?: RequestCredentials;
}

export type InferServerRouterCallerAction<
  TAction extends FlameAction<any, any, any, any, any, any, any, any, any, any>,
  TCaller = TAction['$Infer']['$Caller'],
  TCallerParams = TCaller extends (input: infer P) => any ? P : never,
  TCallerReturn = TCaller extends (input: any) => Promise<infer R> ? R : never
> = TAction extends { method: "GET" }
  ? {
      type: 'query';
      query: (input: TCallerParams) => Promise<TCallerReturn>;
    }
  : {
      type: 'mutation';
      mutate: (input: TCallerParams) => Promise<TCallerReturn>;
    };

export type InferServerRouterCaller<
  TRouter extends FlameRouter<any, any, any, any, any>,
> =
  TRouter extends FlameRouter<any, infer TControllers, any, any, any>
    ? {
        [TControllerName in keyof TControllers]: {
          [TActionName in keyof TControllers[TControllerName]["actions"]]: InferServerRouterCallerAction<
            TControllers[TControllerName]["actions"][TActionName]
          >;
        };
      }
    : never;

export type FlameRouterConfig<
  TContext extends object | ContextCallback,
  TControllers extends Record<string, FlameControllerConfig<any>>, // ✅ Simplificado
  TConfig extends FlameBaseConfig,
  TPlugins extends Record<string, any>,
  TDocs extends DocsConfig
> = {
  config: TConfig;
  controllers: TControllers;
  context: TContext;  
  plugins: TPlugins;
  docs: TDocs;
}

export type FlameRouter<
  TContext extends object | ContextCallback,
  TControllers extends Record<string, FlameControllerConfig<any>>, // ✅ Simplificado
  TConfig extends FlameBaseConfig,
  TPlugins extends Record<string, any>,
  TDocs extends DocsConfig,
> = {
  config: TConfig & { docs?: TDocs };
  controllers: TControllers;
  handler: (request: Request) => Promise<Response>;
  caller: InferServerRouterCaller<FlameRouter<TContext, TControllers, TConfig, TPlugins, TDocs>>;
  $Infer: {
    $context: TContext;
    $plugins: TPlugins;
  }
}





