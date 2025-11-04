import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { loadRouter } from './introspector';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

describe('loadRouter with external dependencies', () => {
  let tempDir: string;
  let routerPath: string;

  beforeAll(async () => {
    // Create a temporary directory for testing
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'Flame-test-'));
    
    // Create a simple router file that imports from @flame-js/core
    const routerContent = `
      import { Flame } from '@flame-js/core'

      const Flame = Flame
        .context(async () => ({}))
        .config({
          baseURL: 'http://localhost:3000',
          basePATH: '/api/v1',
        })
        .create()

      const testController = Flame.controller({
        path: '/test',
        actions: {
          hello: Flame.query({
            method: 'GET',
            path: '/hello',
            handler: async () => {
              return { message: 'Hello World' }
            }
          })
        }
      })

      export const AppRouter = Flame.router({
        controllers: {
          test: testController
        }
      })
    `;
    
    routerPath = path.join(tempDir, 'Flame.router.ts');
    fs.writeFileSync(routerPath, routerContent, 'utf-8');
  });

  afterAll(() => {
    // Clean up
    if (tempDir && fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('should successfully load a router with external dependencies', async () => {
    const router = await loadRouter(routerPath);
    
    expect(router).toBeDefined();
    expect(router.controllers).toBeDefined();
    expect(router.caller).toBeDefined();
    expect(router.handler).toBeDefined();
    
    // Check that the controller was loaded correctly
    expect(router.controllers.test).toBeDefined();
    expect(router.controllers.test.actions).toBeDefined();
    expect(router.controllers.test.actions.hello).toBeDefined();
  });

  it('should have a properly initialized caller property', async () => {
    const router = await loadRouter(routerPath);
    
    // The caller should be a Proxy object
    expect(typeof router.caller).toBe('object');
    expect(router.caller).not.toBeNull();
    
    // It should have the controller accessible
    expect(router.caller.test).toBeDefined();
    expect(router.caller.test.hello).toBeDefined();
  });
});





