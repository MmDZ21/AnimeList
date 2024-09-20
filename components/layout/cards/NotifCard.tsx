import React from "react";
import { Subtitle, UserNotification } from "@/types/types";
import Image from "next/image";

export default function NotifCard({ data }: { data: UserNotification }) {
  return (
    <div className="flex gap-2 w-full items-center rounded-lg p-2 bg-[#17212B]">
      <div className="relative w-16 h-16">
        <Image
          src={data.image}
          alt="اطلاعیه"
          fill
          className="rounded-md object-center object-cover"
        />
      </div>
      <div className="w-full h-16 flex flex-col justify-between lg:flex-row lg:items-center px-2">
        <h4 className="text-sm font-normal">{data.body}</h4>
        <p className="text-sm font-normal opacity-65 text-end">
          {data.createdAt} دقیقه پیش
        </p>
      </div>
    </div>
  );
}
