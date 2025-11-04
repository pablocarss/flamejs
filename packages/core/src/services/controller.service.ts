import type { FlameControllerBaseAction, FlameControllerConfig } from "../types";

/**
 * Creates a controller configuration for the Flame Framework.
 * Controllers group related actions together and provide a common path prefix.
 * 
 * @template TControllerContext - The type of the controller context
 * @template TControllerActions - Record of actions belonging to this controller
 * 
 * @param config - The controller configuration object
 * @returns A configured controller object
 * 
 * @example
 * ```typescript
 * const userController = Flame.controller({
 *   path: 'users',
 *   actions: {
 *     list: Flame.query({
 *       path: '',
 *       handler: (ctx) => ctx.response.success({ users: [] })
 *     }),
 *     create: Flame.mutation({
 *       path: '',
 *       method: 'POST',
 *       body: userSchema,
 *       handler: (ctx) => ctx.response.created({ id: 1 })
 *     })
 *   }
 * });
 * ```
 */
export const createFlameController = <
  TControllerActions extends Record<string, FlameControllerBaseAction>
>(
  config: FlameControllerConfig<TControllerActions>
) => {
  return config as FlameControllerConfig<TControllerActions>;
};





