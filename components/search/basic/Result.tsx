import React from "react";
import Image from "next/image";
import { Anime, Character, CharacterWithVoice, User } from "@/types/types";
import ResultCard from "@/components/layout/cards/ResultCard";
import SimilarAnimeWrapper from "@/components/anime/SimilarAnimeWrapper";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import CharacterWrapper from "@/components/anime/CharacterWrapper";
import BlogCard from "@/components/layout/cards/BlogCard";

interface ResultProps {
  top: Anime[];
  animeShows: Anime[];
  movies: Anime[];
  dramas: Anime[];
  series: Anime[];
  characters: CharacterWithVoice[];
  blog: {
    user: User;
    createdAt: string;
    title: string;
    image: string;
  }[];
}

export default function Result({ data }: { data: ResultProps }) {
  return (
    <div className="lg:flex justify-between w-full">
      <div className="flex flex-col w-full lg:gap-6 lg:w-4/5">
        <div
          id="top-result"
          className="flex flex-col pt-4 gap-4 w-full lg:gap-6"
        >
          <h2 className="text-base font-medium lg:text-2xl lg:font-bold">
            برترین نتایج
          </h2>
          <div className="flex flex-col gap-2 w-full lg:hidden">
            {data.top.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
          <div className="hidden lg:flex gap-2 w-full">
            {data.top.map((show, i) => (
              <SimilarAnimeWrapper
                key={i}
                anime={show}
                className="w-[280px] p-2 h-[460px]"
                imageClassName="h-[400px]"
                actions={false}
              />
            ))}
          </div>
        </div>
        <div id="anime-shows" className="flex flex-col pt-4  gap-4 w-full">
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
          <div className="flex flex-col gap-2 w-full lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-6 lg:gap-x-4">
            {data.animeShows.map((show, i) => (
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
            {data.dramas.map((show, i) => (
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
            {data.series.map((show, i) => (
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
            {data.movies.map((show, i) => (
              <ResultCard key={i} data={show} />
            ))}
          </div>
        </div>
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
            {data.characters.map((character, i) => (
              <CharacterWrapper
                characterWithVoice={character}
                key={i}
                className="lg:bg-[#17212B]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/6 hidden lg:flex flex-col gap-6">
        <h2 className="text-base font-medium lg:text-2xl lg:font-bold">
          اخبار و مقالات مرتبط
        </h2>
        {data.blog.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
}
