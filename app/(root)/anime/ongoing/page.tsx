
import AnimeGenreList from "@/components/genres/AnimeGenreList";
import AnimeOngoingList from "@/components/genres/AnimeOngoingList";
import AnimeYearList from "@/components/genres/AnimeYearList";
import GenreTitle from "@/components/genres/GenreTitle";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "دانلود انیمه های درحال پخش با لینک مستقیم | انیم آپ",
  description: "دانلود انیمه های درحال پخش",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Extract the page value from searchParams (defaults to "1" if not present)
  const currentPage =(await searchParams).page ?? "1";

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <div className='w-full flex justify-between items-center'>
        <h1 className="font-bold text-2xl">انیمه‌های درحال پخش</h1>
      </div>
      <div>
        <Suspense fallback={<AnimeGenreListSkeleton length={30} />}>
          <AnimeOngoingList page={currentPage}/>
        </Suspense>
      </div>
    </div>
  );
}
