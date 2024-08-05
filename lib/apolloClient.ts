// const httpLink = createHttpLink({
//   uri: "https://api.anilist.top/graphql",
// });

// const authLink = setContext(async (_, { headers }) => {
//   const session = await auth();
//   const token = session?.user?.accessToken || "";

//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// export default client;
import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.anilist.top/graphql",
    }),
  });
});
