import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const EpisodeCardSkeleton = () => {
  return (
    <Skeleton className="flex items-center p-2 w-full lg:w-[570px] h-36 shrink-0">
      <div className="flex gap-3 items-center p-2 w-full h-full">
        <Skeleton className="min-w-[90px] h-full" />
        <div className="w-full flex flex-col justify-between gap-4 h-full">
          <div className="space-y-4">
            <Skeleton className="w-2/4 h-4" />
            <Skeleton className="w-3/4 h-4" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-1/4 h-5" />
            <Skeleton className="w-1/4 h-5" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default EpisodeCardSkeleton;
