import { SubtitlesFragmentFragment } from "@/generated/graphql";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SubtitleWrapper({
  subtitle,
}: {
  subtitle: SubtitlesFragmentFragment;
}) {
  return (
    <div className="w-full flex justify-between items-center bg-[#0E1621] rounded-lg p-2">
      <p className="font-semibold text-base">قسمت {subtitle.from_episode}</p>
      <Button
        asChild
        className="rounded py-1 px-4 gap-1 flex bg-[#17212B] items-center justify-center"
      >
        <Link href={subtitle.link_file || "#"}>
          <div className="size-8 flex justify-center items-center">
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-semibold text-base">دانلود</p>
        </Link>
      </Button>
    </div>
  );
}
