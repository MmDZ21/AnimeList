import React from "react";
import {
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import CharacterWrapper from "@/components/anime/CharacterWrapper";

const Characters = async ({ id }: { id: string }) => {
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
    <div
      className="py-2 flex flex-col 
  gap-2 lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      {anime.characters.map((character) => (
        <CharacterWrapper
          key={character.character?.id}
          characterWithVoice={character}
        />
      ))}
    </div>
  );
};

export default Characters;
