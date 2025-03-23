import React from "react";
import WatchOnline from "@/components/buttons/WatchOnline";
import AdvancedRating from "@/components/ui/AdvancedRating";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Rating from "@/components/ui/Rating";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChevronLeftIcon, Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Anime,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryResult,
} from "@/generated/graphql";
import { getImagePath } from "@/lib/utils";
// import Details from "@/components/anime/Details";

export const Preview = async ({ anime }: { anime: Anime }) => {
  return (
    <div className="flex lg:gap-4">
      <div className="lg:flex flex-col gap-2 hidden">
        <div className="relative w-[220px] h-80">
          <Image
            src={getImagePath(anime.mal_image_url, anime.anilist_image_url)}
            alt={anime.dic_title || "انیمه"}
            fill
            className="object-cover rounded"
          />
        </div>
        {/* <div className="w-full">
          <WatchOnline className="w-full" />
        </div> */}
      </div>
      <div className="flex flex-col gap-4 px-4 ">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl lg:text-4xl font-bold">{anime.dic_title}</h1>
          <h2 className="hidden lg:block text-xl font-normal text-[#979CA6]">
            {anime.dic_title_en}
          </h2>
          <h2 className="hidden lg:block text-xl font-normal text-[#979CA6]">
            {anime.title_fa}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {anime.genres.map((genre) => (
            <div
              key={genre.id}
              className="text-xs lg:text-sm rounded px-[6px] py-[2px] border border-[hsla(215,20%,65%,0.24)]"
            >
              {genre.name_fa}
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          {/* <div className="flex items-center gap-2">
            <Rating rating={4} />
            <p className="text-sm font-medium">
              میانگین: {anime.al_score} / 10
              <span className="text-xs font-normal text-[#B5B8BF]">{`(${anime.al_score_count} نفر)`}</span>
            </p>
            <Dialog>
              <DialogTrigger>
                <ChevronLeftIcon className="size-6" />
              </DialogTrigger>
              <DialogContent className="w-full h-full flex flex-col bg-background">
                <DialogHeader className="gap-3">
                  <DialogTitle className="flex justify-between ">
                    <p className="text-base font-bold">جزئیات نمره</p>
                    <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                      <Cross2Icon className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full">
                  <div className="flex flex-col items-center gap-6 pb-16">
                    <div className="relative h-48 w-full">
                      <Image
                        src={getImagePath(
                          anime.mal_image_url,
                          anime.anilist_image_url
                        )}
                        alt={anime.dic_title || "انیمه"}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h2 className="text-base font-bold">{anime.dic_title}</h2>
                      <p className="text-sm font-medium text-[#979CA6]">
                        شما به این اثر ۴ ستاره دادید
                      </p>
                    </div>
                    <Rating rating={4} className="w-10 h-10" gap="gap-6" />
                    <AdvancedRating
                      rating={4}
                      totalRatings={250}
                      breakdown={[
                        { rating: 5, percentage: 70 },
                        { rating: 4, percentage: 17 },
                        { rating: 3, percentage: 8 },
                        { rating: 2, percentage: 4 },
                        { rating: 1, percentage: 1 },
                      ]}
                    />
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div> */}
          <Separator orientation="vertical" className="h-4 hidden lg:block" />
          <div className="flex text-sm font-medium gap-[10px]">
            <p>MAL Rating: {anime.dic_score}</p>
            <Separator orientation="vertical" className="h-4" />
            <p>AniList Rating: {anime.anilist_score}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="text-sm font-medium leading-6 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: anime.dic_body! }}
          />
          <div className="flex justify-center items-center">
            <Dialog>
              <DialogTrigger className="lg:hidden">
                <p className="text-primary-500 text-base font-medium">
                  جزئیات بیشتر
                </p>
              </DialogTrigger>
              <DialogContent className="w-full h-full bg-background">
                <DialogHeader className="gap-3">
                  <DialogTitle className="flex justify-between ">
                    <p className="text-base font-bold">جزئیات انیمه</p>
                    <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                      <Cross2Icon className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full">
                  <div className="flex flex-col gap-6">
                    <div className="relative h-48 w-full">
                      <Image
                        src={getImagePath(
                          anime.mal_image_url,
                          anime.anilist_image_url
                        )}
                        alt={anime.dic_title || "انیمه"}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-base font-bold text-center">
                      {anime.dic_title}
                    </h2>
                    <div className="flex flex-col gap-6 pb-16">
                      <div className="text-start leading-[22px] font-medium text-white">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: anime.dic_body!,
                          }}
                        ></div>
                      </div>
                      {/* 8 divs */}
                      {/* <Details anime={anime} /> */}
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
