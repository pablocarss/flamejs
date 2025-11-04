// Server-specific barrel file
// React-specific exports (work in server environment)
export { FlameProvider, useFlameQueryClient } from "./Flame.context";
export { useRealtime } from "./Flame.hooks";

// Server-specific createFlameClient (uses router.caller directly)
export { createFlameClient } from './Flame.client.server';





