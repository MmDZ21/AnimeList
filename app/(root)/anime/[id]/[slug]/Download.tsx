import DownloadWrapper from "@/components/anime/DownloadWrapper";
import React from "react";
import { Anime } from "@/generated/graphql";
const Download = async ({
  quality,
  anime,
}: {
  quality: string;
  anime: Anime;
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      {anime.anime_links.map((link) =>
        link.quality === quality ? (
          <DownloadWrapper
            key={link.id}
            links={{
              ep: link.ep || "نامشخص",
              link: link.signedLink || "#",
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
