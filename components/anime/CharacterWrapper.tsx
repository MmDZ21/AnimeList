import { CharacterWithVoice } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function CharacterWrapper({
  characterWithVoice,
}: {
  characterWithVoice: CharacterWithVoice;
}) {
  return (
    <div className="bg-[#17212B] lg:bg-background w-full flex p-2 justify-between rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="relative aspect-square size-[72px]">
          <Image
            src={characterWithVoice.character.image}
            alt={characterWithVoice.character.name}
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-base font-bold">
            {characterWithVoice.character.name}
          </h5>
          <p className="text-sm font-medium text-[#979CA6]">
            {characterWithVoice.character.role === "main" ? "اصلی" : "مکمل"}
          </p>
        </div>
      </div>
      <div dir="ltr" className="flex gap-4 items-center">
        <div className="relative aspect-square size-[72px]">
          <Image
            src={characterWithVoice.voice.image}
            alt={characterWithVoice.voice.name}
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-sm font-medium">
            {characterWithVoice.voice.name}
          </h6>
          <p className="text-xs font-medium text-[#979CA6]">
            {characterWithVoice.voice.language}
          </p>
        </div>
      </div>
    </div>
  );
}