module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    '@nuxt/eslint-config',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
        peerDependencies: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: 'tsconfig.json',
      },
    },
  },
};
