import React, { Suspense } from "react";
import Recent from "@/components/search/basic/Recent";
import Search from "@/components/search/basic/Search";
import Result from "@/components/search/basic/Result";
import { ResultsSkeleton } from "@/components/layout/Skeletons/ResultsSkeleton";

export default async function page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const sp = await searchParams;
  const query = sp?.query || "";

  return (
    <div className="min-h-screen w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <Search placeholder="دنبال چی می‌گردی؟ انیمه، دراما، سریال، فیلم و ..." />
      <Recent />
      <Suspense key={query} fallback={<ResultsSkeleton/>}>
        <Result query={query} />
      </Suspense>
      {/* <Suspense key={query} fallback={<InvoicesTableSkeleton />}></Suspense> */}
    </div>
  );
}
