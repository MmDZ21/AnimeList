import AnimeOngoingList from "@/components/genres/AnimeOngoingList";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const page =(await searchParams).page ?? "1";
  const canonical =
    page === "1"
      ? `${process.env.WEBSITE_URL}/anime/ongoing`
      : `${process.env.WEBSITE_URL}/anime/ongoing?page=${page}`;

  return {
    title: "دانلود انیمه های درحال پخش با لینک مستقیم | انیمه لیست",
    description: "دانلود انیمه های درحال پخش",
    alternates: {
      canonical,
    },
    robots: { index: true, follow: true },

  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const currentPage = (await searchParams).page ?? "1";

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl">انیمه‌های درحال پخش</h1>
      </div>
      <div>
        <Suspense fallback={<AnimeGenreListSkeleton length={30} />}>
          <AnimeOngoingList page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
