/**
 * @description Create the context of the Flame.js application
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const createFlameAppContext = () => {
  // Add application-wide context properties here, like database clients.
  return {};
};

/**
 * @description The context of the Flame.js application.
 * This type is enhanced by Flame's built-in features like logger, store, etc.
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export type FlameAppContext = Awaited<
  ReturnType<typeof createFlameAppContext>
>;





