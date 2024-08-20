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

export default function MediaCarousels({
  data,
  className,
}: {
  data: MediaCardType[];
  className?: string;
}) {
  return (
    <Carousel>
      <CarouselContent className={cn("", className)}>
        {data.map((item) => (
          <CarouselItem className="basis-auto" key={item.name}>
            <MediaCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
