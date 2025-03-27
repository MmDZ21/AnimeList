import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AnimeHeroSkeleton = () => {
  return (
    <div className="w-full h-[585px] relative">
      <Skeleton className="h-full w-full" />
      <div className="absolute h-1/2 bottom-0 left-0 right-0 z-10  bg-gradient-to-t  from-background  to-background/0"></div>
    </div>
  );
};

export default AnimeHeroSkeleton;
