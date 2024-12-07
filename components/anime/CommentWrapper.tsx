"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReplyWrapper from "./ReplyWrapper";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CommentsFragmentFragment, RepliesFragmentFragment } from "@/generated/graphql";

export default function CommentWrapper({ comment }: { comment: CommentsFragmentFragment }) {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative rounded-lg bg-[#17212B]">
      <div
        className={cn(
          "flex flex-col p-3 gap-3",
          comment.spoil && blur && "blur"
        )}
      >
        <div className="rounded-lg flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="relative size-10">
                <Image
                  // src={comment.user?.avatar ? "https://dev-api.alplayer.ir/"+comment.user?.avatar : "/svg/imageloader.svg"}
                  src={"/svg/imageloader.svg"}
                  alt={comment.user?.name!}
                  fill
                  className="object-cover object-center rounded-full"
                />
              </div>
              <p className="text-base font-medium">{comment.user?.name}</p>
            </div>
            <div className="size-6 flex justify-center items-center">
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
          <div>
            <p className="text-base font-normal">{comment.body}</p>
          </div>
          <div className="flex justify-between items-center text-[#979CA6]">
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center size-5">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66659 10.25H13.3333M6.66659 6.08333H9.99992"
                    stroke="#979CA6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.0823 14.833C3.99888 14.7264 3.18725 14.401 2.64294 13.8567C1.66663 12.8804 1.66663 11.309 1.66663 8.16634V7.74967C1.66663 4.60698 1.66663 3.03563 2.64294 2.05932C3.61925 1.08301 5.1906 1.08301 8.33329 1.08301H11.6666C14.8093 1.08301 16.3807 1.08301 17.357 2.05932C18.3333 3.03563 18.3333 4.60698 18.3333 7.74967V8.16634C18.3333 11.309 18.3333 12.8804 17.357 13.8567C16.3807 14.833 14.8093 14.833 11.6666 14.833C11.1996 14.8434 10.8276 14.879 10.4621 14.9622C9.46348 15.1921 8.53873 15.7031 7.62485 16.1487C6.3227 16.7837 5.67162 17.1012 5.26304 16.8039C4.48137 16.2218 5.24541 14.4179 5.41663 13.583"
                    stroke="#979CA6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">پاسخ دادن</p>
            </div>
            <div>
              <p dir="ltr" className="text-sm font-normal">
                {comment.created_at}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {comment.replies?.map((reply : RepliesFragmentFragment) => (
            <ReplyWrapper
              comment={reply}
              repliesTo={{name:comment.user?.name! , avatar: comment.user?.avatar || "/images/frieren/frieren.webp"}}
              key={reply.id}
            />
          ))}
          <div className="flex gap-2 text-primary-500">
            <div className="flex items-center justify-center size-6">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 1V3.07692C17 5.07786 17 6.07833 16.8547 6.91545C16.0547 11.5235 12.0934 15.1376 7.04264 15.8674C6.12509 16 4.19318 16 2 16"
                  stroke="#EB1187"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L1.70711 16.7071C1.37377 16.3738 1.20711 16.2071 1.20711 16C1.20711 15.7929 1.37377 15.6262 1.70711 15.2929L4 13"
                  stroke="#EB1187"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-base font-medium">نمایش پاسخ‌های بیشتر</p>
          </div>
        </div>
      </div>
      {comment.spoil && blur && (
        <div className="absolute inset-0">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-3 items-center w-1/2">
              <p className="text-base font-medium leading-7 text-center">
                این کامنت حاوی اسپویل است و بخش‌هایی از داستان را لو می‌دهد.
              </p>
              <Button
                variant="outline"
                className="text-sm font-medium h-9"
                onClick={() => setBlur(false)}
              >
                نمایش دیدگاه
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
