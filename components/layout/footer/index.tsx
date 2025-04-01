import React from "react";
import Logo from "../header/Logo";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 px-6 lg:px-16 pt-24 pb-4">
      <div className="relative bottom-0 w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:w-2/3 gap-2 justify-start items-start">
          <Logo className="text-primary-500" />
          <p className="text-sm text-[#979CA6]">
            دانلود انیمه با زیرنویس فارسی چسبیده بدون سانسور با لینک مستقیم به
            همراه اپلیکیشن اندروید و ویندوز, دانلود انیمه ایسکای و فانتزی, ایچی,
            یوری, یائویی
          </p>
        </div>
        <Separator className="hidden lg:block h-28" orientation="vertical" />
        <div className="flex gap-4 w-full justify-center items-center">
          <InstagramLogoIcon className="size-5" />
          <InstagramLogoIcon className="size-5" />
          <InstagramLogoIcon className="size-5" />
          <InstagramLogoIcon className="size-5" />
        </div>
        <Separator className="hidden lg:block h-28" orientation="vertical" />
        <Separator className="block lg:hidden w-full" orientation="horizontal" />

        <div className="flex flex-col gap-2 w-full items-start lg:w-1/3">
          <p className="font-semibold">لینک‌های مهم</p>
          <ul className="list-inside list-disc">
            <li>
              <Link href="/" className="text-sm text-[#979CA6]">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/anime/genre" className="text-sm text-[#979CA6]">
                ژانرها
              </Link>
            </li>
          </ul>
        </div>
        <Separator className="hidden lg:block h-28" orientation="vertical" />

        <div className="hidden lg:flex justify-center lg:w-1/3 items-start">
          <Button>پشتیبانی</Button>
        </div>
        <Separator className="block lg:hidden w-full" orientation="horizontal" />

      </div>
      <div className="text-center text-xs text-[#979CA6]">
        &#169; تمامی حقوق این سایت متعلق به انیمه‌لیست می باشد.
      </div>
    </footer>
  );
}
