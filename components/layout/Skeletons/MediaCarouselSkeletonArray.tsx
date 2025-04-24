import React from "react";
import MediaCarouselSkeleton from "./MediaCarouselSkeleton";

const MediaCarouselSkeletonArray = ({length} : {length: number}) => {
  const arr = Array.from({ length });
  return <div className="flex flex-col items-center gap-4 w-full">{arr.map((_, i)=>
    <MediaCarouselSkeleton length={8} key={i}/>
  )}</div>;
};

export default MediaCarouselSkeletonArray;
