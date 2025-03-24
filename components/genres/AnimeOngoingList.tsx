
import React from "react";
import {
  AnimeByGenreDocument,
  AnimeByGenreQuery,
  AnimeByGenreQueryVariables,
  GetAnimeByYearDocument,
  GetAnimeByYearQuery,
  GetAnimeByYearQueryVariables,
  GetOngoingAnimeDocument,
  GetOngoingAnimeQuery,
  GetOngoingAnimeQueryVariables,
  QueryAnimeGenreOrderByColumn,
  QueryAnimesOngoingPageOrderByColumn,
  QueryAnimeYearOrderByColumn,
  SortOrder,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import MediaCard from "../layout/cards/MediaCard";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"; // adjust the import path if needed
import Link from "next/link";
import { generateSlug } from "@/lib/utils";

interface AnimeOngoingListProps {
  page: string; // provided from searchParams in the parent page
}

export default async function AnimeOngoingList({
  page,
}: AnimeOngoingListProps) {
  const currentPage = parseInt(page, 10) || 1;
  const pageSize = 10;
  const client = getClient();

  const { data, error } = await client.query<
    GetOngoingAnimeQuery,
    GetOngoingAnimeQueryVariables
  >({
    query: GetOngoingAnimeDocument,
    variables: {
      first: pageSize,
      orderBy: [
        {
          column: QueryAnimesOngoingPageOrderByColumn.MalPopularity,
          order: SortOrder.Asc,
        },
      ],
      page: currentPage,
    },
  });

  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error loading  data.</p>;
  }

  const animeList = data?.animesOngoingPage.data;

  if (!animeList || animeList.length === 0) {
    return <p>No anime found.</p>;
  }

  // Determine if this is the last page (assumes fewer items means no further pages)
  const isLastPage = animeList.length < pageSize;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-5">
        {animeList.map((anime) => (
          <Link href={`/anime/${anime.id}/${generateSlug(anime.dic_title!)}`}  key={anime.id}>
            <MediaCard data={anime} className="w-full" />
          </Link>
        ))}
      </div>
      <Pagination className="mt-4">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          )}
          <PaginationLink isActive href={`?page=${currentPage}`}>
            {currentPage}
          </PaginationLink>
          {!isLastPage && <PaginationNext href={`?page=${currentPage + 1}`} />}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
