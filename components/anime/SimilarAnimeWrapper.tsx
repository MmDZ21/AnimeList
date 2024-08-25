import { SimilarAnime } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

export default function SimilarAnimeWrapper({
  anime,
}: {
  anime: SimilarAnime;
}) {
  return (
    <div className="w-full h-[344px] flex flex-col gap-2">
      <div className="w-full h-[290px] relative">
        <Image
          src={anime.image}
          alt={anime.title}
          fill
          className="object-cover object-center rounded"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-start items-center">
          <h3
            dir="ltr"
            className="text-ellipsis whitespace-nowrap overflow-hidden text-start"
          >
            {anime.title}
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <p className="text-[#979CA6] text-xs font-medium">پخش آنلاین</p>
            <Separator
              orientation="vertical"
              className="h-4 bg-[hsla(215,20%,65%,0.24)] opacity-85"
            />
            <p className="text-[#979CA6] text-xs font-medium">زیرنویس چسبیده</p>
          </div>
          <div className="size-5 flex items-center justify-center">
            <svg
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25 2.75C3.25 2.05964 2.69036 1.5 2 1.5C1.30964 1.5 0.75 2.05964 0.75 2.75C0.75 3.44036 1.30964 4 2 4C2.69036 4 3.25 3.44036 3.25 2.75Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
              <path
                d="M3.25 9C3.25 8.30964 2.69036 7.75 2 7.75C1.30964 7.75 0.75 8.30964 0.75 9C0.75 9.69036 1.30964 10.25 2 10.25C2.69036 10.25 3.25 9.69036 3.25 9Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
              <path
                d="M3.25 15.25C3.25 14.5596 2.69036 14 2 14C1.30964 14 0.75 14.5596 0.75 15.25C0.75 15.9404 1.30964 16.5 2 16.5C2.69036 16.5 3.25 15.9404 3.25 15.25Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
