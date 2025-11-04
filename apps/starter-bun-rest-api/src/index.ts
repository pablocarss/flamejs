import { serve } from "bun";
import { AppRouter } from './Flame.router'

const Flame_API_BASE_PATH = process.env.Flame_API_BASE_PATH || '/api/v1/'; // Define the base path for the API

const server = serve({
  routes: {
    // Serve Flame.js Router
    [Flame_API_BASE_PATH + "*"]: AppRouter.handler,
  },
});

console.log(`🚀 Server running at ${server.url}`);





