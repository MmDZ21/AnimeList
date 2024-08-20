import React from "react";
import SectionContainer from "./SectionContainer";
import EpisodeCarousel from "../carousels/EpisodeCarousel";
import { newEpisodes } from "@/constants";
import { Button } from "@/components/ui/button";

export default function NewEpisodes() {
  return (
    <SectionContainer title="قسمت‌ جدید انیمه‌های فصلی">
      <div className="hidden lg:block">
        <EpisodeCarousel data={newEpisodes} />
      </div>
      <div className="flex flex-col lg:hidden">
        <EpisodeCarousel
          data={newEpisodes}
          orient="vertical"
          className="h-[600px]"
        />
        <Button className="bg-[#242F3D] h-12 text-base w-full">
          نمایش جدول پخش هفتگی
        </Button>
      </div>
    </SectionContainer>
  );
}
