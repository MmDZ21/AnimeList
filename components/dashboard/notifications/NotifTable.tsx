"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { UserNotification } from "@/types/types";
import NotifCard from "@/components/layout/cards/NotifCard";
import { Button } from "@/components/ui/button";

export default function NotifTable({ data }: { data: UserNotification[] }) {
  const [filter, setFilter] = useState<undefined | string>(undefined);
  const types = [
    { value: "all", label: "همه", count: 657 },
    { value: "watching", label: "درحال تماشا", count: 37 },
    { value: "completed", label: "تمام کردم", count: 386 },
    { value: "onHold", label: "متوقف کردم", count: 4 },
    { value: "dropped", label: "بیخیالش شدم", count: 6 },
    { value: "planToWatch", label: "می‌خوام ببینم", count: 222 },
  ];
  return (
    <div className="lg:flex gap-6 hidden">
      <div className="flex flex-col w-1/4 rounded-lg p-4 gap-5 bg-[#17212B]">
        <ul className="flex flex-col">
          {types.map((type) => (
            <li
              className={cn(
                "p-2 flex items-center justify-between w-full rounded-lg cursor-pointer",
                filter === type.value && "bg-background",
                type.value === "all" && filter === undefined && "bg-background"
              )}
              key={type.value}
              onClick={() =>
                type.value === "all"
                  ? setFilter(undefined)
                  : setFilter(type.value)
              }
            >
              <p>{type.label}</p>
              <p>{type.count}</p>
            </li>
          ))}
        </ul>
        <Button className="text-base font-medium">
          تغییر همه به خوانده شده
        </Button>
      </div>
      <div className="flex flex-col w-3/4 gap-4">
        {data.map((notif, i) => (
          <NotifCard data={notif} key={i} />
        ))}
      </div>
    </div>
  );
}
