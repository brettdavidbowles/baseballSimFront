import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"

import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  return {
  headers: {
       ...headers,
       'x-hasura-admin-secret': process.env.HASURA_ACCESS_KEY
     }
   }
 });

 const httpLink = createHttpLink({
  uri: process.env.API_URL,
 });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;