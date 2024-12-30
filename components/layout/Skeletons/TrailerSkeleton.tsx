import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TrailerSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="aspect-video" />
      <div>
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
};

export default TrailerSkeleton;
