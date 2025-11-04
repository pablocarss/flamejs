import { createFileRoute } from '@tanstack/react-router'
import { AppRouter } from '@/Flame.router'

/**
 * API route handler for Flame.js using TanStack Start.
 *
 * This file acts as a "catch-all" for any requests made to `/api/v1/*`.
 * It intercepts the incoming web standard `Request` object and passes it
 * to the Flame.js router for processing.
 *
 * @see https://github.com/felipebarcelospro/Flame-js
 * @see https://tanstack.com/start/latest/docs/framework/api-routes
 */

/**
 * The core handler function that bridges TanStack Start and Flame.js.
 * @param request - The incoming `Request` object from the client.
 * @returns A standard `Response` object.
 */
const FlameApiHandler = async ({ request }: { request: Request }) => {
  // 1. Pass the incoming request to the Flame router's handler.
  const FlameResponse = await AppRouter.handler(request)

  // 2. The Flame handler returns a standardized response object.
  // We need to convert its body to a string for the Response constructor.
  const body = FlameResponse.body ? JSON.stringify(FlameResponse.body) : null

  // 3. Construct and return a standard Web API Response object.
  return new Response(body, {
    status: FlameResponse.status,
    headers: FlameResponse.headers,
  })
}

// Create the route using TanStack's file-based routing system.
// The path `/api/v1/$` is automatically inferred from this file's location.
export const Route = createFileRoute('/api/v1/$')({
  /**
   * The `loader` function handles GET and HEAD requests.
   * We assign our universal handler to it.
   */
  loader: FlameApiHandler,

  /**
   * The `action` function handles POST, PUT, PATCH, DELETE requests.
   * We assign the same universal handler to it.
   */
  action: FlameApiHandler,
})





