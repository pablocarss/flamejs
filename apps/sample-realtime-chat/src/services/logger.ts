import { createConsoleLogger, FlameLogLevel } from '@flame-js/core'

/**
 * Logger instance for application logging.
 *
 * @remarks
 * Provides structured logging with configurable log levels.
 *
 * @see https://github.com/felipebarcelospro/Flame-js/tree/main/packages/core
 */
export const logger = createConsoleLogger({
  level: FlameLogLevel.INFO,
  showTimestamp: true,
})





