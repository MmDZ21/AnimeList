import { Separator } from "@/components/ui/separator";
import { statusMapping, typeMapping } from "@/constants";
import { Anime } from "@/generated/graphql";
import React from "react";



export default function AdditionalInfo({ anime }: { anime: Anime }) {
  const details = [
    { label: "نوع اثر", value: typeMapping[anime.dic_types!] || anime.dic_types },
    { label: "تعداد قسمت‌ها", value: anime.dic_episodes },
    { label: "مدت زمان هر قسمت", value: anime.dic_duration },
    { label: "وضعیت", value: statusMapping[anime.dic_status!] || anime.dic_status },
    { label: "تاریخ شروع", value: anime.dic_aired_from },
    { label: "تاریخ پایان", value: anime.dic_aired_to },
    { label: "فصل پخش", value: anime.season_year },
  ];
  const seasons: Record<"winter" | "spring" | "summer" | "fall", string> = {
    winter: "زمستان",
    spring: "بهار",
    summer: "تابستان",
    fall: "پاییز",
  };

  const formattedDetails = details.map(({ label, value }) => {
    if (!value) return { label, value: null };

    if (typeof value === "string") {
      // Format date (YYYY-MM-DD HH:mm:ss -> YYYY-MM-DD)
      if (value.match(/^\d{4}-\d{2}-\d{2}/)) {
        return { label, value: value.split(" ")[0] };
      }

      // Convert season@year format
      if (value.includes("@")) {
        const [year, season] = value.split("@");

        // Type assertion to tell TypeScript that season is a valid key
        if (season in seasons) {
          return {
            label,
            value: `${seasons[season as keyof typeof seasons]} ${year}`,
          };
        }
      }
    }

    return { label, value };
  });
  return (
    <div className="w-full px-[10px] py-4 bg-[#17212B] flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h6 className="text-base font-semibold">اطلاعات انیمه</h6>
        <div className="grid grid-cols-5 gap-4">
          {formattedDetails.map((detail) => (
            <div
              key={detail.label}
              className="bg-background rounded-lg flex flex-col justify-center gap-2 p-2"
            >
              <p className="text-sm font-bold ">{detail.label}</p>
              <p className="text-sm text-primary-500">
                {detail.value || "نامشخص"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="text-base font-semibold">اطلاعات تکمیلی</h6>
        <div className="w-full">
          <div className="bg-background rounded-lg flex flex-col justify-center gap-2 p-2 w-fit">
            <p className="text-sm font-bold">ژانرها</p>
            <div className="flex gap-4">
              {anime.genres.map((genre, i) => (
                <div key={genre.id} className=" flex gap-4">
                  {i !== 0 && (
                    <Separator orientation="vertical" className="h-4" />
                  )}
                  <p className="text-sm text-primary-500">{genre.name_fa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
