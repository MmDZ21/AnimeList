import React from "react";
import MediaCardSkeleton from "./MediaCardSkeleton";

const MediaCarouselSkeleton = ({length} : {length: number}) => {
  const arr = Array.from({ length });
  return <div className="flex items-center overflow-x-hidden gap-4 w-full flex-nowrap">{arr.map((_, i)=>
    <MediaCardSkeleton key={i}/>
  )}</div>;
};

export default MediaCarouselSkeleton;
