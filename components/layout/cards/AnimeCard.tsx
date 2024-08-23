import WatchOnline from "@/components/buttons/WatchOnline";
import Image from "next/image";
import React from "react";

export default function AnimeCard({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full h-[235px]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="rounded-[4px] object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6 className="text-xl font-medium">{data.title}</h6>
          <p className="text-[#979CA6] text-sm font-normal">{data.tags}</p>
        </div>
        <div className="text-sm font-medium text-white">{data.description}</div>
      </div>
      <WatchOnline />
    </div>
  );
}
