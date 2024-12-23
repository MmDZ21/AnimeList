import React, { Suspense } from "react";

import Image from "next/image";
import AddToWatchList from "@/components/buttons/AddToWatchList";
import {
  Tabs as CustomTabs,
  TabsContent as CustomTabsContent,
  TabsList as CustomTabsList,
  TabsTrigger as CustomTabsTrigger,
} from "@/components/ui/custom-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommentForm from "@/components/forms/comment";
import WatchOnline from "@/components/buttons/WatchOnline";
import { Button } from "@/components/ui/button";
import HeroImage from "./HeroImage";
import { Preview } from "./Preview";
import Recommendations from "./Recommendations";
import Characters from "./Characters";
import Trailers from "./Trailers";
import Download from "./Download";
import Subtitle from "./Subtitle";
import Comments from "./Comments";
import AnimeHeroSkeleton from "@/components/layout/Skeletons/AnimeHeroSkeleton";

export const revalidate = 3600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

// export async function generateStaticParams() {
//   //for popular and seasonal animes
// }
export default async function page({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Suspense fallback={<AnimeHeroSkeleton/>}>
        <HeroImage id={id} />
      </Suspense>
      <div className="w-full flex flex-col justify-center max-w-[1280px] mx-auto z-20 gap-6">
        <div className="flex flex-col gap-4 -mt-14">
          <Suspense>
            <Preview id={id} />
          </Suspense>
          <div className="w-full block lg:hidden px-4">
            <CustomTabs defaultValue="episodes" className="w-full">
              <CustomTabsList className="w-full dark:bg-transparent border-b border-[hsla(215,20%,65%,0.24)]">
                <CustomTabsTrigger value="episodes">قسمت‌ها</CustomTabsTrigger>
                <CustomTabsTrigger value="similars">
                  آثار مشابه
                </CustomTabsTrigger>
                <CustomTabsTrigger value="staff">عوامل</CustomTabsTrigger>
                <CustomTabsTrigger value="comments">نظرات</CustomTabsTrigger>
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
                <Suspense>
                  <Recommendations id={id} />
                </Suspense>
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
                      <Suspense>
                        <Characters id={id} />
                      </Suspense>
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
              با تهیهٔ اشتراک ویژه به‌راحتی به آرشیو بی‌پایان انیمه‌لیست دسترسی
              داشته باشید!
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
                {/* <div className="size-6 rounded bg-[#A1A1AA] text-white text-sm font-semibold flex justify-center items-center">
                    {comments.length}
                  </div> */}
              </TabsTrigger>
            </TabsList>
            <TabsContent className="py-4" value="trailers">
              <Suspense>
                <Trailers id={id} />
              </Suspense>
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
                    <Suspense>
                      <Download id={id} quality="480p" />
                    </Suspense>
                  </TabsContent>
                  <TabsContent value="720p">
                    <Suspense>
                      <Download id={id} quality="720p" />
                    </Suspense>
                  </TabsContent>
                  <TabsContent value="1080p">
                    <Suspense>
                      <Download id={id} quality="1080p" />
                    </Suspense>
                  </TabsContent>
                  <TabsContent value="720p x265">
                    <Suspense>
                      <Download id={id} quality="720p x265" />
                    </Suspense>
                  </TabsContent>
                  <TabsContent value="1080p x265">
                    <Suspense>
                      <Download id={id} quality="1080p x265" />
                    </Suspense>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>
            <TabsContent className="py-4" value="cc">
              <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                <Tabs defaultValue="exclusive">
                  <TabsList className="dark:bg-transparent dark:text-[#A1A1AA] w-full justify-start">
                    <h5 className="flex-1 text-white text-base font-semibold">
                      باکس دانلود
                    </h5>
                    <TabsTrigger
                      className="dark:data-[state=active]:bg-background dark:data-[state=active]:text-white rounded-lg"
                      value="exclusive"
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
                  <TabsContent value="exclusive">
                    <Suspense>
                      <Subtitle anime_id={id} type={2} />
                    </Suspense>
                  </TabsContent>
                  <TabsContent value="sent">
                    <Suspense>
                      <Subtitle anime_id={id} type={1} />
                    </Suspense>
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
                    <Suspense>
                      <Characters id={id} />
                    </Suspense>
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
              <Suspense>
                <Recommendations id={id} />
              </Suspense>
            </TabsContent>
            <TabsContent value="comments">
              <div className="flex flex-col gap-[14px]">
                <div className="bg-[#17212B] p-3">
                  <CommentForm />
                </div>
                <Suspense>
                  <Comments id={id} />
                </Suspense>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
