import AnimeYearList from "@/components/genres/AnimeYearList";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { Suspense } from "react";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ year: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const year = (await params).year;
  const page = (await searchParams).page ?? "1";
  const canonical =
    page === "1"
      ? `${process.env.WEBSITE_URL}/anime/year/${year}`
      : `${process.env.WEBSITE_URL}/anime/year/${year}?page=${page}`;

  return {
    title: `انیمه‌های سال ${year}`,
    alternates: {
      canonical,
    },
    robots: { index: true, follow: true },
    description: `لیست انیمه‌های منتشر شده در سال ${year}`,
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ year: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { year } = await params;
  const currentPage = (await searchParams).page ?? "1";

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl">انیمه‌های سال {year}</h1>
        <Link
          href="/anime/genre"
          className="text-primary-500 flex items-center"
        >
          مشاهده سایر سال‌ها
          <ChevronLeftIcon />
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
