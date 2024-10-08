"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog-regular";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SubscriptionBtn() {
  const { t } = useTranslation("navbar"); // Assume 'navbar' is the namespace
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10 px-[10px] text-base font-semibold flex gap-2 items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1856_6087"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1856_6087)">
              <path
                d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                fill="white"
              />
            </g>
          </svg>
          {t("subscription")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[1000px] p-6 bg-[#17212B] border-none sm:rounded-xl">
        <DialogHeader className="sm:text-start text-base text-primary-500 font-bold">
          خرید اشتراک ویژه
        </DialogHeader>
        <div className="flex justify-between">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">
                اشتراک ویژه‌ خودت رو انتخاب کن
              </h2>
              <p className="text-sm font-medium">
                دسترسی کامل به آرشیو انیمه‌ها، فیلم‌ها، سریال‌ها و دراماهای سایت
                انیمه‌لیست
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <p className="text-sm font-medium min-w-fit">
                به اضافه‌ی کلی ویژگی دیگه
              </p>
              <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-[10px] items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
                    stroke="#11EB75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium">تماشای آفلاین</p>
              </div>
              <div className="flex gap-[10px] items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
                    stroke="#11EB75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium">
                  امکان استفاده از پخش آنلاین
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
                    stroke="#11EB75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium">
                  دانلود با ترافیک مصرفی نیم بها
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
                    stroke="#11EB75"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium">
                  سرعت بالا و بدون محدودیت در دانلود
                </p>
              </div>
            </div>
            <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
            <div>
              <p className="text-base font-medium">
                راستی اگه کد تخفیف هم داری همین‌جا وارد کن که یه تخفیف خوب ازمون
                بگیری {`:)`}
              </p>
            </div>
            <div className="relative">
              <Input
                placeholder="کد تخفیف"
                className="border py-7 dark:placeholder:text-[#979CA6] dark:border-[hsla(215,20%,65%,0.24)] dark:bg-[#182533]"
              />
              <Button
                variant="secondary"
                className="absolute dark:bg-[#17212B] top-1 end-1 px-4 py-[14px] rounded-md"
              >
                اعمال کد تخفیف
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-[350px] h-[400px] rounded-2xl bg-background">
              <div className="relative w-full h-2/3 top-0 z-40">
                <Image
                  src="/images/blogs/b2.webp"
                  alt="subscription"
                  fill
                  className="object-cover object-center rounded-2xl"
                />
                <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-background to-background/0 "></div>
              </div>
              <div className="flex flex-col gap-3 items-center px-6 rounded-md -mt-10 z-50">
                <h3 className="text-2xl font-bold z-50">۳۰ روزه</h3>
                <h4 className="text-[32px] font-black z-50">۶۰،۰۰۰ تومان</h4>
                <Button className="flex gap-1 h-12 w-full z-50">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.01819 10.3058C3.63013 9.23176 3.4361 8.69476 3.51884 8.35065C3.60933 7.97427 3.877 7.68084 4.21913 7.58296C4.53193 7.49346 5.01853 7.70973 5.99173 8.14227C6.85253 8.52486 7.28293 8.71615 7.68732 8.70551C8.13257 8.69379 8.56088 8.51524 8.9016 8.19931C9.21105 7.91237 9.41861 7.45513 9.83373 6.54064L10.7486 4.52525C11.5128 2.84175 11.8949 2 12.5 2C13.1051 2 13.4872 2.84175 14.2514 4.52525L15.1663 6.54064C15.5814 7.45513 15.789 7.91237 16.0984 8.19931C16.4391 8.51524 16.8674 8.69379 17.3127 8.70551C17.7171 8.71615 18.1475 8.52486 19.0083 8.14227C19.9815 7.70973 20.4681 7.49346 20.7809 7.58296C21.123 7.68084 21.3907 7.97427 21.4812 8.35065C21.5639 8.69476 21.3699 9.23176 20.9818 10.3057L19.3138 14.9222C18.6002 16.897 18.2435 17.8844 17.4968 18.4422C16.7502 19 15.7854 19 13.8558 19H11.1442C9.21459 19 8.24977 19 7.50315 18.4422C6.75654 17.8844 6.39977 16.897 5.68622 14.9222L4.01819 10.3058Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.5 14H12.509"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 22H17.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p>خرید اشتراک</p>
                </Button>
              </div>
            </div>
            <Tabs defaultValue="30">
              <TabsList className="rounded-lg h-[56px] w-full gap-[10px]">
                <TabsTrigger
                  value="30"
                  className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
                >
                  ۳۰ روزه
                </TabsTrigger>
                <TabsTrigger
                  value="60"
                  className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
                >
                  ۶۰ روزه
                </TabsTrigger>
                <TabsTrigger
                  value="90"
                  className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
                >
                  ۹۰ روزه
                </TabsTrigger>
              </TabsList>
              {/* <TabsContent value="30"></TabsContent>
              <TabsContent value="60"></TabsContent>
              <TabsContent value="90"></TabsContent> */}
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
