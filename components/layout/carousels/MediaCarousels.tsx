"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import MediaCard from "../cards/MediaCard";
import { cn } from "@/lib/utils";
import { MediaCardType } from "@/types/types";
import Link from "next/link";
import { useDirection } from "@radix-ui/react-direction";
import { GetSeasonalAnimesDocument, GetSeasonalAnimesQuery } from "@/generated/graphql";
import { useSuspenseQuery } from "@apollo/client";

export default function MediaCarousels({
  className,
}: {
  className?: string;
}) {
  const dir = useDirection();
  const {data, error} = useSuspenseQuery<GetSeasonalAnimesQuery>(GetSeasonalAnimesDocument, {
    variables:{
      first:10
    }
  })
 const items = data.animesSeason.data
  return (
    <Carousel
      opts={{
        direction: dir,
      }}
    >
      <CarouselContent className={cn("", className)}>
        {items.map((item, i) => (
          <CarouselItem className="basis-auto" key={item.id}>
            <Link href={`/anime/${item.dic_title}-${item.id}`}>
              <MediaCard data={item} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
