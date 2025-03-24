import React from "react";

import ResultCard from "@/components/layout/cards/ResultCard";
import SimilarAnimeWrapper from "@/components/anime/SimilarAnimeWrapper";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import CharacterWrapper from "@/components/anime/CharacterWrapper";
import BlogCard from "@/components/layout/cards/BlogCard";
import { getClient } from "@/lib/apolloClient";
import {
  Anime,
  QueryAnimeSearchOrderByColumn,
  SearchAnimeDocument,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
  SortOrder,
} from "@/generated/graphql";

import { blog1, blog2, blog3 } from "@/constants";
import Link from "next/link";
import { generateSlug } from "@/lib/utils";

export default async function Result({ query }: { query: string }) {
  if (!query) {
    // Avoid fetching when the query is empty
    return;
  }
  const client = getClient();
  const { data, error } = await client.query<
    SearchAnimeQuery,
    SearchAnimeQueryVariables
  >({
    query: SearchAnimeDocument,
    variables: {
      query,
      first: 6,
      orderBy: [
        {
          column: QueryAnimeSearchOrderByColumn.MalPopularity,
          order: SortOrder.Asc,
        },
      ],
    },
  });

  if (error) {
    console.error("Error fetching anime data:", error);
    return <p>Error loading anime data.</p>;
  }
  const animes = data?.animeSearch.data as Anime[];
  if (animes.length === 0) {
    return <p>نتیجه‌ای یافت نشد</p>;
  }
  const top = animes;
  const dramas = animes;
  const series = animes;
  const movies = animes;
  const characters = animes[0].characters;
  const blogs = [blog1, blog2, blog3];

  if (!animes) {
    return <p>Anime not found.</p>;
  }
  return (
    <div className="lg:flex justify-between w-full gap-8">
      <div className="flex flex-col w-full lg:gap-6">
        <div
          id="top-result"
          className="flex flex-col pt-4 gap-4 w-full lg:gap-6"
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-base font-medium lg:text-2xl lg:font-bold">
              برترین نتایج
            </h2>
            <Link
              href={"/"}
              className="text-[#979CA6] text-center hidden lg:flex gap-2 "
            >
              مشاهده نتایج بیشتر
              <ArrowLeftIcon className="size-6 text-[#979CA6]" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full lg:hidden">
            {top.map((show, i) => (
              <Link
                href={`/anime/${show.id}/${generateSlug(show.dic_title!)}`}
                key={i}
              >
                <ResultCard data={show} index={i} />
              </Link>
            ))}
            <Link href={"/"} className="text-primary-500 text-center">
              مشاهده نتایج بیشتر
            </Link>
          </div>
          <div className="hidden lg:flex gap-2 lg:flex-wrap">
            {top.map((show, i) => (
              <SimilarAnimeWrapper
                anime={show}
                className="w-[280px] p-2 h-[460px]"
                imageClassName="h-[400px]"
                actions={false}
                overlay
                priority={i === 0 ? true : false}
                key={show.id}
              />
            ))}
          </div>
        </div>
        {/* <div id="anime-shows" className="flex flex-col pt-4  gap-4 w-full">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-base font-bold lg:text-2xl lg:font-bold">
              انیمه‌ها
            </h2>
            <p className="text-xs font-medium text-primary-500 lg:hidden">
              مشاهده همه
            </p>
            <div className="hidden lg:flex gap-2 items-center">
              <p className="text-[#979CA6] text-base font-medium">
                مشاهده نتایج بیشتر
              </p>
              <ArrowLeftIcon className="size-6 text-[#979CA6]" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:flex lg:flex-wrap lg:flex-row">
            {animes.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
        </div>
        <div id="dramas" className="flex flex-col pt-4  gap-4 w-full lg:hidden">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-base font-bold">دراما</h2>
            <p className="text-xs font-medium text-primary-500">مشاهده همه</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {dramas.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
        </div>
        <div id="series" className="flex flex-col pt-4 gap-4 w-full lg:hidden">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-base font-bold">سریال</h2>
            <p className="text-xs font-medium text-primary-500">مشاهده همه</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {series.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
        </div>
        <div id="movies" className="flex flex-col pt-4  gap-4 w-full lg:hidden">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-base font-bold">سینمایی</h2>
            <p className="text-xs font-medium text-primary-500">مشاهده همه</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {movies.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
        </div> */}
        <div
          id="characters"
          className="hidden lg:flex flex-col pt-4 gap-4 w-full"
        >
          <div className="flex justify-between w-full items-center">
            <h2 className="text-base font-bold lg:text-2xl lg:font-bold">
              شخصیت‌ها و عوامل
            </h2>
            <p className="text-xs font-medium text-primary-500 lg:hidden">
              مشاهده همه
            </p>
            <div className="hidden lg:flex gap-2 items-center">
              <p className="text-[#979CA6] text-base font-medium">
                مشاهده نتایج بیشتر
              </p>
              <ArrowLeftIcon className="size-6 text-[#979CA6]" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-2 lg:gap-x-2">
            {characters.map((character, i) => (
              <CharacterWrapper
                characterWithVoice={character}
                key={i}
                className="lg:bg-[#17212B]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
