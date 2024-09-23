import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { UserAnime } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function RecentCardSkeleton() {
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
