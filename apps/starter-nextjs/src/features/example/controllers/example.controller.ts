import { Flame } from '@/Flame'
import { z } from 'zod'

export const exampleController = Flame.controller({
  name: 'example',
  path: '/example',
  actions: {
    hello: Flame.query({
      path: '/hello',
      handler: async ({ response }) => {
        return response.success({ message: 'Hello from example!' })
      },
    }),
  },
})





