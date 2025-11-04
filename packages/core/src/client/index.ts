// React-specific exports (client-side only)
export { FlameProvider, useFlameQueryClient } from "./Flame.context";
export { useRealtime } from "./Flame.hooks";

// Re-export createFlameClient - will be environment-aware via imports
export { createFlameClient } from './Flame.client.browser';





