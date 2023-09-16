import { checker } from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default [
  viteTsconfigPaths(),
  checker({
    typescript: true,
    eslint: {
      lintCommand: 'eslint "./**/*.{ts,tsx}"',
    },
  }),
];
