import { Flame } from '@/Flame'

/**
 * @description Example controller demonstrating Flame.js features
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const exampleController = Flame.controller({
  name: 'Example',
  path: '/example',
  actions: {
    // Health check action
    health: Flame.query({
      path: '/',
      handler: async ({ response }) => {
        Flame.logger.info('Health check requested')

        return response.success({
          status: 'ok',
          timestamp: new Date().toISOString(),
          features: {
            store: true,
            jobs: true,
            mcp: true,
            logging: true
          }
        })
      }
    }),
  }
})





