import React from "react";
import Image from "next/image";

import { exampleAnime } from "@/constants";
import AddToWatchList from "@/components/buttons/AddToWatchList";
import WatchOnline from "@/components/buttons/WatchOnline";
import Rating from "@/components/ui/Rating";
import { ChevronLeftIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  Tabs as CustomTabs,
  TabsContent as CustomTabsContent,
  TabsList as CustomTabsList,
  TabsTrigger as CustomTabsTrigger,
} from "@/components/ui/custom-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EpisodeWrapper from "@/components/anime/EpisodeWrapper";
import SimilarAnimeWrapper from "@/components/anime/SimilarAnimeWrapper";
import { from } from "@apollo/client";
import CharacterWrapper from "@/components/anime/CharacterWrapper";
import ProducerWrapper from "@/components/anime/ProducerWrapper";
import CommentWrapper from "@/components/anime/CommentWrapper";
import CommentForm from "@/components/forms/comment";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Details from "@/components/anime/Details";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdvancedRating from "@/components/ui/AdvancedRating";

export default function page({
  params,
}: {
  params: { name: string; id: string };
}) {
  const anime = exampleAnime;
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full h-[585px] relative">
        <Image
          priority
          src={anime.image}
          fill
          alt={anime.title}
          className="object-cover"
        />
        <div className="absolute h-1/2 bottom-0 left-0 right-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{anime.title}</h1>
          <div className="flex items-center gap-2">
            {anime.type === "series" ? (
              <p className="text-[#11EB75] text-xs font-medium">سریالی</p>
            ) : (
              <p className="text-[#11EB75]">سینمایی</p>
            )}
            <p className="text-xs font-medium">پخش آنلاین</p>
            <p className="text-xs font-medium">زیرنویس چسبیده</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Rating rating={4} />
            <p className="text-sm font-medium">
              میانگین: {anime.rating} / 10{" "}
              <span className="text-xs font-normal text-[#B5B8BF]">{`(${anime.votesCount} نفر)`}</span>
            </p>
            <Dialog>
              <DialogTrigger>
                <ChevronLeftIcon className="size-6" />
              </DialogTrigger>
              <DialogContent className="w-full h-full flex flex-col">
                <DialogHeader className="gap-3">
                  <DialogTitle className="flex justify-between ">
                    <h2 className="text-base font-bold">جزئیات نمره</h2>
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
                        src={anime.image}
                        alt={anime.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h2 className="text-base font-bold">{anime.title}</h2>
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
          </div>
          <div className="flex text-sm font-medium gap-[10px]">
            <p>MAL Rating: {anime.malRating}</p>
            <p>AniList Rating: {anime.anilistRating}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-medium leading-6">{anime.summary}</div>
          <div className="flex justify-center items-center">
            <Dialog>
              <DialogTrigger>
                <p className="text-primary-500 text-base font-medium">
                  جزئیات بیشتر
                </p>
              </DialogTrigger>
              <DialogContent className="w-full h-full">
                <DialogHeader className="gap-3 min-h-0">
                  <DialogTitle className="flex justify-between ">
                    <h2 className="text-base font-bold">{anime.title}</h2>
                    <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                      <Cross2Icon className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-full">
                  <div className="flex flex-col gap-6 pb-16">
                    <DialogDescription className="text-start leading-[22px] font-medium text-white">
                      {anime.summary}
                      <span className="text-primary-500 ms-1">نمایش بیشتر</span>
                    </DialogDescription>
                    {/* 8 divs */}
                    <Details anime={anime} />
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="w-full">
          <CustomTabs defaultValue="episodes" className="w-full">
            <CustomTabsList className="w-full dark:bg-transparent border-b border-[hsla(215,20%,65%,0.24)]">
              <CustomTabsTrigger value="episodes">قسمت‌ها</CustomTabsTrigger>
              <CustomTabsTrigger value="similars">آثار مشابه</CustomTabsTrigger>
              <CustomTabsTrigger value="staff">عوامل</CustomTabsTrigger>
              <CustomTabsTrigger value="comments">نظرات</CustomTabsTrigger>
            </CustomTabsList>
            <CustomTabsContent value="episodes">
              <div className="flex flex-col gap-2 pb-16">
                {anime.episodes.map((episode, i) => (
                  <EpisodeWrapper
                    key={episode.episodeTitle}
                    episode={episode}
                    i={i}
                  />
                ))}
                <div
                  className="fixed px-4 py-6 z-40 bottom-0 flex items-center w-full justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14, 22, 33, 0) 0%, #0E1621 23.96%)",
                  }}
                >
                  <WatchOnline />
                  <AddToWatchList />
                </div>
              </div>
            </CustomTabsContent>
            <CustomTabsContent value="similars">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {anime.similars.map((anime) => (
                  <SimilarAnimeWrapper key={anime.title} anime={anime} />
                ))}
              </div>
            </CustomTabsContent>
            <CustomTabsContent value="staff">
              <div className="py-2">
                <Tabs defaultValue="characters" className="w-full">
                  <TabsList className="dark:bg-[#17212B] dark:text-[#A1A1AA] w-full justify-start gap-[10px] rounded-md h-12">
                    <TabsTrigger
                      className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg p-2"
                      value="characters"
                    >
                      شخصیت‌ها و صداپیشه‌ها
                    </TabsTrigger>
                    <TabsTrigger
                      className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                      value="producers"
                    >
                      عوامل تولید
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="characters">
                    <div className="py-2 flex flex-col gap-2">
                      {anime.staff.characters.map((character) => (
                        <CharacterWrapper
                          key={character.character.name}
                          characterWithVoice={{
                            character: character.character,
                            voice: character.voice,
                          }}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="producers">
                    <div className="py-2 flex flex-col gap-2">
                      {anime.staff.producers.map((producer) => (
                        <ProducerWrapper
                          key={producer.name}
                          producer={producer}
                        />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CustomTabsContent>
            <CustomTabsContent value="comments">
              <div className="flex flex-col gap-[14px]">
                <div className="bg-[#17212B] p-3">
                  <CommentForm />
                </div>
                <div className="flex flex-col gap-[14px]">
                  {anime.comments.map((comment) => (
                    <CommentWrapper key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            </CustomTabsContent>
          </CustomTabs>
        </div>
      </div>
    </div>
  );
}
