import React from "react";
import SectionContainer from "./SectionContainer";
import { recommendations } from "@/constants";
import MediaCarousels from "../carousels/MediaCarousels";

export default function Recommendation() {
  return (
    <SectionContainer
      title="بهترین‌ها برای شما"
      description="لیستی از بهترین انیمه‌ها بر اساس سلیقه‌ شما"
      className="lg:-mt-28"
    >
      <MediaCarousels data={recommendations} />
    </SectionContainer>
  );
}
