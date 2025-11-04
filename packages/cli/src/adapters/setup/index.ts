/**
 * @fileoverview Setup and initialization system for Flame.js projects
 * 
 * This module provides a comprehensive project setup system similar to T3 Stack CLI,
 * with interactive prompts, feature selection, and automated project generation.
 */

// Main setup command
export { 
  handleInitCommand,
  initInCurrentDirectory,
  initInNewDirectory,
  validateProjectName,
  showInitHelp 
} from './init.setup'

// Interactive prompts system
export { 
  runSetupPrompts,
  confirmOverwrite 
} from './prompts'

// Project generation system
export { 
  ProjectGenerator,
  generateProject 
} from './generator'

// Template generation
export {
  generateFlameRouter,
  generateExampleController,
  generateMainRouter,
  generatePackageJson,
  generateTsConfig,
  generateEnvFile,
  generateDockerCompose,
  generateGitIgnore,
  generateReadme,
  generateAllTemplates
} from './templates'

// Feature configuration system
export {
  Flame_FEATURES,
  DATABASE_CONFIGS,
  getFeatureDependencies,
  getDockerServices,
  getEnvironmentVariables
} from './features'

// Type definitions
export type {
  ProjectSetupConfig,
  FlameFeatures,
  DatabaseProvider,
  DatabaseConfig,
  PackageManager,
  TemplateFile,
  PackageDependency,
  GenerationContext,
  FeatureDefinition,
  DockerService,
  EnvVariable,
} from './types' 





