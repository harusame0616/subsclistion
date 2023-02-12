module.exports = {
  root: true,

  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    '@nuxt/eslint-config',
    'prettier',
  ],

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },

  ignorePatterns: ['.eslintrc.js'],
};
