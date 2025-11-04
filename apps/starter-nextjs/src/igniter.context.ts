import { database } from "@/services/database"

/**
 * @description Create the context of the Flame.js application
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const createFlameAppContext = () => {
  return {
    database,
  }
}

/**
 * @description The context of the Flame.js application
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export type FlameAppContext = Awaited<ReturnType<typeof createFlameAppContext>>





