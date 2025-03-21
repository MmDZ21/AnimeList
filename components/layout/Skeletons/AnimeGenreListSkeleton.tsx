import React from "react";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import MediaCardSkeleton from "./MediaCardSkeleton";

const AnimeGenreListSkeleton = ({length}:{length: number}) => {
  const arr = Array.from({ length });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-5">
      {arr.map((_, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <MediaCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default AnimeGenreListSkeleton;
