import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { type MediaCardType } from "@/types/types";

export default function MediaCard({
  data,
  className,
}: {
  data: MediaCardType;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-[157px] h-[282px] md:w-52 md:h-96 lg:h-[512px] lg:w-[281px]">
      <div className="flex flex-col gap-2 w-full h-full md:p-2">
        <div className="w-full h-full relative">
          <Image
            src={data.imgUrl}
            alt={data.name}
            fill
            objectFit="cover"
            className="rounded-[4px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-base font-bold">{data.name}</h6>
          <p className="text-xs font-normal text-[#979CA6] lg:text-sm lg:text-white">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
