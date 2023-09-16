import { defineConfig } from 'vite';

import plugins from './vite.plugins.shared';

// https://vitejs.dev/config
export default defineConfig({
  plugins,
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
});
