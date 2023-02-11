import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/**/*.graphql',
  generates: {
    './src/generated/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
