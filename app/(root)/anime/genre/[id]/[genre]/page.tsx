// app/genres/[id]/page.tsx
import AnimeGenreList from "@/components/genres/AnimeGenreList";
import GenreTitle from "@/components/genres/GenreTitle";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { GetGenreInfoDocument, GetGenreInfoQuery, GetGenreInfoQueryVariables } from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import { Metadata } from "next";
import React, { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params:  Promise<{ id: string; genre: string }>;
}): Promise<Metadata> {
  const client = getClient();
  const newParams = await params
  const { data, error } = await client.query<
    GetGenreInfoQuery,
    GetGenreInfoQueryVariables
  >({
    query: GetGenreInfoDocument,
    variables: { id: newParams.id },
  });

  if (error || !data?.AnimeGenreInfo) {
    return {
      title: "ژانر انیمه پیدا نشد",
      description: "اطلاعات مربوط به ژانر انیمه مورد نظر پیدا نشد.",
    };
  }

  const genre = data.AnimeGenreInfo;

  return {
    title: `دانلود انیمه ${ genre.name_fa} با لینک مستقیم` || "دانلود انیمه با لینک مستقیم",
    description: `دانلود انیمه‌های ژانر ${genre.name_fa}`,
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/anime/genre/${newParams.id}/${newParams.genre}`,
    },
    openGraph: {
      title: genre.name_fa || "ژانر انیمه",
      description: `مشاهده انیمه‌های ژانر ${genre.name_fa}`,
      url: `${process.env.WEBSITE_URL}/anime/genre/${newParams.id}/${newParams.genre}`,
      siteName: "انیم آپ",
      locale: "fa_IR",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; genre: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { id, genre } = await params;
  // Extract the page value from searchParams (defaults to "1" if not present)
  const currentPage = (await searchParams).page ?? "1";

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <Suspense fallback={<Skeleton className="h-8 w-1/4" />}>
        <GenreTitle id={id} />
      </Suspense>
      <div>
        <Suspense fallback={<AnimeGenreListSkeleton length={30} />}>
          <AnimeGenreList id={id} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
