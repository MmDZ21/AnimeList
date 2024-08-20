import React from "react";
import SectionContainer from "./SectionContainer";

import { userEpisodes } from "@/constants";
import EpisodeCarousel from "../carousels/EpisodeCarousel";

export default function UserEpisodes() {
  return (
    <SectionContainer
      title="ادامه تماشا"
      description="ادامه انیمه‌های لیست‌تان را تماشا کنید"
      className="hidden lg:flex"
    >
      <EpisodeCarousel data={userEpisodes} />
    </SectionContainer>
  );
}
