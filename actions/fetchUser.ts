"use server";

import { GetUserInfoDocument, GetUserInfoQuery, GetUserStatusQuery } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";

export async function fetchUser(): Promise<GetUserInfoQuery> {
  const client = getAuthClient();
  const { data, error } = await client.query<GetUserInfoQuery>({
    query: GetUserInfoDocument,
  });
  if (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Error fetching user data:");
  }
  
  return data;
}