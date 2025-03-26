import { statusMapping, typeMapping } from "@/constants";
import { AnimeFragmentFragment } from "@/generated/graphql";
import { generateSlug } from "@/lib/utils";
import { Anime } from "@/types/types";
import Link from "next/link";
import React from "react";

export default function Details({ anime }: { anime: AnimeFragmentFragment }) {
  const animeType = typeMapping[anime.dic_types!] || anime.dic_types;
  const animeStatus = statusMapping[anime.dic_status!] || anime.dic_status;

  const seasons: Record<"winter" | "spring" | "summer" | "fall", string> = {
    winter: "زمستان",
    spring: "بهار",
    summer: "تابستان",
    fall: "پاییز",
  };
  const formatDetails = (value: string) => {
    if (typeof value === "string") {
      // Format date (YYYY-MM-DD HH:mm:ss -> YYYY-MM-DD)
      if (value.match(/^\d{4}-\d{2}-\d{2}/)) {
        return { value: value.split(" ")[0] };
      }

      // Convert season@year format
      if (value.includes("@")) {
        const [year, season] = value.split("@");

        // Type assertion to tell TypeScript that season is a valid key
        if (season in seasons) {
          return {
            value: `${seasons[season as keyof typeof seasons]} ${year}`,
          };
        }
      }
    }
    return value;
  };
  const seasonYear = formatDetails(anime.season_year!);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">نوع اثر</h6>
          <p className="text-sm text-primary-500">{animeType}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تعداد قسمت‌ها</h6>
          <p className="text-sm text-primary-500">{anime.dic_episodes}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">وضعیت</h6>
          <p className="text-sm text-primary-500">{animeStatus}</p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">
            مدت زمان هر قسمت
          </h6>
          <p className="text-sm text-primary-500">{anime.dic_duration} دقیقه</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تاریخ شروع</h6>
          <p className="text-sm text-primary-500">
            {typeof anime.dic_aired_from === "string"
              ? anime.dic_aired_from
              : "نامشخص"}
          </p>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">تاریخ پایان</h6>
          <p className="text-sm text-primary-500">
            {typeof anime.dic_aired_to === "string"
              ? anime.dic_aired_to
              : "نامشخص"}
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="w-full rounded-lg flex flex-col gap-[10px]">
          <h6 className="text-sm font-medium text-[#979CA6]">فصل پخش</h6>
          <p className="text-sm text-primary-500">
            {typeof seasonYear === "string" ? seasonYear : seasonYear.value}
          </p>
        </div>
      </div>
      {/* <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">استودیو</h6>
        <p className="text-base font-bold text-white">{anime.}</p>
      </div> */}
      <div className="w-full rounded-lg flex flex-col gap-2">
        <h6 className="text-sm font-medium text-[#979CA6]">ژانر</h6>
        <div className="flex gap-2 items-center">
          {anime.genres.map((genre) => (
            <Link
              href={`/anime/genre/${genre.id}/${generateSlug(genre.name_en!)}`}
              className="flex justify-center items-center px-[6px] py-2 rounded border border-[hsla(215,20%,65%,0.24)]"
              key={genre.id}
            >
              <p className="text-[11px] font-medium">{genre.name_fa}</p>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="w-full rounded-lg flex flex-col gap-2">
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
      </div> */}
      {/* <div className="w-full rounded-lg flex flex-col gap-2">
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
      </div> */}
    </div>
  );
}
