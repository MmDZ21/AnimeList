import { Episode } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function EpisodeWrapper({
  episode,
  i,
}: {
  episode: Episode;
  i: number;
}) {
  return (
    <div className="w-full flex gap-4 h-[100px]">
      <div className="relative h-full aspect-video">
        <Image
          src={episode.preview}
          fill
          className="object-cover rounded"
          alt={episode.episodeTitle}
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-1 items-start">
          <p className="text-xs font-medium text-[#979CA6]">
            {episode.animeTitle}
          </p>
          <div className="text-sm font-bold text-white flex flex-row-reverse justify-end gap-1">
            <p dir="ltr">{i + 1}.</p>
            <p dir="ltr" className="text-ellipsis overflow-hidden text-nowrap">
              {episode.episodeTitle}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[#979CA6] text-xs font-medium">پخش آنلاین</p>
            <Separator
              orientation="vertical"
              className="h-4 bg-[hsla(215,20%,65%,0.24)] opacity-85"
            />
            <p className="text-[#979CA6] text-xs font-medium">زیرنویس چسبیده</p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Sheet>
            <SheetTrigger>
              <div className="size-6 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11.5L9 1.5M9 11.5C8.29977 11.5 6.99153 9.5057 6.5 9M9 11.5C9.70023 11.5 11.0085 9.5057 11.5 9"
                    stroke="#979CA6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 13.5C17 15.982 16.482 16.5 14 16.5H4C1.518 16.5 1 15.982 1 13.5"
                    stroke="#979CA6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6" side="bottom">
              <SheetHeader>
                <SheetTitle className="flex justify-between">
                  <p>قسمت {i + 1}</p>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
                    <Cross2Icon className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-5">
                {episode.files.map((file) => (
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <div className="flex gap-[10px]">
                      <p>{file.resolution}p</p>
                      <Separator className="h-4" orientation="vertical" />
                      <p>{file.size}MB</p>
                    </div>
                    <div className="bg-[#242F3D] rounded flex justify-center items-center p-2">
                      <div className="size-6 flex justify-center items-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 11.5L9 1.5M9 11.5C8.29977 11.5 6.99153 9.5057 6.5 9M9 11.5C9.70023 11.5 11.0085 9.5057 11.5 9"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17 13.5C17 15.982 16.482 16.5 14 16.5H4C1.518 16.5 1 15.982 1 13.5"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h6 className="text-[#979CA6] text-sm font-medium">زیرنویس</h6>
              <div className="flex justify-between items-center text-sm font-semibold">
                <div className="flex gap-[10px]">
                  <p>مترجم:</p>
                  <p>Shinsekai Yuri</p>
                  <Separator className="h-4" orientation="vertical" />
                  <p>Captain Paran</p>
                </div>
                <div className="bg-[#242F3D] rounded flex justify-center items-center p-2">
                  <div className="size-6 flex justify-center items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11.5L9 1.5M9 11.5C8.29977 11.5 6.99153 9.5057 6.5 9M9 11.5C9.70023 11.5 11.0085 9.5057 11.5 9"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 13.5C17 15.982 16.482 16.5 14 16.5H4C1.518 16.5 1 15.982 1 13.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="size-6 flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}
