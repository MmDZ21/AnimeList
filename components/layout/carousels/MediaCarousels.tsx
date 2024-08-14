import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import MediaCard from "../cards/MediaCard";
import { cn } from "@/lib/utils";

export default function MediaCarousels({
  data,
  className,
}: {
  data: any[];
  className?: string;
}) {
  return (
    <Carousel>
      <CarouselContent className={cn("", className)}>
        {data.map((item) => (
          <CarouselItem className="basis-auto" key={item.title}>
            <MediaCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
