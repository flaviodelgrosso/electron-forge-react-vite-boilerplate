import path from 'path';

import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { VitePlugin } from '@electron-forge/plugin-vite';
import type { ForgeConfig } from '@electron-forge/shared-types';

import { productName } from './package.json';

const rootDir = process.cwd();

const config: ForgeConfig = {
  packagerConfig: {
    // Create asar archive for main, renderer process files
    asar: true,
    // Set executable name
    executableName: productName,
    // Set application copyright
    appCopyright: 'Copyright (C) 2023 Flavio Del Grosso',
    // Set application icon
    icon: path.resolve(rootDir, 'assets/icons/icon'),
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel({ name: productName }), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'src/main.ts',
          config: 'config/vite.main.config.ts',
        },
        {
          entry: 'src/preload.ts',
          config: 'config/vite.preload.config.ts',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'config/vite.renderer.config.ts',
        },
      ],
    }),
  ],
};

export default config;
