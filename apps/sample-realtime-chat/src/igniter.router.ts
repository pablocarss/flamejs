import { Flame } from '@/Flame'
import { messageController } from './features/message'

/**
 * @description Main application router configuration
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const AppRouter = Flame.router({
  controllers: {
    message: messageController
  }
})

export type AppRouterType = typeof AppRouter





