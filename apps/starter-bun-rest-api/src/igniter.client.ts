/* eslint-disable */
/* prettier-ignore */

import { createFlameClient, useFlameQueryClient } from '@flame-js/core/client'
import type { AppRouterType } from './Flame.router'

/**
* Type-safe API client generated from your Flame router
*
* Usage in Server Components:
* const users = await api.users.list.query()
*
* Usage in Client Components:
* const { data } = api.users.list.useQuery()
*
* Note: Adjust environment variable prefixes (e.g., NEXT_PUBLIC_, BUN_PUBLIC_, DENO_PUBLIC_, REACT_APP_)
*       according to your project's framework/runtime (Next.js, Bun, Deno, React/Vite, etc.).
*/
export const api = createFlameClient<AppRouterType>({
  baseURL: process.env.Flame_API_URL || 'http://localhost:3000',
  basePATH: process.env.Flame_API_BASE_PATH || '/api/v1',
  router: () => {
    if (typeof window === 'undefined') {
      return require('./Flame.router').AppRouter
    }

    return require('./Flame.schema').AppRouterSchema
  },
})

/**
  * Type-safe API client generated from your Flame router
  *
  * Usage in Server Components:
  * const users = await api.users.list.query()
  *
  * Usage in Client Components:
  * const { data } = api.users.list.useQuery()
  */
export type ApiClient = typeof api

/**
  * Type-safe query client generated from your Flame router
  *
  * Usage in Client Components:
  * const { invalidate } = useQueryClient()
  */
export const useQueryClient = useFlameQueryClient<AppRouterType>;





