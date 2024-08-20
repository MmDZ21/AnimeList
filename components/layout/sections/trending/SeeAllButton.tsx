import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import React from "react";

export default function SeeAllButton() {
  return (
    <Button className="flex gap-2 h-12 bg-[#17212B]">
      <p className="text-base font-semibold">مشاهده لیست کامل انیمه‌ها</p>
      <ArrowLeftIcon className="size-6" />
    </Button>
  );
}
