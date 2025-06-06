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
import { Button } from "@/components/ui/button";
import { Preview } from "./Preview";
import Recommendations from "./Recommendations";
import Characters from "./Characters";
import Download from "./Download";
import Comments from "./Comments";
import {
  Anime,
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
  GetSeasonalAnimesDocument,
  GetSeasonalAnimesQuery,
  GetSeasonalAnimesQueryVariables,
  HomePageContentDocument,
  HomePageContentQuery,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import { generateSlug, getImagePath } from "@/lib/utils";
import AdditionalInfo from "./AdditionalInfo";
import { auth } from "@/auth";
import MembersOnlyError from "@/components/MembersOnlyError";
import Link from "next/link";
import { Metadata } from "next";
import NoUpload from "@/components/NoUpload";
import SimilarAnimeError from "@/components/SimilarAnimeError";
import Subtitle from "./Subtitle";

export const revalidate = 600;

export async function generateStaticParams() {
  const client = getClient();

  // Execute the query and handle errors
  const { data, error } = await client.query<HomePageContentQuery>({
    query: HomePageContentDocument,
  });

  const formattedData = data.homePageAnimeContent.flatMap(
    (item) => item.content
  );
  // Assuming the result is an array of anime objects:
  const params = formattedData.map((anime) => ({
    id: anime.id,
    slug: generateSlug(anime.dic_title!),
  }));

  return params; // Return the generated params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}): Promise<Metadata> {
  const client = getClient();
  const paramsData = await params;
  const { data, error } = await client.query<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >({
    query: GetAnimeByIdDocument,
    variables: { id: paramsData.id },
  });

  if (error || !data.anime) {
    return {
      title: "انیمه پیدا نشد",
      description: "انیمه مورد نظر پیدا نشد",
    };
  }

  const anime = data.anime;
  // Use seo_title and seo_desc if available, fallback to dic_title and default description.
  const title = anime.post_title || anime.dic_title || "عنوان انیمه";
  const description =
    anime.seo_desc ||
    (anime.dic_body_normalized
      ? anime.dic_body_normalized.substring(0, 150) + "..."
      : "توضیحات انیمه");

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/anime/${paramsData.id}/${paramsData.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${process.env.WEBSITE_URL}/anime/${paramsData.id}/${paramsData.slug}`,
      siteName: "انیمه لیست",
      locale: "fa_IR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export default async function page({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const session = await auth();
  const { id } = await params;
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

  const anime = data?.anime as Anime;

  if (!anime) {
    return <p>Anime not found.</p>;
  }

  const desktopSrc = getImagePath(anime.wide_image, null);
  const mobileSrc = getImagePath(anime.mal_image_url, anime.anilist_image_url);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full h-[585px] relative">
        <Image
          priority
          src={mobileSrc}
          fill
          alt={anime.dic_title!}
          className="object-cover lg:hidden"
        />
        <Image
          priority
          src={desktopSrc}
          fill
          alt={anime.dic_title!}
          className="object-cover hidden lg:block"
        />
        <div className="absolute h-1/2 bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background to-background/0"></div>
      </div>
      <div className="w-full flex flex-col justify-center max-w-[1280px] mx-auto z-20 gap-6">
        <div className="flex flex-col gap-4 -mt-14">
          <Preview anime={anime} />
          <div className="w-full block lg:hidden px-4">
            <CustomTabs defaultValue="episodes" className="w-full">
              <CustomTabsList className="w-full bg-transparent border-b border-[hsla(215,20%,65%,0.24)]">
                <CustomTabsTrigger value="episodes">دانلود</CustomTabsTrigger>
                <CustomTabsTrigger value="subtitle">زیرنویس</CustomTabsTrigger>
                <CustomTabsTrigger value="similars">
                  آثار مشابه
                </CustomTabsTrigger>
                <CustomTabsTrigger value="staff">عوامل</CustomTabsTrigger>
                {/* <CustomTabsTrigger value="comments">نظرات</CustomTabsTrigger> */}
              </CustomTabsList>
              <CustomTabsContent value="episodes">
                {session?.user?.isVip ? (
                  anime.anime_links.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                        <Tabs defaultValue="480p">
                          <TabsList className="bg-transparent text-[#A1A1AA] w-full justify-start flex-wrap h-fit">
                            <h5 className="flex-1 text-white text-base font-semibold hidden lg:block">
                              باکس دانلود
                            </h5>
                            <TabsTrigger
                              className="data-[state=active]:bg-background data-[state=active]:text-white"
                              value="480p"
                            >
                              480p
                            </TabsTrigger>
                            <TabsTrigger
                              className="data-[state=active]:bg-background data-[state=active]:text-white"
                              value="720p"
                            >
                              720p
                            </TabsTrigger>
                            <TabsTrigger
                              className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                              value="1080p"
                            >
                              1080p
                            </TabsTrigger>
                            <TabsTrigger
                              className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                              value="720p x265"
                            >
                              720p x265
                            </TabsTrigger>
                            <TabsTrigger
                              className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                              value="1080p x265"
                            >
                              1080p x265
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="480p">
                            <Download anime={anime} quality="480p" />
                          </TabsContent>
                          <TabsContent value="720p">
                            <Download anime={anime} quality="720p" />
                          </TabsContent>
                          <TabsContent value="1080p">
                            <Download anime={anime} quality="1080p" />
                          </TabsContent>
                          <TabsContent value="720p x265">
                            <Download anime={anime} quality="720p x265" />
                          </TabsContent>
                          <TabsContent value="1080p x265">
                            <Download anime={anime} quality="1080p x265" />
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div
                        className="fixed px-4 py-6 z-40 bottom-0 end-0"
                        // style={{
                        //   background:
                        //     "linear-gradient(180deg, rgba(14, 22, 33, 0) 0%, #0E1621 23.96%)",
                        // }}
                      >
                        {/* <WatchOnline /> */}
                        <AddToWatchList iconOnly={true} />
                      </div>
                    </div>
                  ) : (
                    <NoUpload />
                  )
                ) : (
                  <MembersOnlyError />
                )}
              </CustomTabsContent>
              <CustomTabsContent value="subtitle">
                <div className="flex flex-col gap-2">
                  <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                    <Tabs defaultValue="exclusive">
                      <TabsList className="bg-transparent text-[#A1A1AA] w-full justify-center flex-wrap h-fit">
                        <h5 className="flex-1 text-white text-base font-semibold hidden lg:block">
                          باکس دانلود
                        </h5>
                        <TabsTrigger
                          className="data-[state=active]:bg-background data-[state=active]:text-white"
                          value="exclusive"
                        >
                          زیرنویس‌های اختصاصی
                        </TabsTrigger>
                        <TabsTrigger
                          className="data-[state=active]:bg-background data-[state=active]:text-white"
                          value="sent"
                        >
                          زیرنویس‌های ارسالی
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="exclusive">
                        <Subtitle anime_id={id} type={2} />
                      </TabsContent>
                      <TabsContent value="sent">
                        <Subtitle anime_id={id} type={1} />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CustomTabsContent>
              <CustomTabsContent value="similars">
                {anime.recommendations.length > 0 ? (
                  <Recommendations anime={anime} />
                ) : (
                  <SimilarAnimeError />
                )}
              </CustomTabsContent>
              <CustomTabsContent value="staff">
                <div className="py-2">
                  <Tabs defaultValue="characters" className="w-full">
                    <TabsList className=" bg-[#17212B]  A1A1AA] w-full justify-start gap-[10px] rounded-md h-12">
                      <TabsTrigger
                        className=" data-[state=active]:bg-background  data-[state=active]:text-white rounded-lg p-2"
                        value="characters"
                      >
                        شخصیت‌ها و صداپیشه‌ها
                      </TabsTrigger>
                      <TabsTrigger
                        className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                        value="producers"
                      >
                        عوامل تولید
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="characters">
                      <Characters anime={anime} />
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
              {/* <CustomTabsContent value="comments">
                <div className="flex flex-col gap-[14px]">
                  <div className="bg-[#17212B] p-3">
                    <CommentForm
                      animeId={id}
                      parentId="0"
                      session={session?.user ? true : false}
                    />
                  </div>
                  <Comments id={id} />
                </div>
              </CustomTabsContent> */}
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
            <Button
              className="h-10 px-[10px] bg-white text-primary-500 text-base font-semibold flex gap-2 items-center justify-center hover:bg-[#f9cae6]"
              asChild
            >
              <Link href="/dashboard">
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
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <Tabs defaultValue="download" className="w-full">
            <TabsList className="w-full  bg-[#17212B] rounded-lg justify-start items-center p-1 h-fit gap-2">
              <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="download"
              >
                دانلود
              </TabsTrigger>

              <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="cc"
              >
                زیرنویس
              </TabsTrigger>
              <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="staff"
              >
                شخصیت‌ها و عوامل
              </TabsTrigger>
              <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="details"
              >
                اطلاعات تکمیلی
              </TabsTrigger>
              <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="similars"
              >
                آثار مشابه
              </TabsTrigger>
              {/* <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background gap-2"
                value="comments"
              >
                نظرات
              </TabsTrigger> */}
              {/* <TabsTrigger
                className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white  data-[state=active]:bg-background"
                value="trailers"
              >
                تریلر
              </TabsTrigger> */}
            </TabsList>
            <TabsContent className="py-4" value="download">
              <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                {session?.user?.isVip ? (
                  anime.anime_links.length > 0 ? (
                    <Tabs defaultValue="480p">
                      <TabsList className=" bg-transparent  A1A1AA] w-full justify-start">
                        <h5 className="flex-1 text-white text-base font-semibold">
                          باکس دانلود
                        </h5>
                        <TabsTrigger
                          className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                          value="480p"
                        >
                          480p
                        </TabsTrigger>
                        <TabsTrigger
                          className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                          value="720p"
                        >
                          720p
                        </TabsTrigger>
                        <TabsTrigger
                          className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                          value="1080p"
                        >
                          1080p
                        </TabsTrigger>
                        <TabsTrigger
                          className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                          value="720p x265"
                        >
                          720p x265
                        </TabsTrigger>
                        <TabsTrigger
                          className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                          value="1080p x265"
                        >
                          1080p x265
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="480p">
                        <Download anime={anime} quality="480p" />
                      </TabsContent>
                      <TabsContent value="720p">
                        <Download anime={anime} quality="720p" />
                      </TabsContent>
                      <TabsContent value="1080p">
                        <Download anime={anime} quality="1080p" />
                      </TabsContent>
                      <TabsContent value="720p x265">
                        <Download anime={anime} quality="720p x265" />
                      </TabsContent>
                      <TabsContent value="1080p x265">
                        <Download anime={anime} quality="1080p x265" />
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <NoUpload />
                  )
                ) : (
                  <div className="w-full flex justify-center">
                    <MembersOnlyError />
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent className="py-4" value="cc">
              <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                <Tabs defaultValue="exclusive">
                  <TabsList className=" bg-transparent  text-[#A1A1AA] w-full justify-start">
                    <h5 className="flex-1 text-white text-base font-semibold">
                      باکس دانلود
                    </h5>
                    <TabsTrigger
                      className=" data-[state=active]:bg-background  data-[state=active]:text-white rounded-lg"
                      value="exclusive"
                    >
                      زیرنویس‌های اختصاصی
                    </TabsTrigger>
                    <TabsTrigger
                      className=" data-[state=active]:bg-background  data-[state=active]:text-white"
                      value="sent"
                    >
                      زیرنویس‌های ارسالی
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="exclusive">
                    <Subtitle anime_id={id} type={2} />
                  </TabsContent>
                  <TabsContent value="sent">
                    <Subtitle anime_id={id} type={1} />
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>
            <TabsContent value="staff" className="py-4">
              <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap[10px]">
                <Tabs defaultValue="characters" className="w-full">
                  <TabsList className=" bg-transparent  text-[#A1A1AA] w-full justify-start">
                    <h5 className="flex-1 text-white text-base font-semibold">
                      شخصیت‌ها و عوامل
                    </h5>
                    <TabsTrigger
                      className=" data-[state=active]:bg-background  data-[state=active]:text-white rounded-lg"
                      value="characters"
                    >
                      شخصیت‌ها و صداپیشه‌ها
                    </TabsTrigger>
                    <TabsTrigger
                      className=" data-[state=active]:bg-background  data-[state=active]:text-white rounded-lg"
                      value="producers"
                    >
                      عوامل تولید
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="characters">
                    <Characters anime={anime} />
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
            <TabsContent value="details">
              <AdditionalInfo anime={anime} />
            </TabsContent>
            <TabsContent value="similars" className="w-full">
              {anime.recommendations.length > 0 ? (
                <Recommendations anime={anime} />
              ) : (
                <SimilarAnimeError />
              )}
            </TabsContent>
            {/* <TabsContent value="comments">
              <div className="flex flex-col gap-[14px]">
                <div className="bg-[#17212B] p-3">
                  <CommentForm
                    animeId={id}
                    parentId="0"
                    session={session?.user ? true : false}
                  />
                </div>
                <Comments id={id} />
              </div>
            </TabsContent> */}
            {/* <TabsContent className="py-4" value="trailers">
                <Trailers anime={anime} />
            </TabsContent> */}
          </Tabs>
        </div>
        <div>
          <div className="flex flex-col gap-[14px]">
            <div className="bg-[#17212B] p-3">
              <CommentForm
                animeId={id}
                parentId="0"
                session={session?.user ? true : false}
              />
            </div>
            <Comments id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
