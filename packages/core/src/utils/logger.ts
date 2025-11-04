import { FlameLogLevel } from '../types';

/**
 * Resolves the log level from environment variables with proper validation and fallback.
 * 
 * This utility centralizes log level resolution across the Flame.js framework.
 * It provides a consistent fallback strategy with WARN as the silent default.
 * 
 * @returns {FlameLogLevel} The resolved log level
 * 
 * @example
 * ```typescript
 * // Environment-based log level resolution
 * const level = resolveLogLevel(); // Uses Flame_LOG_LEVEL or falls back to WARN
 * 
 * // Create logger with resolved level
 * const logger = FlameConsoleLogger.create({ 
 *   level: resolveLogLevel(),
 *   context: { component: 'MyProcessor' }
 * });
 * ```
 */
export function resolveLogLevel(): FlameLogLevel {
  const envLevel = process.env.Flame_LOG_LEVEL?.toUpperCase();
  
  // Valid log levels mapping
  const validLevels: Record<string, FlameLogLevel> = {
    'FATAL': FlameLogLevel.FATAL,
    'ERROR': FlameLogLevel.ERROR,
    'WARN': FlameLogLevel.WARN,
    'INFO': FlameLogLevel.INFO,
    'DEBUG': FlameLogLevel.DEBUG,  
    'TRACE': FlameLogLevel.TRACE,
    
    // Aliases for better DX
    'WARNING': FlameLogLevel.WARN,
    'VERBOSE': FlameLogLevel.DEBUG,
  };
  
  // Return validated level or silent fallback to WARN
  return envLevel && validLevels[envLevel] ? validLevels[envLevel] : FlameLogLevel.WARN;
}

/**
 * Creates a standardized logger context for consistent logging across processors.
 * 
 * @param component - The component name (e.g., 'RequestProcessor', 'ErrorHandler')
 * @param additionalContext - Additional context properties
 * @returns {Record<string, unknown>} The standardized context object
 * 
 * @example
 * ```typescript
 * // Basic processor context
 * const context = createLoggerContext('RequestProcessor');
 * 
 * // With additional context (e.g., request-specific)
 * const context = createLoggerContext('RequestProcessor', {
 *   requestId: 'req-123',
 *   method: 'POST',
 *   route: '/api/users'
 * });
 * ```
 */
export function createLoggerContext(
  component: string, 
  additionalContext?: Record<string, unknown>
): Record<string, unknown> {
  return {
    component,
    ...additionalContext,
  };
}





