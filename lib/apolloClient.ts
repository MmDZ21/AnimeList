import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { cookies } from 'next/headers'
import {jwtDecode} from "jwt-decode";
import { auth } from "@/auth";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "https://dev-api.alplayer.ir/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      fetchOptions: { 
        next: {
          revalidate: 3600
        }
       },
    }),
  });
});


export const {
  getClient: getAuthClient,
  query: authQuery,
  PreloadQuery: AuthPreloadQuery,
} = registerApolloClient(() => {
  const authLink = setContext(async (_, { headers }) => {
    // Retrieve the access token from storage (e.g., localStorage or cookies)
    const session = await auth()
    const accessToken = session? session.user?.accessToken : null
    
    console.log("access token: " + accessToken)

    return {
      headers: {
        ...headers,
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });

  const httpLink = new HttpLink({
    uri: "https://dev-api.alplayer.ir/graphql",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});