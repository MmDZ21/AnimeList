import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/layout/cards/CategoryCard";
import { getClient } from "@/lib/apolloClient";
import {
  GetAnimeGenresDocument,
  GetAnimeGenresQuery,
} from "@/generated/graphql";

async function fetchGenres() {
  const client = getClient();

  const { data } = await client.query<GetAnimeGenresQuery>({
    query: GetAnimeGenresDocument,
  });

  return data?.genres || [];
}

export default async function GenresList() {
  const genres = await fetchGenres();

  if (!genres || genres.length === 0) {
    return <p>Genres not found.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-5">
        {genres.map((genre, i) => (
          <CategoryCard
            key={genre.id}
            category={genre}
            priority={i === 0 ? true : false}
          />
        ))}
      </div>
    </>
  );
}
