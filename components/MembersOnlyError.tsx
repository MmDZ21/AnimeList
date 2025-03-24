import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MembersOnlyError() {
  return <div className="flex flex-col bg-[#17212B] lg:bg-transparent gap-4 w-full lg:w-1/3 justify-center items-center text-center p-4">
    <p className="text-base lg:text-xl font-bold">
    مثل اینکه یه مشکلی پیش اومده دوست عزیز!
    </p>
    <p className="text-sm lg:text-lg font-normal text-[#979CA6]">برای اینکه بتونی از محتوای سایت استفاده کنی و لینک‌های دانلود رو ببینی لازمه که اشتراک داشته باشی.</p>
    <Button asChild>
        <Link href="/dashboard">خرید اشتراک</Link>
    </Button>
  </div>;
}
