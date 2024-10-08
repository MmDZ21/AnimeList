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

export default function MediaCarousels({
  data,
  className,
}: {
  data: MediaCardType[];
  className?: string;
}) {
  const dir = useDirection();
  return (
    <Carousel
      opts={{
        direction: dir,
      }}
    >
      <CarouselContent className={cn("", className)}>
        {data.map((item) => (
          <CarouselItem className="basis-auto" key={item.name}>
            <Link href="/anime/example">
              <MediaCard data={item} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
