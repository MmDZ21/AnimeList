import React from "react";
import { averageScore, watchTime } from "@/lib/utils";
import Bio from "./Bio";
import ActivityStatus from "./ActivityStatus";
import { fetchDashboardData } from "@/actions/fetchDashboardData";

export default async function Dashboard() {
  const data = await fetchDashboardData();
  const user = data.me;

  if (!user) {
    return <p>User not found.</p>;
  }

  const userFavorites = user.favorites.map((fav) => fav.anime);
  const userScores = user.favorites.map((fav) => fav.score);
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
            animeCount={user.favoriteCount}
            animeWatchTime={watchTime(userFavorites)}
            averageScore={averageScore(userScores)}
          />
          <div className="flex flex-col gap-4 w-full py-4">
            <h2 className="text-base font-bold">آخرین زیرنویس‌های اختصاصی</h2>
            <div className="flex flex-col gap-2 w-full">
              {/* {dawn.subtitles.map((sub) => (
                <SubtitleCard data={sub} key={sub.episode.episodeTitle} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}