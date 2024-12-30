import React from "react";
import TrailerWrapper from "@/components/anime/TrailerWrapper";
import {
  Anime,
} from "@/generated/graphql";
const Trailers = async ({ anime }: { anime: Anime}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {anime.trailers?.map((trailer) => (
        <TrailerWrapper key={trailer.title} trailer={trailer} />
      ))}
    </div>
  );
};

export default Trailers;
