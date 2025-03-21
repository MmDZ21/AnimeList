
import AnimeGenreList from "@/components/genres/AnimeGenreList";
import AnimeYearList from "@/components/genres/AnimeYearList";
import GenreTitle from "@/components/genres/GenreTitle";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ year: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { year} = await params;
  // Extract the page value from searchParams (defaults to "1" if not present)
  const currentPage =(await searchParams).page ?? "1";

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <div className='w-full flex justify-between items-center'>
        <h1 className="font-bold text-2xl">انیمه‌های سال {year}</h1>
        <Link href="/anime/genre" className='text-primary-500 flex  items-center'>
   مشاهده سایر سال‌ها
        <ChevronLeftIcon className=''/>
        </Link>
      </div>
      <div>
        <Suspense fallback={<AnimeGenreListSkeleton length={30} />}>
          <AnimeYearList year={year} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
