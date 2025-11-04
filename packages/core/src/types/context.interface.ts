import type { JobsNamespaceProxy } from "./jobs.interface";
import type { FlameLogger } from "./logger.interface";
import type { FlamePlugin, PluginActionsCollection, PluginSelfContext } from "./plugin.interface";
import type { FlameStoreAdapter } from "./store.interface";
import type { FlameTelemetryProvider } from "./telemetry.interface";
import type { Prettify } from "./utils.interface";

/**
 * Plugins configuration that merges known plugins with custom ones.
 * This ensures IntelliSense always suggests the 4 known plugins while allowing custom extensions.
 * 
 * @template TCustomPlugins - Additional custom plugins
 */
export type PluginsConfig<TCustomPlugins extends Record<string, unknown> = {
  store?: FlameStoreAdapter;
  logger?: FlameLogger;
  jobs?: JobsNamespaceProxy<any>;
  telemetry?: FlameTelemetryProvider;
}> = TCustomPlugins;

/**
 * The FlameBaseContext type composes the user-defined context (TContext)
 * with a $plugins property containing the provided plugins.
 *
 * @template TContext - The user-defined context object
 * @template TPlugins - The plugins object, keys and types are inferred from what is actually passed
 */
export type FlameBaseContext<
  TContext extends object = {},
  TPlugins extends Record<string, unknown> = {}
> = Prettify<TContext & { $plugins: TPlugins }>;

/**
 * Unwraps a context if it's wrapped in a function, otherwise returns the context as-is.
 */
export type Unwrap<T> = T extends (...args: any[]) => infer R
  ? R extends Promise<infer U>
    ? U
    : R
  : T;

/**
 * Infers the final context type from either the context object directly or from a function.
 */
export type InferFlameContext<T> = Unwrap<T>;

/**
 * Context callback function type - receives the incoming request and returns context
 */
export type ContextCallback = (request?: Request) => object | Promise<object>;





