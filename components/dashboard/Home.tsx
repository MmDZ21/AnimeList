import ActivityStatus from "@/components/dashboard/ActivityStatus";
import Bio from "@/components/dashboard/Bio";
import React from "react";
import { dawn } from "@/constants";
import SubtitleCard from "@/components/layout/cards/SubtitleCard";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-2/5">
          <Bio
            bio="فریرن قهرمان مجموعهٔ «فریرن: فراتر از آنسوی سفر» و استاد فرن است. او جادوگر گروه قهرمان بود و در یک سفر ۱۰ ساله برای شکست دادن پادشاه شیطان در کنار قهرمان هیمل، جنگجو آیزن و کشیش هیتر سفر کرد."
            editable
          />
        </div>
        <div className="lg:w-3/5">
          <ActivityStatus
            animeCount={435}
            animeWatchTime={168}
            averageScore={82.5}
          />
          <div className="flex flex-col gap-4 w-full py-4">
            <h2 className="text-base font-bold">آخرین زیرنویس‌های اختصاصی</h2>
            <div className="flex flex-col gap-2 w-full">
              {dawn.subtitles.map((sub) => (
                <SubtitleCard data={sub} key={sub.episode.episodeTitle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
