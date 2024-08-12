import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
// import { getSession } from "./authUtils";

const httpLink = new HttpLink({
  uri: "https://api.anilist.top/graphql",
});

// const authLink = setContext(async (_, { headers }) => {
//   const session = await getSession();

//   const token = session?.accessToken || "";
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    // link: ApolloLink.from([
    //   authLink,
    //   new SSRMultipartLink({ stripDefer: true }),
    //   httpLink,
    // ]),
    link: httpLink,
  });
});
