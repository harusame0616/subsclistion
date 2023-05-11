/* eslint-disable import/no-extraneous-dependencies */
import { defineVitestConfig } from 'nuxt-vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineVitestConfig({
  plugins: [AutoImport({ imports: [{ '@testing-library/vue': ['render'] }] })],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});
