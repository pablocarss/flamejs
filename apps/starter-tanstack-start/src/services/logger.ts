import { createConsoleLogger, FlameLogLevel } from '@flame-js/core'

/**
  * Logger instance for application logging.
  *
  * @remarks
  * Provides structured logging with configurable log levels.
  * This is used by the Flame instance to log events.
  *
  * @see https://github.com/felipebarcelospro/Flame-js
  */
export const logger = createConsoleLogger({
  level: FlameLogLevel.INFO, // Change to DEBUG for more verbose logs
  showTimestamp: true,
})





