# @flame-js/cli

[![NPM Version](https://img.shields.io/npm/v/@flame-js/cli.svg)](https://www.npmjs.com/package/@flame-js/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The official Command-Line Interface (CLI) for the Flame.js framework. This tool is designed to enhance developer productivity by automating common tasks like project scaffolding and running the development server.

## Role in the Ecosystem

The `@flame-js/cli` package is a key part of the Flame.js developer experience. It provides a set of simple commands that handle complex setup and execution processes, allowing you to focus on writing code instead of configuring boilerplate.

## Usage

The recommended way to use the CLI is via `npx`, which ensures you are always using the latest version without needing a global installation.

```bash
npx @flame-js/cli <command>
```

## Commands

The CLI provides two main commands to manage your project's lifecycle.

### `Flame init`

The `init` command scaffolds a new, production-ready Flame.js project from scratch. It runs an interactive setup wizard that configures your project structure, dependencies, and optional features like the Store and Queues.

**Example:**
```bash
# Create a new project in a directory named 'my-api'
npx @flame-js/cli init my-api
```

For more details, see the **[Flame init documentation](https://Flamejs.com/docs/cli-and-tooling/Flame-init)**.

### `Flame dev`

The `dev` command starts the Flame.js development server. It watches your files for changes and provides hot-reloading. Its most powerful feature is the interactive mode.

**Example:**
```bash
# Start the development server in interactive mode
Flame dev --interactive

# Start the server and manage the Next.js dev server alongside it
Flame dev --interactive --framework nextjs
```

For more details, see the **[Flame dev documentation](https://Flamejs.com/docs/cli-and-tooling/Flame-dev)**.

## Contributing

Contributions are welcome! Please see the main [CONTRIBUTING.md](/CONTRIBUTING.md) file for details on how to get started.

## License

This package is licensed under the [MIT License](/LICENSE).





