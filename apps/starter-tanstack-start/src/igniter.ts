import { Flame } from '@flame-js/core'
import { createFlameAppContext } from "./Flame.context"
import { store } from "@/services/store"
import { REGISTERED_JOBS } from "@/services/jobs"
import { logger } from "@/services/logger"
import { telemetry } from "@/services/telemetry"

import openapi from './docs/openapi.json'

/**
 * @description Initialize the Flame.js
 * @see https://github.com/felipebarcelospro/Flame-js
 */
export const Flame = Flame
  .context(createFlameAppContext())
  .store(store)
  .jobs(REGISTERED_JOBS)
  .logger(logger)
  .telemetry(telemetry)
  .config({
    baseURL: process.env.REACT_APP_Flame_API_URL || 'http://localhost:3000',
    basePATH: process.env.REACT_APP_Flame_API_BASE_PATH || '/api/v1',
  })
  .docs({
    openapi,
    info: {
      title: 'Flame.js Starter (Tanstack Start)',
      version: '1.0.0',
      description: 'A sample Tanstack Start App built with Flame.js',
    }
  })
  .create()





