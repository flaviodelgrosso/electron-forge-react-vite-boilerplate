import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

import { productName, version } from '../package.json';

import plugins from './vite.plugins.shared';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react(), svgrPlugin(), ...plugins],
  define: {
    __DARWIN__: process.platform === 'darwin',
    __WIN32__: process.platform === 'win32',
    __LINUX__: process.platform === 'linux',
    __APP_NAME__: JSON.stringify(productName),
    __APP_VERSION__: JSON.stringify(version),
    __DEV__: process.env.NODE_ENV === 'development',
  },
});
