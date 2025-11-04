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
  .config({
    baseURL: Bun.env.BUN_PUBLIC_Flame_API_URL || 'http://localhost:3000',
    basePATH: Bun.env.BUN_PUBLIC_Flame_API_BASE_PATH || '/api/v1',
  })
  .docs({
    openapi,
    info: {
      title: 'Flame.js Starter (Bun REST API)',
      version: '1.0.0',
      description: 'A sample Bun REST API built with Flame.js',
    }
  })
  .create()





