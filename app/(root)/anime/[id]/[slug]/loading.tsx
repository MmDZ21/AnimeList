import AnimeHeroSkeleton from "@/components/layout/Skeletons/AnimeHeroSkeleton";
import DesktopPreviewSkeleton from "@/components/layout/Skeletons/DesktopPreviewSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
const loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <AnimeHeroSkeleton />
      <div className="w-full flex flex-col justify-center max-w-[1280px] mx-auto z-20 gap-6">
        <div className="flex flex-col gap-4 -mt-14">
          <DesktopPreviewSkeleton />
        </div>
        <Skeleton className="w-full h-[100px] rounded-md hidden lg:block" />
        <Skeleton className="w-full h-14"/>
      </div>
    </div>
  );
};

export default loading;
