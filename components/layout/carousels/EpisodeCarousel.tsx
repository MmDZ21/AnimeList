"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { EpisodeCardType } from "@/types/types";
import EpisodeCard from "../cards/EpisodeCard";
import { useDirection } from "@radix-ui/react-direction";

// Utility function to group the episodes by 2
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function EpisodeCarousel({
  data,
  className,
  orient,
}: {
  data: EpisodeCardType[];
  className?: string;
  orient?: "vertical" | "horizontal";
}) {
  const groupedEpisodes = chunkArray(data, 2);
  const dir = useDirection();
  return (
    <Carousel orientation={orient || "horizontal"} opts={{ direction: dir }}>
      <CarouselContent className={cn("-mt-4 lg:-ml-10 lg:-mt-0", className)}>
        {groupedEpisodes.slice(0, 5).map((item, i) => (
          <CarouselItem className="basis-auto pt-4 lg:pt-0 lg:pl-4" key={i}>
            <div className="flex flex-col gap-4 lg:gap-4">
              <EpisodeCard data={item[0]} />
              {item[1] && <EpisodeCard data={item[1]} />}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
