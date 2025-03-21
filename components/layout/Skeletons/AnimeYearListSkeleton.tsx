import React from "react";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import MediaCardSkeleton from "./MediaCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const AnimeYearListSkeleton = ({ length }: { length: number }) => {
  const arr = Array.from({ length });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-5">
      {arr.map((_, i) => (
        <Skeleton className="w-full py-2" />
      ))}
    </div>
  );
};

export default AnimeYearListSkeleton;
