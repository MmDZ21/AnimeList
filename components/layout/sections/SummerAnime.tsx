import React from "react";
import { summerAnime } from "@/constants";
import dynamic from "next/dynamic";
const MediaCarousels = dynamic(() => import("../carousels/MediaCarousels"), {
  ssr: false,
});
import SectionContainer from "./SectionContainer";

export default function SummerAnime() {
  return (
    <SectionContainer title="انیمه‌های فصل تابستان">
      <MediaCarousels data={summerAnime} />
    </SectionContainer>
  );
}
