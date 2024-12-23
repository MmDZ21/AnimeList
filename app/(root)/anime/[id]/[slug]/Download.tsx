import DownloadWrapper from "@/components/anime/DownloadWrapper";
import React from "react";
import {
    GetAnimeByIdDocument,
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables,
  } from "@/generated/graphql";
  import { getClient } from "@/lib/apolloClient";
const Download = async({ id, quality }: { id: string, quality: string }) => {
  const client = getClient();

  const { data, error } = await client.query<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >({
    query: GetAnimeByIdDocument,
    variables: { id },
  });

  if (error) {
    console.error("Error fetching anime data:", error);
    return <p>Error loading anime data.</p>;
  }

  const anime = data?.anime;

  if (!anime) {
    return <p>Anime not found.</p>;
  }
  return (
    <div className="flex flex-col gap-[10px]">
      {anime.anime_links.map((link) =>
        link.quality === quality ? (
          <DownloadWrapper
            key={link.id}
            links={{
              ep: link.ep || "نامشخص",
              link: link.link || "#",
              quality: link.quality || "نامشخص",
              size: link.size || "نامشخص",
              subtitle: link.subtitle_link || "#",
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default Download;
