# 🚀 Electron Forge React Vite Boilerplate

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Electron](https://img.shields.io/badge/Electron-191970?style=flat&logo=Electron&logoColor=white)](https://electronjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

**A modern, feature-rich boilerplate for building cross-platform desktop applications**

[Features](#-features) • [Quick Start](#-quick-start) • [Screenshots](#-screenshots) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

The **Electron Forge React Vite Boilerplate** is your ultimate starting point for creating modern, performant desktop applications. This carefully crafted template combines the power of Electron with the speed of Vite, the flexibility of React, and the safety of TypeScript to deliver an exceptional development experience.

### Why This Boilerplate?

- 🏗️ **Production-Ready Architecture** - Clean, scalable project structure with separation of concerns
- ⚡ **Lightning Fast Development** - Hot Module Replacement (HMR) with Vite for instant feedback
- 🎨 **Native Desktop Experience** - Custom titlebar and native-feeling UI components
- 🛡️ **Type Safety First** - Full TypeScript support with strict type checking
- 🔧 **Developer Experience** - Pre-configured linting, formatting, and git hooks
- 📦 **Zero Configuration** - Ready to code out of the box with sensible defaults

## ✨ Features

### 🎨 **User Interface & Experience**

- **Custom Titlebar** - Native-looking titlebar with integrated window controls
- **Responsive Design** - Adaptive layouts that work across different screen sizes
- **Modern Styling** - TailwindCSS v4 styling system with theme support
- **Cross-Platform Consistency** - Unified experience across Windows, macOS, and Linux

### 🔧 **Development Tools**

- **Hot Module Replacement** - Instant updates during development
- **TypeScript Integration** - Full type safety with excellent IntelliSense support
- **Code Quality Tools** - Integrated BiomeJS for linting and formatting
- **Git Hooks** - Automated code quality checks with Husky
- **Path Mapping** - Clean imports with TypeScript path resolution

### 🏗️ **Architecture & Security**

- **Secure IPC Communication** - Safe main-renderer process communication
- **Context Isolation** - Properly isolated preload scripts
- **Window State Management** - Remembers window size, position, and state
- **Auto-updater Ready** - Built with Electron Forge for easy distribution

### 📦 **Build & Distribution**

- **Multi-Platform Building** - Build for Windows, macOS, and Linux from any platform
- **Optimized Bundles** - Tree-shaking and code splitting for smaller app sizes
- **Auto-Packaging** - One-command building and packaging
- **Distribution Ready** - Pre-configured makers for various package formats

## 🖼️ Screenshots

<div align="center">

### Windows

![Windows Screenshot](./screenshots/window-win.png)

### macOS

![macOS Screenshot](./screenshots/window-mac.png)

</div>

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS or higher)
- **pnpm** (v10 or higher) - This project uses pnpm as the package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate.git
   cd electron-forge-react-vite-boilerplate
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development**

   ```bash
   pnpm dev
   ```

That's it! Your application will launch in development mode with hot reloading enabled.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the app in development mode with hot reloading |
| `pnpm package` | Package the app for the current platform |
| `pnpm make` | Create distributable packages for the current platform |
| `pnpm publish` | Publish the app (configure publishers in forge.config.ts) |

## 📁 Project Structure

```txt
├── src/
│   ├── main.ts              # Main Electron process
│   ├── preload.ts           # Preload script for secure IPC
│   ├── ui/                  # React application
│   │   ├── App.tsx          # Main app component
│   │   ├── components/      # Reusable UI components
│   │   ├── screens/         # Application screens/pages
│   ├── menu/                # Application menu configuration
│   ├── ipc/                 # IPC handlers and channels
│   └── @types/              # TypeScript declarations
├── config/                  # Vite configuration files
├── assets/                  # Static assets (icons, fonts, images)
└── screenshots/             # Application screenshots
```

## 🔧 Configuration

### Customizing the Build

The project uses Electron Forge for building and packaging. You can customize the build process by modifying:

- **`forge.config.ts`** - Main Forge configuration
- **`config/vite.*.config.ts`** - Vite configurations for different processes
- **`package.json`** - Scripts and metadata

### Adding New Features

The boilerplate is designed to be easily extensible:

1. **New UI Components** - Add to `src/ui/components/`
2. **New Screens** - Add to `src/ui/screens/`
3. **IPC Channels** - Define in `src/channels/` and handle in `src/ipc/`
4. **Styling** - Use TailwindCSS classes in your components or create custom styles in `src/ui/styles/`

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:

- 📋 Code of Conduct
- 🐛 Bug Reports
- 💡 Feature Requests
- 🔧 Development Setup
- 📝 Pull Request Process

## 📄 License

This project is licensed under the [MIT License](./LICENSE) - feel free to use it for your own projects!

---

<div align="center">

**[⭐ Star this repo](https://github.com/flaviodelgrosso/electron-forge-react-typescript-boilerplate)** if you found it helpful!

Made with ❤️ by [Flavio Del Grosso](https://github.com/flaviodelgrosso)

</div>
