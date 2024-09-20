import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Subtitle } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function SubtitleCard({ data }: { data: Subtitle }) {
  return (
    <div className="flex justify-between items-center rounded-lg p-2 lg:p-3 bg-[#17212B]">
      <div className="flex gap-4">
        <div className="relative size-16 lg:size-24">
          <Image
            src={data.episode.preview}
            alt={data.anime.title}
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold lg:text-base">{data.anime.title}</h3>
          <div className="flex gap-1">
            {data.translators.map((translator, i) => (
              <div
                className="text-[#979CA6] text-xs font-normal lg:text-sm flex gap-1 items-center"
                key={translator.id}
              >
                {translator.name}
                {data.translators.length > i + 1 && (
                  <Separator orientation="vertical" className="h-[9px]" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm lg:text-base font-semibold">
            قسمت {data.episode.episodeNumber}
          </p>
        </div>
      </div>
      <div className="flex gap-2 lg:flex-col">
        <Button className="bg-[#242F3D] lg:bg-background size-10 p-2 lg:p-4 rounded-md flex gap-1 lg:w-full">
          <div className="size-6 lg:size-8 flex justify-center items-center">
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 13.5C17 15.982 16.482 16.5 14 16.5H4C1.518 16.5 1 15.982 1 13.5"
                stroke="white"
                strokeWidth="1.5"
                stroke-Linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-base hidden lg:block">دانلود زیرنویس</p>
        </Button>
        <Button className="bg-[#242F3D] lg:bg-background size-10 p-2 lg:p-4 rounded-md flex gap-1 lg:w-full ">
          <div className="size-6 lg:size-8 flex justify-center items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8998 1C14.5494 1.00657 16.4606 1.09617 17.6819 2.31754C19 3.63559 19 5.75698 19 9.99974C19 14.2425 19 16.3639 17.6819 17.6819C16.3639 19 14.2425 19 9.99974 19C5.75698 19 3.6356 19 2.31754 17.6819C1.09618 16.4606 1.00657 14.5494 1 10.8998"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.929546 2.03235C0.635537 1.74058 0.633724 1.26571 0.925497 0.971698C1.21727 0.677689 1.69214 0.675876 1.98615 0.967649L0.929546 2.03235ZM7.5283 6.46765C7.82231 6.75942 7.82412 7.23429 7.53235 7.5283C7.24058 7.82231 6.76571 7.82412 6.4717 7.53235L7.5283 6.46765ZM1.97151 1.22706L2.1023 1.96557L1.97151 1.22706ZM6.00007 0.25C6.41428 0.250036 6.75004 0.585852 6.75 1.00007C6.74996 1.41428 6.41415 1.75004 5.99993 1.75L6.00007 0.25ZM1.75 6C1.75 6.41421 1.41421 6.75 1 6.75C0.585786 6.75 0.25 6.41421 0.25 6H1.75ZM1.22706 1.97175L0.488525 1.84109V1.84109L1.22706 1.97175ZM1.98615 0.967649L7.5283 6.46765L6.4717 7.53235L0.929546 2.03235L1.98615 0.967649ZM1.84072 0.488554C2.54161 0.364429 3.59845 0.30696 4.44196 0.278713C4.87178 0.26432 5.26039 0.257151 5.5415 0.253575C5.68216 0.251785 5.79618 0.250892 5.87531 0.250446C5.91489 0.250222 5.94575 0.250111 5.96688 0.250055C5.97745 0.250028 5.98558 0.250014 5.99116 0.250007C5.99394 0.250003 5.99609 0.250002 5.99758 0.250001C5.99832 0.25 5.99891 0.25 5.99932 0.25C5.99953 0.25 5.99969 0.25 5.99982 0.25C5.99988 0.25 5.99994 0.25 5.99997 0.25C6.00002 0.25 6.00007 0.25 6 1C5.99993 1.75 5.99995 1.75 5.99996 1.75C5.99995 1.75 5.99995 1.75 5.99993 1.75C5.99989 1.75 5.9998 1.75 5.99968 1.75C5.99943 1.75 5.99901 1.75 5.99843 1.75C5.99727 1.75 5.99546 1.75 5.99302 1.75001C5.98812 1.75001 5.98069 1.75002 5.97083 1.75005C5.95113 1.7501 5.92177 1.75021 5.88377 1.75042C5.80777 1.75085 5.69732 1.75171 5.56058 1.75345C5.28688 1.75694 4.90902 1.76391 4.49216 1.77787C3.64229 1.80633 2.68489 1.86239 2.1023 1.96557L1.84072 0.488554ZM1 6C0.25 6 0.25 5.99996 0.25 5.99991C0.25 5.99988 0.25 5.99981 0.25 5.99975C0.25 5.99963 0.25 5.99946 0.25 5.99926C0.25 5.99884 0.25 5.99826 0.250001 5.99752C0.250002 5.99603 0.250004 5.99388 0.250008 5.99109C0.250015 5.98552 0.25003 5.97739 0.250058 5.96682C0.250115 5.9457 0.250229 5.91483 0.250456 5.87526C0.250908 5.79614 0.25181 5.68213 0.253609 5.54148C0.257204 5.2604 0.264395 4.87182 0.278803 4.44203C0.307079 3.59857 0.364549 2.54186 0.488525 1.84109L1.96559 2.1024C1.86251 2.68506 1.80645 3.64247 1.77796 4.49229C1.76399 4.90913 1.75699 5.28697 1.75349 5.56066C1.75174 5.69739 1.75087 5.80784 1.75043 5.88384C1.75021 5.92183 1.75011 5.95119 1.75005 5.9709C1.75003 5.98075 1.75001 5.98819 1.75001 5.99308C1.75 5.99553 1.75 5.99734 1.75 5.9985C1.75 5.99908 1.75 5.99949 1.75 5.99974C1.75 5.99987 1.75 5.99995 1.75 6C1.75 6.00002 1.75 6.00002 1.75 6.00003C1.75 6.00002 1.75 6 1 6ZM2.1023 1.96557C2.05181 1.97451 2.02436 1.99342 2.00892 2.00886C1.99347 2.02432 1.97454 2.05182 1.96559 2.1024L0.488525 1.84109C0.612608 1.13972 1.13914 0.612803 1.84072 0.488554L2.1023 1.96557Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-base hidden lg:block">ورود به صفحه انیمه</p>
        </Button>
      </div>
    </div>
  );
}
