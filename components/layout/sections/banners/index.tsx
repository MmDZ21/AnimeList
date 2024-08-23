import React from "react";
import SectionContainer from "../SectionContainer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { banners } from "@/constants";

export default function Banners() {
  return (
    <SectionContainer>
      <div className="hidden lg:flex w-full justify-between gap-10">
        {banners.map((banner, i) => (
          <div
            style={{ backgroundImage: `url(${banner.image})` }}
            className={cn(
              "bg-cover bg-center flex w-full items-center h-[340px]"
            )}
            key={i}
          >
            <div className="flex flex-col gap-6 items-center w-1/2 justify-center h-full mx-8">
              <Image
                src={banner.logo}
                width={400}
                height={100}
                className="object-contain"
                alt={banner.title}
              />

              <Button className="bg-white text-xl font-semibold text-black">
                همین حالا تماشا کنید!
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
