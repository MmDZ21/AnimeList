import React, { Suspense } from "react";
import Recent from "@/components/search/basic/Recent";
import Search from "@/components/search/basic/Search";
import Result from "@/components/search/basic/Result";
import ResultCard from "@/components/layout/cards/ResultCard";
import {
  blog1,
  blog2,
  blog3,
  eightySixAnime,
  frierenAnime,
  kusuriyaAnime,
  vinlandSagaAnime,
} from "@/constants";

export default function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="min-h-screen w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <Search placeholder="دنبال چی می‌گردی؟ انیمه، دراما، سریال، فیلم و ..." />
      <Recent />
      <Result
        data={{
          animeShows: [
            frierenAnime,
            vinlandSagaAnime,
            kusuriyaAnime,
            frierenAnime,
            frierenAnime,
            frierenAnime,
          ],
          top: [frierenAnime, kusuriyaAnime],
          dramas: [frierenAnime],
          movies: [frierenAnime],
          series: [frierenAnime],
          characters: frierenAnime.staff.characters,
          blog: [blog1, blog2, blog3],
        }}
      />
      {/* <Suspense key={query} fallback={<InvoicesTableSkeleton />}></Suspense> */}
    </div>
  );
}