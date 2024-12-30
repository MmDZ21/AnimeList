import React from "react";
import {
  Anime,
} from "@/generated/graphql";
import CharacterWrapper from "@/components/anime/CharacterWrapper";

const Characters = async ({ anime }: { anime: Anime }) => {

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
