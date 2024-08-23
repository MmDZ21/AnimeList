import { Producer } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function ProducerWrapper({ producer }: { producer: Producer }) {
  return (
    <div className="bg-[#17212B] w-full flex p-2 justify-between rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="relative aspect-square size-[72px]">
          <Image
            src={producer.image}
            alt={producer.name}
            fill
            className="object-cover object-center rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-base font-bold">{producer.name}</h5>
          <p className="text-sm font-medium text-[#979CA6]">{producer.role}</p>
        </div>
      </div>
    </div>
  );
}
