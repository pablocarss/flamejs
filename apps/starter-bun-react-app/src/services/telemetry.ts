import { createConsoleTelemetryAdapter } from '@flame-js/core/adapters'
import { store } from './store'

/**
 * Telemetry service for tracking requests and errors.
 *
 * @remarks
 * Provides telemetry tracking with configurable options.
 *
 * @see https://github.com/felipebarcelospro/Flame-js/tree/main/packages/core
 */
export const telemetry = createConsoleTelemetryAdapter({
  serviceName: 'sample-react-app',
  enableEvents: Bun.env.Flame_TELEMETRY_ENABLE_EVENTS === 'true',
  enableMetrics: Bun.env.Flame_TELEMETRY_ENABLE_METRICS === 'true',
  enableTracing: Bun.env.Flame_TELEMETRY_ENABLE_TRACING === 'true',
}, {
  enableCliIntegration: Bun.env.Flame_TELEMETRY_ENABLE_CLI_INTEGRATION === 'true',
  store: store
})





