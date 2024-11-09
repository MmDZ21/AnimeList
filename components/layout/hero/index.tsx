"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/hero-carousel";
import { heroSlides } from "@/constants";
import Actions from "./Actions";
import { type CarouselApi } from "@/components/ui/hero-carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useDirection } from "@radix-ui/react-direction";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Import the Next.js Image component

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const dir = useDirection();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            active: true,
          }),
          Fade({
            active: true,
          }),
        ]}
        opts={{
          loop: true,
          direction: dir,
          duration: 100,
        }}
      >
        <CarouselContent>
          {heroSlides.map((hero, i) => (
            <CarouselItem key={hero.title}>
              <div className="relative w-full h-[420px] lg:h-[900px]">
                <Image
                  src={hero.imageUrl}
                  alt={hero.title}
                  fill
                  priority={current === i ? true : false} // Ensures the image loads quickly as it's likely the main visual
                  className={cn(
                    "object-cover",
                    hero.imgMobilePosition === "right"
                      ? "object-right"
                      : hero.imgMobilePosition === "left"
                      ? "object-left"
                      : "object-center"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-end lg:justify-center z-20 w-full h-full lg:gap-32 lg:px-16 pb-4 lg:pb-0",
                    hero.justifyEn === "center"
                      ? "lg:items-center"
                      : hero.justifyEn === "end"
                      ? "lg:items-end"
                      : "lg:items-start",
                    hero.justifyFa === "center"
                      ? "lg:rtl:items-center"
                      : hero.justifyFa === "end"
                      ? "lg:rtl:items-end"
                      : "lg:rtl:items-start"
                  )}
                >
                  <div className="flex flex-col z-20 w-full items-center lg:items-start lg:w-[536px] gap-1 lg:gap-8">
                    <h2 className="text-2xl font-bold lg:leading-none lg:text-[64px] lg:font-black">
                      {hero.title}
                    </h2>
                    <p className="lg:hidden text-sm text-[#979CA6] font-normal">
                      زیرنویس چسبیده | پخش آنلاین
                    </p>
                    <p className="hidden lg:flex text-base font-medium">
                      {hero.desc}
                    </p>
                    <div className="hidden lg:flex gap-4">
                      {hero.actions &&
                        hero.actions.map((action) => (
                          <Actions key={action.label} actions={action} />
                        ))}
                    </div>
                  </div>
                  {/* actions and indicator on lg Screens */}
                  <div className="w-full z-20 hidden lg:flex lg:flex-col gap-32">
                    <div className="w-full flex z-20 gap-2 justify-between items-center">
                      <div className="flex gap-2">
                        {heroSlides.map((hero, i) => (
                          <div
                            key={i}
                            className={cn(
                              "h-2 rounded-full",
                              i === current
                                ? "w-12 bg-primary-500"
                                : "bg-[#979CA6] w-6"
                            )}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[420px] lg:h-full inset-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
              </div>
              {/* actions and indicator on sm Screens */}
              <div className="w-full z-20 flex lg:hidden flex-col justify-center items-center">
                <div className="flex w-full gap-3 px-4">
                  {hero.actions &&
                    hero.actions.map((action) => (
                      <Actions key={action.label} actions={action} />
                    ))}
                </div>
                <div className="w-full flex z-20 justify-center items-center">
                  <div className="flex py-8 gap-2 ">
                    {heroSlides.map((hero, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-2 rounded-full",
                          i === current
                            ? "w-12 bg-primary-500"
                            : "bg-[#979CA6] w-6"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
