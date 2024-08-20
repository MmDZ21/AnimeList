import { summerAnime } from "@/constants";
import React from "react";
import MediaCarousels from "../carousels/MediaCarousels";
import SectionContainer from "./SectionContainer";

export default function SummerAnime() {
  return (
    <SectionContainer title="انیمه‌های فصل تابستان">
      <MediaCarousels data={summerAnime} />
    </SectionContainer>
  );
}
