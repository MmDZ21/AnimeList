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
import Link from "next/link";
import { useDirection } from "@radix-ui/react-direction";

export default function MediaCarousels({
  className,
  items
}: {
  className?: string;
  items: {
    __typename?: "Anime";
    id: string;
    dic_body_normalized?: string | null;
    dic_title?: string | null;
    al_score?: number | null;
    al_score_count?: number | null;
    anilist_image_url?: string | null;
    mal_image_url?: string | null;
    dic_score?: string | null;
    anilist_score?: number | null;
    dic_episodes?: string | null;
    dic_last_update?: string | null;
    dic_status?: number | null;
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
