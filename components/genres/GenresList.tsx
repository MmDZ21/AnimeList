import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/layout/cards/CategoryCard";
import { getClient } from "@/lib/apolloClient";
import {
  GetAnimeGenresDocument,
  GetAnimeGenresQuery,
} from "@/generated/graphql";
import Link from "next/link";
import { generateSlug } from "@/lib/utils";

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
          <Link href={`/anime/genre/${genre.id}/${generateSlug(genre.name_en!)}`} key={genre.id}>
            <CategoryCard

              category={genre}
              priority={i === 0 ? true : false}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
