import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { cn, generateSlug, getImagePath } from "@/lib/utils";
import { RecommendationsFragmentFragment } from "@/generated/graphql";
import Link from "next/link";

export default function SimilarAnimeWrapper({
  anime,
  className,
  imageClassName,
  actions = true,
  overlay = false,
  priority,
}: {
  anime: RecommendationsFragmentFragment;
  className?: string;
  imageClassName?: string;
  actions?: boolean;
  overlay?: boolean;
  priority?: boolean;
}) {

  return (
    <Link className={cn("w-full h-[344px] flex flex-col gap-2", className)} href={`/anime/${anime.id}/${generateSlug(anime.dic_title!)}`}>
      <div className={cn("w-full h-[290px] relative", imageClassName)}>
        <Image
          src={getImagePath(anime.mal_image_url, anime.anilist_image_url)}
          alt={anime.dic_title || "انیمه"}
          fill
          priority={priority}
          className="object-cover object-top rounded"
        />
        {overlay && (
          <div className="absolute bg-[#182533]/95 inset-0 rounded p-3 flex flex-col gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h2 className="font-bold text-lg text-white">{anime.dic_title}</h2>
            <div className="flex gap-1 items-center">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.158 8.78374C16.386 9.10348 16.5 9.26335 16.5 9.5C16.5 9.73665 16.386 9.89652 16.158 10.2163C15.1334 11.6529 12.5169 14.75 9 14.75C5.48308 14.75 2.86657 11.6529 1.84203 10.2163C1.61401 9.89652 1.5 9.73665 1.5 9.5C1.5 9.26335 1.61401 9.10348 1.84203 8.78374C2.86657 7.34708 5.48308 4.25 9 4.25C12.5169 4.25 15.1334 7.34708 16.158 8.78374Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.25 9.5C11.25 8.25736 10.2426 7.25 9 7.25C7.75736 7.25 6.75 8.25736 6.75 9.5C6.75 10.7426 7.75736 11.75 9 11.75C10.2426 11.75 11.25 10.7426 11.25 9.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              <p className="text-sm font-normal">164500</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_732_103)">
                    <path
                      d="M10.2957 2.58313L11.6156 5.24466C11.7956 5.61515 12.2755 5.97053 12.6805 6.03858L15.0727 6.43932C16.6025 6.6964 16.9625 7.81544 15.8601 8.91937L14.0003 10.7945C13.6854 11.1121 13.5129 11.7246 13.6104 12.1631L14.1428 14.4844C14.5628 16.3217 13.5954 17.0325 11.983 16.0722L9.74079 14.7339C9.33583 14.4919 8.66841 14.4919 8.25595 14.7339L6.0137 16.0722C4.40888 17.0325 3.43399 16.3142 3.85394 14.4844L4.38638 12.1631C4.48387 11.7246 4.31139 11.1121 3.99642 10.7945L2.13663 8.91937C1.04175 7.81544 1.39421 6.6964 2.92404 6.43932L5.31628 6.03858C5.71373 5.97053 6.19368 5.61515 6.37366 5.24466L7.69352 2.58313C8.41344 1.13896 9.58331 1.13896 10.2957 2.58313Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_732_103">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="2"
                    fill="url(#pattern0_412_1008)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_412_1008"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_412_1008"
                        transform="scale(0.00390625)"
                      />
                    </pattern>
                    <image
                      id="image0_412_1008"
                      width="256"
                      height="256"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <p className="text-sm font-bold">{anime.dic_score || 0}</p>
              </div>
              <div className="flex gap-1 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="20"
                    height="20"
                    rx="2"
                    fill="url(#pattern0_412_1005)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_412_1005"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_412_1005"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <image
                      id="image0_412_1005"
                      width="512"
                      height="512"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <p className="text-sm font-bold">
                  {anime.anilist_score + "%" || "0%"}
                </p>
              </div>
            </div>
            <p className="font-normal text-sm">تعداد قسمت‌ها: {anime.dic_episodes || "نامشخص"}</p>
            <p className="font-normal text-sm">آخرین بروزرسانی: {anime.dic_last_update || "نامشخص"}</p>
            <div
              className="text-sm font-medium line-clamp-[8]"
              dangerouslySetInnerHTML={{ __html: anime.dic_body_normalized! }}
            ></div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-start items-center">
          <h3
            dir="ltr"
            className="text-ellipsis whitespace-nowrap overflow-hidden text-start lg:font-bold"
          >
            {anime.dic_title}
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            {/* <p className="text-[#979CA6] text-xs font-medium">پخش آنلاین</p>
            <Separator
              orientation="vertical"
              className="h-4 bg-[hsla(215,20%,65%,0.24)] opacity-85"
            /> */}
            <p className="text-[#979CA6] text-xs font-medium">به همراه زیرنویس فارسی</p>
          </div>
          {actions && (
            <div className="size-5 flex items-center justify-end">
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
          )}
        </div>
      </div>
    </Link>
  );
}
