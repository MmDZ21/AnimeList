import SubtitleWrapper from "@/components/anime/SubtitleWrapper";
import {
  GetSubtitlesDocument,
  GetSubtitlesQuery,
  GetSubtitlesQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import React from "react";

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
    variables: { anime_id, type, first: 30 },
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
    <div className="grid grid-cols-4 gap-x-[10px] gap-y-4">
      {subtitles.map((sub) => (
        <SubtitleWrapper key={sub.id} subtitle={sub} />
      ))}
    </div>
  );
};

export default Subtitle;
