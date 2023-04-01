import { ApolloClient, InMemoryCache } from '@apollo/client/core';

export const GraphqlClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export const getGraphqlClient = () => GraphqlClient;
