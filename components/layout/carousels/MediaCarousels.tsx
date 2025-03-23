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
  items: {
    __typename?: "Anime";
    id: string;
    dic_body?: string | null;
    dic_title?: string | null;
    al_score?: number | null;
    al_score_count?: number | null;
    anilist_image_url?: string | null;
    mal_image_url?: string | null;
    dic_score?: string | null;
    anilist_score?: number | null;
    dic_episodes?: string | null;
}[]
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
