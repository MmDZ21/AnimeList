// app/genres/[id]/page.tsx
import AnimeGenreList from "@/components/genres/AnimeGenreList";
import GenreTitle from "@/components/genres/GenreTitle";
import AnimeGenreListSkeleton from "@/components/layout/Skeletons/AnimeGenreListSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; genre: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { id, genre } = await params;
  // Extract the page value from searchParams (defaults to "1" if not present)
  const currentPage =(await searchParams).page ?? "1";

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
