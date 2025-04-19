import WatchOnline from "@/components/buttons/WatchOnline";
import { AnimeFragmentFragment } from "@/generated/graphql";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function AnimeCard({ data }: { data: AnimeFragmentFragment }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full h-[235px]">
        <Image
          src={getImagePath(data.mal_image_url, data.anilist_image_url)}
          alt={data.dic_title || "انیمه"}
          fill
          className="rounded object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6 className="text-xl font-medium">{data.dic_title}</h6>
          <p className="text-[#979CA6] text-sm font-normal">به همراه زیرنویس فارسی</p>
        </div>
        <div className="text-sm font-medium text-white line-clamp-4"  dangerouslySetInnerHTML={{__html:data.dic_body!}}/>
      </div>
      <WatchOnline />
    </div>
  );
}
