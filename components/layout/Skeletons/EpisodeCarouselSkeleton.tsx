import React from "react";
import EpisodeCardSkeleton from "./EpisodeCardSkeleton";

const EpisodeCarouselSkeleton = ({length} : {length: number}) => {
  const arr = Array.from({ length });
  return <div className="flex flex-col lg:flex-row items-center overflow-hidden gap-4 w-full flex-nowrap">{arr.map((_, i)=>(
    <div className="flex flex-col gap-4" key={i}>
      <EpisodeCardSkeleton/>
      <EpisodeCardSkeleton/>
    </div>
  )
  )}</div>;
};

export default EpisodeCarouselSkeleton;
