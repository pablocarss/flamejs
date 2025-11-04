// Browser-specific barrel file
// React-specific exports (client-side only)
export { FlameProvider, useFlameQueryClient } from "./Flame.context";
export { useRealtime } from "./Flame.hooks";

// Browser-specific createFlameClient (uses fetch + hooks)
export { createFlameClient } from './Flame.client.browser';





