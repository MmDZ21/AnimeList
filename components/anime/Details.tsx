import { AnimeFragmentFragment } from "@/generated/graphql";
import { Anime } from "@/types/types";
import React from "react";

export default function Details({ anime }: { anime: AnimeFragmentFragment }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">نوع اثر</h6>
          <p className="text-base font-bold text-white">{anime.type}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تعداد قسمت‌ها</h6>
          <p className="text-base font-bold text-white">
            {anime.episodesCount}
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">وضعیت</h6>
          <p className="text-base font-bold text-white">{anime.status}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">
            مدت زمان هر قسمت
          </h6>
          <p className="text-base font-bold text-white">
            {anime.episodeTime} دقیقه
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تاریخ شروع</h6>
          <p className="text-base font-bold text-white">{anime.startDate}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تاریخ پایان</h6>
          <p className="text-base font-bold text-white">{anime.endDate}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">منبع اقتباس</h6>
          <p className="text-base font-bold text-white">{anime.source}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">فصل پخش</h6>
          <p className="text-base font-bold text-white">
            {anime.season} {anime.year}
          </p>
        </div>
      </div>
      <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">استودیو</h6>
        <p className="text-base font-bold text-white">{anime.studio}</p>
      </div>
      <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">ژانر</h6>
        <div className="flex gap-2 items-center">
          {anime.genres.map((genre) => (
            <div
              className="flex justify-center items-center px-[6px] py-2 rounded border border-[hsla(215,20%,65%,0.24)]"
              key={genre}
            >
              <p className="text-[11px] font-medium">{genre}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">تم</h6>
        <div className="flex flex-wrap gap-2 items-center">
          {anime.themes.map((theme) => (
            <div
              className="flex justify-center items-center px-[6px] py-2 rounded border border-[hsla(215,20%,65%,0.24)]"
              key={theme}
            >
              <p className="text-[11px] font-medium">{theme}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-primary-500">
            نمایش تم‌های دارای اسپویل
          </p>
        </div>
      </div>
      <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">تهیه‌کننده</h6>
        <div className="flex gap-2 items-center">
          {anime.producers.map((producer) => (
            <div
              className="flex justify-center items-center px-[6px] py-2 rounded border border-[hsla(215,20%,65%,0.24)]"
              key={producer}
            >
              <p className="text-[11px] font-medium">{producer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
