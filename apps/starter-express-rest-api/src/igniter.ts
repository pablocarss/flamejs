import { Flame } from '@flame-js/core'
import { createFlameAppContext } from "./Flame.context"
import { store } from "@/services/store"
import { REGISTERED_JOBS } from "@/services/jobs"
import { logger } from "@/services/logger"
import { telemetry } from "@/services/telemetry"

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
    baseURL: process.env.Flame_API_URL || 'http://localhost:3000',
    basePATH: process.env.Flame_API_BASE_PATH || '/api/v1',
  })
  .docs({
    openapi: require('./docs/openapi.json'),
    info: {
      title: 'Flame.js Starter (Express REST API)',
      version: '1.0.0',
      description: 'A sample Express REST API built with Flame.js',
    }
  })
  .create()





