import React from "react";
import SimilarAnimeWrapper from "@/components/anime/SimilarAnimeWrapper";
import {
  Anime,
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";


const Recommendations = async ({ anime }: {anime: Anime }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {anime.recommendations.map((anime) => (
        <SimilarAnimeWrapper
          key={anime.recommendation.id}
          anime={anime.recommendation}
        />
      ))}
    </div>
  );
};

export default Recommendations;
