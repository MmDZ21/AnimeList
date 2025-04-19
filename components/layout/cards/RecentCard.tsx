import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { UserAnime } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function RecentCard({
  data,
  className,
}: {
  data: UserAnime;
  className?: string;
}) {
  return (
    <div className="flex items-center w-full gap-4 h-[128px]">
      <Image
        src={data.image}
        alt={data.title}
        width={86}
        height={128}
        className="object-cover object-center rounded"
      />
      <div className="flex flex-col w-full justify-between h-full">
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-sm font-bold">{data.title}</h4>
          <div className="flex gap-[6px]">
            <p className="text-sm font-medium">{data.seasonsWatched} فصل</p>
            <Separator className="h-4" orientation="vertical" />
            <p className="text-sm font-medium">{data.episodesWatched} قسمت</p>
          </div>
          <div className="flex gap-[6px]">
            <p className="text-xs font-medium text-[#11EB75]">
              {data.type === "series" ? "سریالی" : "سینمایی"}
            </p>
            <Separator className="h-4" orientation="vertical" />
            {/* <p className="text-xs font-medium text-[#979CA6]">پخش آنلاین</p>
            <Separator className="h-4" orientation="vertical" /> */}
            <p className="text-xs font-medium text-[#979CA6]">به همراه زیرنویس فارسی</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <div className="flex justify-center items-center size-6">
            <svg
              width="6"
              height="20"
              viewBox="0 0 6 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 2.5C4.5 1.67157 3.82843 1 3 1C2.17157 1 1.5 1.67157 1.5 2.5C1.5 3.32843 2.17157 4 3 4C3.82843 4 4.5 3.32843 4.5 2.5Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
              <path
                d="M4.5 10C4.5 9.17157 3.82843 8.5 3 8.5C2.17157 8.5 1.5 9.17157 1.5 10C1.5 10.8284 2.17157 11.5 3 11.5C3.82843 11.5 4.5 10.8284 4.5 10Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
              <path
                d="M4.5 17.5C4.5 16.6716 3.82843 16 3 16C2.17157 16 1.5 16.6716 1.5 17.5C1.5 18.3284 2.17157 19 3 19C3.82843 19 4.5 18.3284 4.5 17.5Z"
                stroke="#979CA6"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center size-6">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4626 1.99415C15.7809 0.349229 13.4404 1.01211 12.0344 2.06801C11.4578 2.50096 11.1696 2.71743 11 2.71743C10.8304 2.71743 10.5422 2.50096 9.96565 2.06801C8.55962 1.01211 6.21909 0.349229 3.53744 1.99415C0.0180686 4.15294 -0.778279 11.2749 7.33953 17.2834C8.88572 18.4278 9.65881 19 11 19C12.3412 19 13.1143 18.4278 14.6605 17.2834C22.7783 11.2749 21.9819 4.15294 18.4626 1.99415Z"
                stroke="#979CA6"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
