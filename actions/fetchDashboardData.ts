"use server";

import { getAuthClient } from "@/lib/apolloClient";
import { GetUserStatusDocument, GetUserStatusQuery } from "@/generated/graphql";

export async function fetchDashboardData(): Promise<GetUserStatusQuery> {
  const client = getAuthClient();
  const { data, error } = await client.query<GetUserStatusQuery>({
    query: GetUserStatusDocument,
  });

  if (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Error fetching dashboard data");
  }

  return data;
}
