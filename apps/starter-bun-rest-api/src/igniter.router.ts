import { Flame } from '@/Flame'
import { exampleController } from '@/features/example'

/**
 * @description Main application router configuration
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const AppRouter = Flame.router({
  controllers: {
    example: exampleController
  }
})

export type AppRouterType = typeof AppRouter





