"use server";

import { GetSubtitlesDocument, GetSubtitlesQuery, GetSubtitlesQueryVariables } from "@/generated/graphql";
import { getClient, getNoCacheClient } from "@/lib/apolloClient";

export async function fetchSubtitles(anime_id: string): Promise<GetSubtitlesQuery> {
  const client = getNoCacheClient();
  const { data, error } = await client.query<
    GetSubtitlesQuery,
    GetSubtitlesQueryVariables
  >({
    query: GetSubtitlesDocument,
    variables: { anime_id, first: 30 },
  });
  if (error) {
    console.error("Error fetching sub data:", error);
    throw new Error("Error fetching sub data:");
  }
  console.log("data", data.subtitles.data[0]);
  return data;
}