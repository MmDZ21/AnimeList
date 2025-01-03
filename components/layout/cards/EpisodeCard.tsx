import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type EpisodeCardType } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function EpisodeCard({
  data,
  className,
}: {
  data: EpisodeCardType;
  className?: string;
}) {
  return (
    <div className="relative flex rounded-lg bg-[#182533] items-center p-2 w-full lg:w-[570px] h-36 overflow-hidden">
      <div className="relative flex gap-3 items-center p-2 w-full h-full">
        <div
          className={cn(
            "min-w-[90px] h-full min-h-[90px] relative",
            data.type === "userEpisode" && "aspect-[10/15]",
            data.type === "episode" && "aspect-square"
          )}
        >
          <Image
            src={data.imgUrl}
            alt={data.name}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full flex flex-col justify-between gap-4 h-full min-h-[90px]">
          <div className="flex w-full justify-between items-start">
            <div className="space-y-2">
              <h6 className="text-sm font-semibold lg:text-base lg:font-bold">
                {data.name}
              </h6>
              <div className="flex gap-2 items-center text-base font-medium">
                <Image
                  src="/svg/episode.svg"
                  width={24}
                  height={24}
                  alt="episode"
                />
                قسمت {data.episode}
              </div>
            </div>
            <div className="w-[31.25%] h-full self-start flex justify-end items-start font-medium text-sm text-[#979CA6]">
              {data.time}
            </div>
          </div>
          {data.type === "userEpisode" && (
            <div className="flex gap-6 ">
              <p className="flex items-center gap-[6px]">
                <Image
                  src="/images/mal.png"
                  alt="myanimelist"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                {data.malScore}
              </p>
              <p className="flex items-center gap-[6px]">
                <Image
                  src="/images/anilist.png"
                  alt="anilist"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                {data.aniScore}%
              </p>
            </div>
          )}
          <div>
            {data.type === "episode" ? (
              <div className="flex gap-2">
                {data.tags?.map((tag) => (
                  <div
                    className="bg-[#242F3D] flex items-center justify-center text-xs sm:text-sm px-2 py-1"
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex gap-3">
                <Button className="h-9 text-base font-semibold bg-gray-700">
                  ادامه تماشا
                </Button>
                <Button
                  className="h-9 text-base font-semibold"
                  variant="outline"
                >
                  بیشتر
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Border for Progress */}
      {data.type === "userEpisode" && (
        <div
          style={{ width: `${(data.watched! / data.episodes!) * 100}%` }}
          className="absolute bottom-0 ltr:left-0 rtl:right-0 h-1 rounded-lg bg-primary-500"
        />
      )}
    </div>
  );
}
