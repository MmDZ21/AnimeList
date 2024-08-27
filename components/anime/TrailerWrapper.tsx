import { Trailer } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function TrailerWrapper({ trailer }: { trailer: Trailer }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative aspect-video">
        <Image
          src={trailer.preview}
          fill
          className="object-cover rounded"
          alt={trailer.title}
        />
      </div>
      <div>
        <p dir="ltr" className="text-[#A1A1AA] text-xs font-medium">
          {trailer.title}
        </p>
      </div>
    </div>
  );
}
