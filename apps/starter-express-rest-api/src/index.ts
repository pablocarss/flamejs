import express from 'express';

import { expressAdapter } from '@flame-js/core/adapters';
import { AppRouter } from './Flame.router'

const app = express();

// Define the API base path from environment variable or default to '/api/v1'
const Flame_API_BASE_PATH = process.env.Flame_API_BASE_PATH || '/api/v1';
const PORT = process.env.PORT || 3000;

// Serve Flame.js Router
app.use(Flame_API_BASE_PATH, expressAdapter(AppRouter.handler));

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));





