import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const PreviewSkeleton = () => {
  return (
    <div className="hidden lg:flex lg:gap-4 w-full h-[352px]">
      <div className="h-full w-[220px] space-y-4">
        <Skeleton className="h-[288px] w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default PreviewSkeleton;
