import React from "react";
import ResultCardSkeleton from "./ResultCardSkeleton";
import MediaCardSkeleton from "./MediaCardSkeleton";

export const ResultsSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-2 lg:hidden">
        <ResultCardSkeleton />
        <ResultCardSkeleton />
        <ResultCardSkeleton />
        <ResultCardSkeleton />
      </div>
      <div className="hidden lg:flex gap-2">
        <MediaCardSkeleton />
        <MediaCardSkeleton />
        <MediaCardSkeleton />
        <MediaCardSkeleton />
      </div>
    </>
  );
};
