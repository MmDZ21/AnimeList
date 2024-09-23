import React, { Suspense } from "react";
import Recent from "@/components/search/basic/Recent";
import Search from "@/components/search/basic/Search";

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
      {/* <Suspense key={query} fallback={<InvoicesTableSkeleton />}></Suspense> */}
    </div>
  );
}
