import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ResultCardSkeleton() {
  return (
    <div className="flex w-full gap-4 h-36 lg:flex-col lg:h-fit">
      <Skeleton className="rounded w-[100px] h-36 aspect-video lg:w-full lg:h-full" />
      <div className="h-full w-full flex flex-col gap-4">
        <Skeleton className="w-2/3 h-6" />
        <Skeleton className="w-1/3 h-4 lg:hidden" />
        <Skeleton className="w-1/3 h-5" />
        <Skeleton className="w-1/2 h-4 lg:hidden" />
      </div>
    </div>
  );
}
