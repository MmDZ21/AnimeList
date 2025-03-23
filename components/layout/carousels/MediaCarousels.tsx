"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import MediaCard from "../cards/MediaCard";
import { cn, generateSlug } from "@/lib/utils";
import { MediaCardType } from "@/types/types";
import Link from "next/link";
import { useDirection } from "@radix-ui/react-direction";
import { Anime, AnimeFragmentFragment, GetSeasonalAnimesDocument, GetSeasonalAnimesQuery } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";

export default function MediaCarousels({
  className,
  items
}: {
  className?: string;
  items: AnimeFragmentFragment[]
}) {
  const dir = useDirection();

  return (
    <Carousel
      opts={{
        direction: dir,
      }}
    >
      <CarouselContent className={cn("", className)}>
        {items.map((item, i) => (
          <CarouselItem className="basis-auto" key={item.id}>
            <Link href={`/anime/${item.id}/${generateSlug(item.dic_title!)}`}>
              <MediaCard data={item} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
