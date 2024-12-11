import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MediaCardSkeleton = () => {
  return (
    <div className="flex flex-col shrink-0 space-y-3 w-[157px] h-[282px] md:w-52 md:h-96 lg:h-[512px] lg:w-[281px]">
      <div className="flex flex-col gap-2 w-full h-full md:p-2">
        <Skeleton className="h-full w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default MediaCardSkeleton;
