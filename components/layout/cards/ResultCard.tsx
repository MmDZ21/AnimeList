import { Separator } from "@/components/ui/separator";
import { RecommendationsFragmentFragment } from "@/generated/graphql";
import { getImagePath } from "@/lib/utils";
import { Anime } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function ResultCard({
  data,
  index,
}: {
  data: RecommendationsFragmentFragment;
  index?: number;
}) {
  return (
    <div className="flex gap-4 h-[140px] w-full lg:w-[410px] lg:bg-[#17212B] lg:p-2 lg:rounded-lg lg:h-[160px] ">
      <div className="relative w-[100px] h-full shrink-0">
        <Image
          src={getImagePath(data.mal_image_url, data.anilist_image_url)}
          alt={data.dic_title || "انیمه"}
          fill
          priority={index === 0 ? true : false}
          className="object-cover object-center rounded "
        />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-center">
            <h3
              dir="ltr"
              className="line-clamp-1 text-start text-white text-base font-bold"
            >
              {data.dic_title}
            </h3>
          </div>
          <div className="flex gap-1">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15168 2.79628L10.3249 5.16208C10.4849 5.49141 10.9115 5.8073 11.2714 5.86779L13.3979 6.224C14.7577 6.45251 15.0777 7.44722 14.0978 8.42849L12.4446 10.0953C12.1647 10.3776 12.0114 10.922 12.098 11.3118L12.5713 13.3752C12.9446 15.0084 12.0847 15.6401 10.6515 14.7866L8.6584 13.597C8.29844 13.3819 7.70517 13.3819 7.33854 13.597L5.34543 14.7866C3.91892 15.6401 3.05235 15.0016 3.42564 13.3752L3.89892 11.3118C3.98558 10.922 3.83226 10.3776 3.5523 10.0953L1.89914 8.42849C0.925919 7.44722 1.23922 6.45251 2.59907 6.224L4.7255 5.86779C5.07879 5.8073 5.50541 5.49141 5.66539 5.16208L6.8386 2.79628C7.47853 1.51257 8.51841 1.51257 9.15168 2.79628Z"
                fill="#EB1187"
              />
            </svg>
            <div className="text-xs font-medium">
            {data.al_score || 0} / 10 &nbsp;
              <span className="font-normal text-[#B5B8BF]">{data.al_score_count ? `(${data.al_score_count})` : `(0)`}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-[#979CA6] text-sm font-medium">۱ فصل</p>
            <Separator orientation="vertical" className="h-3" />
            <p className="text-[#979CA6] text-sm font-medium">
              {data.dic_episodes} قسمت
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-xs font-medium text-[#0EA774]">
              {data.__typename === "Anime" ? "سریالی" : "سینمایی"}
            </p>
            <Separator orientation="vertical" className="h-3" />
            <p className="text-xs font-medium text-[#979CA6]">پخش آنلاین</p>
            <Separator orientation="vertical" className="h-3" />
            <p className="text-xs font-medium text-[#979CA6]">زیرنویس چسبیده</p>
          </div>
        </div>
        <div className="flex justify-end lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z"
              stroke="#979CA6"
              strokeWidth="1.5"
            />
            <path
              d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
              stroke="#979CA6"
              strokeWidth="1.5"
            />
            <path
              d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z"
              stroke="#979CA6"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex justify-start p-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z"
            stroke="#979CA6"
            strokeWidth="1.5"
          />
          <path
            d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
            stroke="#979CA6"
            strokeWidth="1.5"
          />
          <path
            d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z"
            stroke="#979CA6"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
