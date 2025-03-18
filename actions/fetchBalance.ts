// actions/dashboard.ts
"use server";

import { getAuthClient } from "@/lib/apolloClient";
import { GetUserBalanceDocument, GetUserBalanceQuery, GetUserStatusDocument, GetUserStatusQuery } from "@/generated/graphql";

export async function fetchBalance(): Promise<GetUserBalanceQuery> {
  const client = getAuthClient();
  const { data, error } = await client.query<GetUserBalanceQuery>({
    query: GetUserBalanceDocument,
  });

  if (error) {
    console.error("Error fetching Balance data:", error);
    throw new Error("Error fetching Balance data");
  }

  return data;
}
