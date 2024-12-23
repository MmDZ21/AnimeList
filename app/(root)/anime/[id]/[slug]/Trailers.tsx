import React from "react";
import TrailerWrapper from "@/components/anime/TrailerWrapper";
import {
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
const Trailers = async ({ id }: { id: string }) => {
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
      {anime.trailers?.map((trailer) => (
        <TrailerWrapper key={trailer.title} trailer={trailer} />
      ))}
    </div>
  );
};

export default Trailers;
