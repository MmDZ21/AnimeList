import SubtitleWrapper from "@/components/anime/SubtitleWrapper";
import {
  GetSubtitlesDocument,
  GetSubtitlesQuery,
  GetSubtitlesQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import React from "react";
export const revalidate = 0;

const Subtitle = async ({
  anime_id,
  type,
}: {
  anime_id: string;
  type: number;
}) => {
  const client = getClient();

  const { data, error } = await client.query<
    GetSubtitlesQuery,
    GetSubtitlesQueryVariables
  >({
    query: GetSubtitlesDocument,
    variables: { anime_id, first: 30 },
    fetchPolicy: "no-cache",
  });

  if (error) {
    console.error("Error fetching anime data:", error);
    return <p>Error loading subtitles data.</p>;
  }

  const subtitles = data?.subtitles.data;

  if (!subtitles) {
    return <p>subtitles not found.</p>;
  }
  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-x-[10px] lg:gap-y-4">
      {subtitles.map((sub) => (
        <SubtitleWrapper key={sub.id} subtitle={sub} />
      ))}
    </div>
  );
};

export default Subtitle;
