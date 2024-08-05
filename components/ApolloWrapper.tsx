"use client";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";

import { getSession } from "next-auth/react";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://api.anilist.top/graphql",

    fetchOptions: { cache: "no-store" },
  });

  const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();
    const token = session?.user?.accessToken || "";

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      authLink,
      typeof window === "undefined"
        ? new SSRMultipartLink({ stripDefer: true })
        : httpLink,
    ]),
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
