const path = require('path');
const Components = require('unplugin-vue-components/vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  staticDirs: [{ from: '../assets', to: '/~/assets' }],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config) {
    const rootDir = path.resolve(__dirname, '..');
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(rootDir, 'assets'),
    };
    config.plugins.push(
      Components({
        dts: false,
        dirs: [path.resolve(rootDir, 'components')],
      })
    );
    return config;
  },
};
