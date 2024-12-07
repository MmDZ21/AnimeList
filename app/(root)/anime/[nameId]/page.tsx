import React from "react";
import Image from "next/image";

import AddToWatchList from "@/components/buttons/AddToWatchList";

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
import WatchOnline from "@/components/buttons/WatchOnline";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TrailerWrapper from "@/components/anime/TrailerWrapper";
import { getClient } from "@/lib/apolloClient";
import {
  Anime,
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import SubtitleWrapper from "@/components/anime/SubtitleWrapper";
import DownloadWrapper from "@/components/anime/DownloadWrapper";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

// export async function generateStaticParams() {
//   const { data } = await query({ query: GetAnimeById, variables:{id:} });
//   let animeShows: Anime[] =
//   return animeShows.map((anime) => ({
//     nameId: anime.id + anime.dic_title,
//   }));
// }

export default async function page({ params }: { params: { nameId: string } }) {
  const id = params.nameId.split("-").pop() as string;

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
  const exclusiveSubtitles = data?.exclusiveSubtitles.data;
  const userSubtitles = data?.userSubtitles.data;
  const comments = data?.comments.data;

  if (!anime) {
    return <p>Anime not found.</p>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full h-[585px] relative">
        <Image
          priority
          src={
            anime.mal_image_url
              ? "https://dev-api.alplayer.ir" + anime.mal_image_url
              : anime.anilist_image_url
              ? "https://dev-api.alplayer.ir" + anime.anilist_image_url
              : "/images/frieren/cover.webp"
          }
          fill
          alt={anime.dic_title!}
          className="object-cover lg:hidden"
        />
        <Image
          priority
          src={
            anime.wide_image
              ? "https://dev-api.alplayer.ir" + anime.wide_image
              : "/images/frieren/lgbg.webp"
          }
          fill
          alt={anime.dic_title!}
          className="object-cover hidden lg:block"
        />
        <div className="absolute h-1/2 bottom-0 left-0 right-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
      </div>
      <div className="w-full flex justify-center -mt-14 z-20">
        <div className="flex flex-col max-w-[1280px] gap-6">
          <div className="flex lg:gap-4">
            <div className="lg:flex flex-col gap-2 hidden">
              <div className="relative w-[220px] h-[288px]">
                <Image
                  src={
                    anime.mal_image_url
                      ? "https://dev-api.alplayer.ir" + anime.mal_image_url
                      : anime.anilist_image_url
                      ? "https://dev-api.alplayer.ir" + anime.anilist_image_url
                      : "/images/frieren/cover.webp"
                  }
                  alt={anime.dic_title!}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="w-full">
                <WatchOnline className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-4 px-4 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl lg:text-4xl font-bold">
                  {anime.dic_title}
                </h1>
                <h2 className="hidden lg:block text-xl font-normal text-[#979CA6]">
                  {anime.dic_title_en}
                </h2>
                <h2 className="hidden lg:block text-xl font-normal text-[#979CA6]">
                  {anime.title_fa}
                </h2>
              </div>
              <div className="flex items-center gap-2">
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
                <div className="flex items-center gap-2">
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
                              src={
                                anime.mal_image_url
                                  ? "https://dev-api.alplayer.ir" +
                                    anime.mal_image_url
                                  : anime.anilist_image_url
                                  ? "https://dev-api.alplayer.ir" +
                                    anime.anilist_image_url
                                  : "/images/frieren/cover.webp"
                              }
                              alt={anime.dic_title!}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-2 justify-center items-center">
                            <h2 className="text-base font-bold">
                              {anime.dic_title}
                            </h2>
                            <p className="text-sm font-medium text-[#979CA6]">
                              شما به این اثر ۴ ستاره دادید
                            </p>
                          </div>
                          <Rating
                            rating={4}
                            className="w-10 h-10"
                            gap="gap-6"
                          />
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
                <Separator
                  orientation="vertical"
                  className="h-4 hidden lg:block"
                />
                <div className="flex text-sm font-medium gap-[10px]">
                  <p>MAL Rating: {anime.dic_score}</p>
                  <Separator orientation="vertical" className="h-4" />
                  <p>AniList Rating: {anime.anilist_score}%</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium leading-6">
                  {anime.dic_body}
                </div>
                <div className="flex justify-center items-center">
                  <Dialog>
                    <DialogTrigger className="lg:hidden">
                      <p className="text-primary-500 text-base font-medium">
                        جزئیات بیشتر
                      </p>
                    </DialogTrigger>
                    <DialogContent className="w-full h-full bg-background">
                      <DialogHeader className="gap-3 min-h-0">
                        <DialogTitle className="flex justify-between ">
                          <h2 className="text-base font-bold">
                            {anime.dic_title}
                          </h2>
                          <DialogClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
                            <Cross2Icon className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                          </DialogClose>
                        </DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-full">
                        <div className="flex flex-col gap-6 pb-16">
                          <DialogDescription className="text-start leading-[22px] font-medium text-white">
                            {anime.dic_body}
                            <span className="text-primary-500 ms-1">
                              نمایش بیشتر
                            </span>
                          </DialogDescription>
                          {/* 8 divs */}
                          {/* <Details anime={anime} /> */}
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="w-full block lg:hidden">
                <CustomTabs defaultValue="episodes" className="w-full">
                  <CustomTabsList className="w-full dark:bg-transparent border-b border-[hsla(215,20%,65%,0.24)]">
                    <CustomTabsTrigger value="episodes">
                      قسمت‌ها
                    </CustomTabsTrigger>
                    <CustomTabsTrigger value="similars">
                      آثار مشابه
                    </CustomTabsTrigger>
                    <CustomTabsTrigger value="staff">عوامل</CustomTabsTrigger>
                    <CustomTabsTrigger value="comments">
                      نظرات
                    </CustomTabsTrigger>
                  </CustomTabsList>
                  <CustomTabsContent value="episodes">
                    <div className="flex flex-col gap-2 pb-16">
                      {/* {anime.episodes.map((episode, i) => (
                        <EpisodeWrapper
                          key={episode.episodeTitle}
                          episode={episode}
                          i={i}
                        />
                      ))} */}
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
                      {anime.recommendations.map((anime) => (
                        <SimilarAnimeWrapper
                          key={anime.recommendation.id}
                          anime={anime.recommendation}
                        />
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
                            {anime.characters.map((character) => (
                              <CharacterWrapper
                                key={character.character?.id}
                                characterWithVoice={character}
                              />
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="producers">
                          <div className="py-2 flex flex-col gap-2">
                            {/* {anime.staff.producers.map((producer) => (
                              <ProducerWrapper
                                key={producer.name}
                                producer={producer}
                              />
                            ))} */}
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
                        {/* {anime.comments.map((comment) => (
                          <CommentWrapper key={comment.id} comment={comment} />
                        ))} */}
                      </div>
                    </div>
                  </CustomTabsContent>
                </CustomTabs>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-r from-primary-600 to-primary-900 rounded-md hidden lg:flex justify-between px-6">
            <div className="relative w-[223px] h-full">
              <Image
                src="/images/frieren/sub.webp"
                alt="frieren"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-[22px] font-black">
                با تهیهٔ اشتراک ویژه به‌راحتی به آرشیو بی‌پایان انیمه‌لیست
                دسترسی داشته باشید!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Button className="h-10 px-[10px] bg-white text-primary-500 text-base font-semibold flex gap-2 items-center justify-center hover:bg-[#f9cae6]">
                <div className="flex justify-center items-center size-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_1856_6087"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_1856_6087)">
                      <path
                        d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                        fill="#eb1187 "
                      />
                    </g>
                  </svg>
                </div>
                خرید اشتراک
              </Button>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <Tabs defaultValue="trailers" className="w-full">
              <TabsList className="w-full dark:bg-[#17212B] rounded-lg justify-start items-center p-1 h-fit gap-2">
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="trailers"
                >
                  تریلر
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="download"
                >
                  دانلود
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="cc"
                >
                  زیرنویس
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="staff"
                >
                  شخصیت‌ها و عوامل
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="details"
                >
                  اطلاعات تکمیلی
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
                  value="similars"
                >
                  آثار مشابه
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background gap-2"
                  value="comments"
                >
                  نظرات
                  <div className="size-6 rounded bg-[#A1A1AA] text-white text-sm font-semibold flex justify-center items-center">
                    {comments.length}
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent className="py-4" value="trailers">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {anime.trailers?.map((trailer) => (
                    <TrailerWrapper key={trailer.title} trailer={trailer} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent className="py-4" value="download">
                <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                  <Tabs defaultValue="480p">
                    <TabsList className="dark:bg-transparent dark:text-[#A1A1AA] w-full justify-start">
                      <h5 className="flex-1 text-white text-base font-semibold">
                        باکس دانلود
                      </h5>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg"
                        value="480p"
                      >
                        480p
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                        value="720p"
                      >
                        720p
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                        value="1080p"
                      >
                        1080p
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                        value="720p x265"
                      >
                        720p x265
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                        value="1080p x265"
                      >
                        1080p x265
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="480p">
                      <div className="flex flex-col gap-[10px]">
                        {anime.anime_links.map((link) =>
                          link.quality === "480p" ? (
                            <DownloadWrapper
                              key={link.id}
                              links={{
                                ep: link.ep || "نامشخص",
                                link: link.link || "#",
                                quality: link.quality || "نامشخص",
                                size: link.size || "نامشخص",
                                subtitle: link.subtitle_link || "#",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="720p">
                      {" "}
                      <div className="flex flex-col gap-[10px]">
                        {anime.anime_links.map((link) =>
                          link.quality === "720p" ? (
                            <DownloadWrapper
                              key={link.id}
                              links={{
                                ep: link.ep || "نامشخص",
                                link: link.link || "#",
                                quality: link.quality || "نامشخص",
                                size: link.size || "نامشخص",
                                subtitle: link.subtitle_link || "#",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="1080p">
                      {" "}
                      <div className="flex flex-col gap-[10px]">
                        {anime.anime_links.map((link) =>
                          link.quality === "1080p" ? (
                            <DownloadWrapper
                              key={link.id}
                              links={{
                                ep: link.ep || "نامشخص",
                                link: link.link || "#",
                                quality: link.quality || "نامشخص",
                                size: link.size || "نامشخص",
                                subtitle: link.subtitle_link || "#",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="720p x265">
                      {" "}
                      <div className="flex flex-col gap-[10px]">
                        {anime.anime_links.map((link) =>
                          link.quality === "720p x265" ? (
                            <DownloadWrapper
                              key={link.id}
                              links={{
                                ep: link.ep || "نامشخص",
                                link: link.link || "#",
                                quality: link.quality || "نامشخص",
                                size: link.size || "نامشخص",
                                subtitle: link.subtitle_link || "#",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="1080p x265">
                      <div className="flex flex-col gap-[10px]">
                        {anime.anime_links.map((link) =>
                          link.quality === "1080p x265" ? (
                            <DownloadWrapper
                              key={link.id}
                              links={{
                                ep: link.ep || "نامشخص",
                                link: link.link || "#",
                                quality: link.quality || "نامشخص",
                                size: link.size || "نامشخص",
                                subtitle: link.subtitle_link || "#",
                              }}
                            />
                          ) : null
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>
              <TabsContent className="py-4" value="cc">
                <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                  <Tabs defaultValue="dedicated">
                    <TabsList className="dark:bg-transparent dark:text-[#A1A1AA] w-full justify-start">
                      <h5 className="flex-1 text-white text-base font-semibold">
                        باکس دانلود
                      </h5>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg"
                        value="dedicated"
                      >
                        زیرنویس‌های اختصاصی
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
                        value="sent"
                      >
                        زیرنویس‌های ارسالی
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="dedicated">
                      <div className="grid grid-cols-4 gap-x-[10px] gap-y-4">
                        {exclusiveSubtitles.map((sub) => (
                          <SubtitleWrapper key={sub.id} subtitle={sub} />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="sent">
                      <div className="grid grid-cols-4 gap-x-[10px] gap-y-4">
                        {userSubtitles.map((sub) => (
                          <SubtitleWrapper key={sub.id} subtitle={sub} />
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>
              <TabsContent value="staff" className="py-4">
                <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                  <Tabs defaultValue="characters" className="w-full">
                    <TabsList className="dark:bg-transparent dark:text-[#A1A1AA] w-full justify-start">
                      <h5 className="flex-1 text-white text-base font-semibold">
                        شخصیت‌ها و عوامل
                      </h5>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg"
                        value="characters"
                      >
                        شخصیت‌ها و صداپیشه‌ها
                      </TabsTrigger>
                      <TabsTrigger
                        className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg"
                        value="producers"
                      >
                        عوامل تولید
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="characters">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {anime.characters.map((character) => (
                          <CharacterWrapper
                            key={character.character?.id}
                            characterWithVoice={character}
                          />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="producers">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* {anime.staff.producers.map((producer) => (
                          <ProducerWrapper
                            key={producer.name}
                            producer={producer}
                          />
                        ))} */}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </TabsContent>
              <TabsContent value="details"></TabsContent>
              <TabsContent value="similars">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {anime.recommendations.map((anime) => (
                    <SimilarAnimeWrapper
                      key={anime.recommendation.id}
                      anime={anime.recommendation}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="comments">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-[#17212B] p-3">
                    <CommentForm />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    {comments.map((comment) => (
                      <CommentWrapper key={comment.id} comment={comment} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
