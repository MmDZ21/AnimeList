import React from "react";
import Image from "next/image";

import { exampleAnime } from "@/constants";
import AddToWatchList from "@/components/buttons/AddToWatchList";
import WatchOnline from "@/components/buttons/WatchOnline";
import Rating from "@/components/ui/Rating";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
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
      <div>
        <h1>{anime.title}</h1>
        <div className="flex">
          {anime.type === "series" ? <p>سریالی</p> : <p>سینمایی</p>}
          <p>پخش آنلاین</p>
          <p>زیرنویس چسبیده</p>
        </div>
      </div>
      <div>
        <div className="flex">
          <Rating rating={4} />
          <p>
            میانگین: {anime.rating} / 10 {`(${anime.votesCount} نفر)`}
          </p>
          <ChevronLeftIcon className="size-6" />
        </div>
        <div className="flex">
          <p>MAL Rating: {anime.malRating}</p>
          <p>AniList Rating: {anime.anilistRating}%</p>
        </div>
      </div>
      <div>{anime.summary}</div>
      <div className="flex">
        <WatchOnline />
        <AddToWatchList />
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
            {anime.episodes.map((episode) => (
              <EpisodeWrapper key={episode.episodeTitle} episode={episode} />
            ))}
          </CustomTabsContent>
          <CustomTabsContent value="similars">
            {anime.similars.map((anime) => (
              <SimilarAnimeWrapper key={anime.title} anime={anime} />
            ))}
          </CustomTabsContent>
          <CustomTabsContent value="staff">
            <Tabs defaultValue="characters" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="characters">
                  شخصیت‌ها و صداپیشه‌ها
                </TabsTrigger>
                <TabsTrigger value="producers">عوامل تولید</TabsTrigger>
              </TabsList>
              <TabsContent value="characters">
                {anime.staff.characters.map((character) => (
                  <CharacterWrapper
                    key={character.character.name}
                    characterWithVoice={{
                      character: character.character,
                      voice: character.voice,
                    }}
                  />
                ))}
              </TabsContent>
              <TabsContent value="producers">
                {anime.staff.producers.map((producer) => (
                  <ProducerWrapper key={producer.name} producer={producer} />
                ))}
              </TabsContent>
            </Tabs>
          </CustomTabsContent>
          <TabsContent value="comments">
            {anime.comments.map((comment) => (
              <CommentWrapper key={comment.comment} comment={comment} />
            ))}
          </TabsContent>
        </CustomTabs>
      </div>
    </div>
  );
}
