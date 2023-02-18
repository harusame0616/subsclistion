import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/**/*.graphql',
  documents: ['../web/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/generated/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
        scalars: {
          Date: 'Date',
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
    '../web/src/generated/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        scalars: {
          Date: 'string',
        },
      },
      plugins: [],
    },
  },
};
export default config;
