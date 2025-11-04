import { Flame } from '@flame-js/core'
import { createFlameAppContext } from "./Flame.context"
import { logger } from "@/services/logger"
import { telemetry } from "@/services/telemetry"
import { store } from './services/store'

import openapi from './docs/openapi.json'

/**
 * @description Initialize the Flame.js
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const Flame = Flame
  .context(createFlameAppContext())
  .store(store)
  .logger(logger)
  .telemetry(telemetry)
  .config({
    baseURL: process.env.NEXT_PUBLIC_Flame_API_URL || 'http://localhost:3000',
    basePATH: process.env.NEXT_PUBLIC_Flame_API_BASE_PATH || '/api/v1',
  })
  .docs({
    openapi,
    info: {
      title: 'Sample Realtime Chat',
      version: '1.0.0',
      description: 'A sample realtime chat application built with Flame.js',
      contact: {
        name: 'Flame.js',
        email: 'team@Flamejs.com',
        url: 'https://github.com/felipebarcelospro/Flame-js'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    }
  })
  .create()





