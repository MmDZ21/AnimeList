"use client";

import { ApolloProvider } from "@apollo/client";
import React, { useMemo } from "react";

import { createClientClient } from "@/lib/apolloClient-client";
import { useSession } from "@/hooks/useSession";

export const ApolloClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const session = useSession();
  const client = useMemo(
    () => createClientClient(session?.user?.accessToken || ""),
    [session]
  );
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
