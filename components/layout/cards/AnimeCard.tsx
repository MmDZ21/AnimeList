import WatchOnline from "@/components/buttons/WatchOnline";
import { TrendingAnimeFragmentFragment } from "@/generated/graphql";
import Image from "next/image";
import React from "react";

export default function AnimeCard({ data }: { data: TrendingAnimeFragmentFragment }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full h-[235px]">
        <Image
          src={"https://dev-api.alplayer.ir"+data.mal_image_url || "https://dev-api.alplayer.ir"+data.anilist_image_url || "/images/frieren/cover.webp"}
          alt={data.dic_title!}
          fill
          className="rounded object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6 className="text-xl font-medium">{data.dic_title}</h6>
          <p className="text-[#979CA6] text-sm font-normal">زیرنویس چسبیده | پخش آنلاین</p>
        </div>
        <div className="text-sm font-medium text-white line-clamp-4">{data.dic_body}</div>
      </div>
      <WatchOnline />
    </div>
  );
}
