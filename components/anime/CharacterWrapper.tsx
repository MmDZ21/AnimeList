import { CharactersFragmentFragment } from "@/generated/graphql";
import { cn } from "@/lib/utils";
import { CharacterWithVoice } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function CharacterWrapper({
  characterWithVoice,
  className,
}: {
  characterWithVoice: CharactersFragmentFragment;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#17212B] lg:bg-background w-full flex p-2 justify-between rounded-lg",
        className
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="relative aspect-square size-[72px]">
          <Image
            src={characterWithVoice.character?.image_url? "https://" + process.env.API_BASE_PATH +characterWithVoice.character.image_url : "/svg/placeholder.svg"}
            alt={characterWithVoice.character?.name!}
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-base font-bold">
            {characterWithVoice.character?.name}
          </h5>
          <p className="text-sm font-medium text-[#979CA6]">
            {characterWithVoice.character_role === "MAIN" ? "اصلی" : "مکمل"}
          </p>
        </div>
      </div>
      <div dir="ltr" className="flex gap-4 items-center">
        <div className="relative aspect-square size-[72px]">
          <Image
            src={characterWithVoice.person?.image_url ? "https://" + process.env.API_BASE_PATH +characterWithVoice.person?.image_url : "/svg/placeholder.svg"}
            alt={characterWithVoice.person?.name!}
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-sm font-medium">
            {characterWithVoice.person?.name}
          </h6>
          <p className="text-xs font-medium text-[#979CA6]">
            {/* {characterWithVoice.voice.language} */}

            ژاپنی
          </p>
        </div>
      </div>
    </div>
  );
}
