// codegen.config.js
const customFetch = require('./lib/customFetch').default;

module.exports = {
  schema: {
    'https://dev-api.animup.tv/graphql': {
      headers: {
        // Optionally add headers, e.g. Authorization
      },
      // Use our custom fetch function so requests go through V2Ray
      customFetch,
    },
  },
  documents: '**/*.graphql',
  generates: {
    'generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        reactApolloVersion: 3,
        withComponent: false,
        withHOC: false,
        useTypeImports: true,
        useSuspense: true,
        skipTypename: false,
        documentMode: 'graphQLTag',
      },
    },
  },
};