"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const httpLink = new HttpLink({
  uri: "https://api.anilist.top/graphql",
});

export const createClientClient = (token: string) =>
  new ApolloClient({
    link: ApolloLink.from([
      setContext(() => ({
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      })),
      httpLink,
    ]),
    cache: new InMemoryCache(),
  });
