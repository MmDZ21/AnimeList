"use client";

import { ApolloProvider } from "@apollo/client";
import React, { useMemo } from "react";

import { createClientClient } from "@/lib/apolloClient-client";

export const ApolloClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const client = useMemo(
    () => createClientClient("session?.user?.accessToken " || ""),
    []
  );
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
