import { AnimeGenre } from "@/generated/graphql";
import { Genre } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function CategoryCard({
  category,
  priority,
}: {
  category: AnimeGenre;
  priority?: boolean;
}) {
  return (
    <div className="w-full h-[110px] md:h-[160px] lg:h-[200px] relative rounded-lg">
      <Image
        src={category.backdrop ? "https://anilist.top/storage/"+category.backdrop : "/svg/imageloader.svg"}
        alt={category.name_fa!}
        fill
        priority={priority}
        className="object-cover object-center rounded-lg"
      />
      <div className="absolute inset-0 z-10 flex items-end p-4 bg-gradient-to-t from-[#17212B] to-transparent">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-black text-2xl lg:text-[32px]">
            {category.name_fa}
          </h3>
          <h4
            dir="ltr"
            className="font-light text-white text-[10px] lg:text-xs"
          >
            {category.name_en}
          </h4>
        </div>
      </div>
    </div>
  );
}
