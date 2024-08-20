import React from "react";
import Parallel from "../Parallel";
import MediaCarousels from "../../carousels/MediaCarousels";
import { recommendations } from "@/constants";
import SeeAllButton from "./SeeAllButton";

export default function TrendingParallel() {
  return (
    <Parallel
      bgGradient="to top, hsla(15,76%,13%,0.63), hsla(25,95%,53%,0.7)"
      bgUrl="/images/trending.webp"
      title="محبوب‌ترین‌های فصل"
      description="آثار محبوب این فصل که نباید از دست‌شون بدی"
      actions={[<SeeAllButton key={1} />]}
    >
      <MediaCarousels data={recommendations} />
    </Parallel>
  );
}
