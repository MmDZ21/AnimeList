import React from "react";
import SimilarAnimeWrapper from "@/components/anime/SimilarAnimeWrapper";
import {
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";


const Recommendations = async ({ id }: { id: string }) => {
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
