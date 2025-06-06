import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { auth } from "@/auth";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: process.env.API_URL,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      fetchOptions: { 
        next: {
          revalidate: 120 // 2 minutes
        }
       },
    }),
  });
});

export function getNoCacheClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.API_URL,
      fetchOptions: {
        next: {
          revalidate: 0, // no ISR
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });
}

export const {
  getClient: getAuthClient,
  query: authQuery,
  PreloadQuery: AuthPreloadQuery,
} = registerApolloClient(() => {
  const authLink = setContext(async (_, { headers }) => {
    // Retrieve the access token from storage (e.g., localStorage or cookies)
    const session = await auth()
    const accessToken = session? session.user?.accessToken : null
    

    return {
      headers: {
        ...headers,
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });

  const httpLink = new HttpLink({
    uri: process.env.API_URL,
    fetchOptions:{
      next: {
        revalidate: 0
      }
    }
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      }
    }
  });
});