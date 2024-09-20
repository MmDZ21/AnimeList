import React from "react";

export default function ActivityStatus({
  animeCount,
  animeWatchTime,
  averageScore,
}: {
  animeCount: number;
  animeWatchTime: number;
  averageScore: number;
}) {
  return (
    <div className="bg-[#17212B] rounded-lg w-full overflow-y-hidden">
      <div className="flex justify-between px-6 py-4 w-full lg:px-[120px] lg:py-6">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-xl font-bold text-white">{animeCount}</p>
          <p className="text-sm font-normal text-[#979CA6]">تعداد انیمه‌ها</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-xl font-bold text-white">{animeWatchTime}</p>
          <p className="text-sm font-normal text-[#979CA6]">روز تماشای انیمه</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-xl font-bold text-white">{averageScore}</p>
          <p className="text-sm font-normal text-[#979CA6]">میانگین نمرات</p>
        </div>
      </div>
      <div className="bg-[#242F3D] flex justify-between px-12 pt-1 w-full lg:px-[120px] lg:pt-4">
        <div className="flex flex-col items-center">
          <p className="text-center text-xl font-medium">100</p>
          <div className="w-[1px] h-[9px] bg-[hsla(215,20%,65%,0.24)]" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-xl font-medium">150</p>
          <div className="w-[1px] h-[9px] bg-[hsla(215,20%,65%,0.24)]" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-xl font-medium">200</p>
          <div className="w-[1px] h-[9px] bg-[hsla(215,20%,65%,0.24)]" />
        </div>
      </div>
      <div
        style={{ width: `${(animeWatchTime / 300) * 100}%` }}
        className="h-2 rounded-e-lg bg-primary-500 lg:h-4"
      />
    </div>
  );
}
