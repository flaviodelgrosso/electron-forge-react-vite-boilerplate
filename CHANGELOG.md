# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/compare/v2.2.0...v2.2.1) (2025-06-07)

## [2.2.0](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/compare/v2.1.1...v2.2.0) (2025-06-07)


### Features

* add macOS-specific titlebar styling and app name display ([8ffb4f5](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/8ffb4f5c06e976b0d4695ad8747568307f5ef418))


### Bug Fixes

* change import to type for globals in globals.d.ts ([788952e](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/788952e93f84c1ebceeb69d3780c7466c7c3c88f))
* update default formatter for JSON and JSONC files ([ae9d336](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/ae9d3369f06e0dc77002631b8e8e2678f166a104))
* update path resolution method in createAppWindow function ([6ed5b94](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/6ed5b9478e9c8e0837b286393a336803840a29da))

### [2.1.1](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/compare/v2.1.0...v2.1.1) (2025-06-07)


### Features

* add shadcn and landing page ([94223fd](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/94223fd4e797b153db08241727b2d3cd3d54962d))


### Bug Fixes

* update color variables in globals.css for consistency ([0fb386e](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/0fb386e5f3fc6b374778b709a2c003d03d86147d))
* update conditional rendering for Menu and WindowControls on Windows ([105c639](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/105c6399c3b9782bdd380a9f42ef4c6027676236))

## [2.1.0](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/compare/v2.0.0...v2.1.0) (2025-06-07)

### Features

* add tailwindcss v4 ([#4](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/issues/4)) ([58a422d](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/58a422d53fdd9d1a463cff6499ddb15d46edd075))

### Bug Fixes

* correct variable name in installExtension promise ([5df058a](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/5df058a43511f87d6b54b5c4441cf69e9880a88c))
* update preload path to use import.meta.dirname ([131227d](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/commit/131227d3d56c07406121514b1c1409140ab0158e))

## [2.0.0](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate/compare/v1.1.0...v2.0.0) (2025-06-06)

## 🚀 BREAKING CHANGE

* ⬆️ Upgraded `@electron-forge` and related sub-packages to `7.8.1`.
* ⚡ Upgraded `vite` to version `6` for better performance and features.
* 🧹 Updated all dependencies and devDependencies to modernize the codebase.
* ✨ Added support for ECMAScript Modules (ESM).
* 📦 Move from yarn to pnpm package manager.

## 🛠️ Tooling

* 🔄 Switched from ESLint to [Biome](https://biomejs.dev) for unified linting and formatting.
* 🧰 Refactored build configurations for improved compatibility and maintainability.
* 📝 Updated project metadata and documentation to reflect the latest tooling and structure.
