module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-import-resolver-typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx}',
          'test-*.{ts,tsx}',
          '**/*{.,_}{test,spec}.{ts,tsx}',
          '**/jest.config.ts',
          '**/jest.setup.ts',
        ],
        optionalDependencies: false,
      },
    ],
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      project: 'tsconfig.json',
    },
  },
};
