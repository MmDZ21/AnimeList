import React from "react";

import dynamic from "next/dynamic";
const MediaCarousels = dynamic(() => import("../carousels/MediaCarousels"));
import SectionContainer from "./SectionContainer";

export default function SummerAnime() {
  return (
    <SectionContainer title="انیمه‌های فصل تابستان">
      <MediaCarousels />
    </SectionContainer>
  );
}
