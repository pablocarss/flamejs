import type { FlameRouter } from "@flame-js/core";
import type { ServerCapabilities } from "@modelcontextprotocol/sdk/types.js";
import { createMcpAdapter } from "src/core/adapter";
import type { ArgsRawShape, McpAdapterOptions, McpAdapterSpecificOptions, McpCustomTool, McpEventsOptions, McpOAuthConfig, McpPrompt, McpResource, McpResponseOptions, McpServerInfo, McpToolTransform } from "src/types";

export class FlameMcpServer<
  TRouter extends FlameRouter<any, any, any, any, any>,
  TCustomTools extends readonly McpCustomTool<any, any>[],
  TCustomPrompts extends readonly McpPrompt<any, any>[],
  TCustomResources extends readonly McpResource<any>[]
> {
  private _options: McpAdapterOptions<TRouter, TRouter['$Infer']['$context']>;
  private _handler: {
    server: (request: Request) => Promise<Response>;
    auth: {
      resource: (request: Request) => Promise<Response> | Response;
      cors: (request: Request) => Promise<Response> | Response;
    };
  };

  constructor(options?: McpAdapterOptions<TRouter, TRouter['$Infer']['$context']>) {
    this._options = options || {} as McpAdapterOptions<TRouter, TRouter['$Infer']['$context']>
    this._handler = {
      server: async (request: Request) => new Response('Not implemented', { status: 501 }),
      auth: {
        resource: async (request: Request) => new Response('Not implemented', { status: 501 }),
        cors: async (request: Request) => new Response('Not implemented', { status: 501 }),
      }
    };
  }

  static create() {
    return new FlameMcpServer();
  }

  router<
    TNewRouter extends FlameRouter<any, any, any, any, any>,
  >(router: TNewRouter): FlameMcpServer<TNewRouter, [], [], []> {
    const { router: _, ...rest } = this._options;
    return new FlameMcpServer<TNewRouter, [], [], []>({
      ...rest,
      router,
    });
  }

  withLogger(logger: {
    log: (message: string) => void;
    error: (message: string) => void;
    warn: (message: string) => void;
    debug: (message: string) => void;
  }): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.logger = logger;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withToolTransform(transform: McpToolTransform): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    if (!this._options.tools) {
      this._options.tools = { autoMap: true, custom: [] };
    }
    this._options.tools.transform = transform;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withInstructions(instructions: string): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.instructions = instructions;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }
  
  withCapabilities(capatibilities: ServerCapabilities): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.capatibilities = capatibilities;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withServerInfo(serverInfo: McpServerInfo): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.serverInfo = serverInfo;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withOAuth(oauth: McpOAuthConfig): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.oauth = oauth;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  addPrompt<
    TArgs extends ArgsRawShape,
    TPrompt extends McpPrompt<TArgs, TRouter['$Infer']['$context']>
  >(prompt: TPrompt): FlameMcpServer<TRouter, TCustomTools, [...TCustomPrompts, TPrompt], TCustomResources> {
    if (!this._options.prompts) {
      this._options.prompts = { custom: [] };
    }
    if (!this._options.prompts.custom) {
      this._options.prompts.custom = [];
    }
    this._options.prompts.custom.push(prompt);
    return new FlameMcpServer<TRouter, TCustomTools, [...TCustomPrompts, TPrompt], TCustomResources>({
      ...this._options,
    });
  }

  addTool<
    TArgs extends ArgsRawShape,
    TTool extends McpCustomTool<TArgs, TRouter['$Infer']['$context']>
  >(tool: McpCustomTool<TArgs, TRouter['$Infer']['$context']>): FlameMcpServer<TRouter, [...TCustomTools, TTool], TCustomPrompts, TCustomResources> {
    if (!this._options.tools) {
      this._options.tools = { autoMap: true, custom: [] };
    }
    if (!this._options.tools.custom) {
      this._options.tools.custom = [];
    }
    this._options.tools.custom.push(tool);
    return new FlameMcpServer<TRouter, [...TCustomTools, TTool], TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  addResource<TResource extends McpResource<TRouter['$Infer']['$context']>>(resource: TResource): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, [...TCustomResources, TResource]> {
    if (!this._options.resources) {
      this._options.resources = { custom: [] };
    }
    if (!this._options.resources.custom) {
      this._options.resources.custom = [];
    }
    this._options.resources.custom.push(resource);
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, [...TCustomResources, TResource]>({
      ...this._options,
    });
  }

  withEvents(events: McpEventsOptions<TRouter['$Infer']['$context']>): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.events = events;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withResponse(response: McpResponseOptions<TRouter['$Infer']['$context']>): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.response = response;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  withAdapter(adapter: McpAdapterSpecificOptions): FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources> {
    this._options.adapter = adapter;
    return new FlameMcpServer<TRouter, TCustomTools, TCustomPrompts, TCustomResources>({
      ...this._options,
    });
  }

  build() {
    if (!this._options.router) {
      throw new Error("Router is required to build the MCP server.");
    }

    this._handler = createMcpAdapter<TRouter>(this._options);

    return {
      handler: this._handler.server,
      auth: this._handler.auth,
      $Infer: {
        $context: {} as TRouter['$Infer']['$context'],
        $tools: {} as TCustomTools,
        $prompts: {} as TCustomPrompts,
        $resources: {} as TCustomResources,
      }
    };
  }
}





