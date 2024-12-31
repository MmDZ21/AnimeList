import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CategoryCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-[110px] md:h-[160px] lg:h-[200px] rounded-lg"/>
  );
};

export default CategoryCardSkeleton;
