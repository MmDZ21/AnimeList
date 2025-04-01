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
import Link from "next/link";

export default function SubscriptionBtn() {
  const { t } = useTranslation("navbar"); // Assume 'navbar' is the namespace
  return (
    // <Dialog>
    //   <DialogTrigger asChild>
        <Button className="h-10 px-[10px] text-base font-semibold flex gap-2 items-center justify-center" asChild>
<div>          <svg
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
          <Link href="/dashboard">
          خرید اشتراک</Link></div>
        </Button>
    //   </DialogTrigger>
    //   <DialogContent className="max-w-[1000px] p-6 bg-[#17212B] border-none sm:rounded-xl">
    //     <Tabs defaultValue="30" className="">
    //       <DialogHeader className="sm:text-start text-base text-primary-500 font-bold">
    //         خرید اشتراک ویژه
    //       </DialogHeader>
    //       <TabsContent value="30">
    //         <div className="flex justify-between">
    //           <div className="flex flex-col gap-7">
    //             <div className="flex flex-col gap-4">
    //               <h2 className="text-2xl font-bold">
    //                 اشتراک ویژه‌ خودت رو انتخاب کن
    //               </h2>
    //               <p className="text-sm font-medium">
    //                 دسترسی کامل به آرشیو انیمه‌ها، فیلم‌ها، سریال‌ها و دراماهای
    //                 سایت انیمه‌لیست
    //               </p>
    //             </div>
    //             <div className="flex gap-[10px] items-center">
    //               <p className="text-sm font-medium min-w-fit">
    //                 به اضافه‌ی کلی ویژگی دیگه
    //               </p>
    //               <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             </div>
    //             <div className="flex flex-col gap-3">
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">تماشای آفلاین</p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   امکان استفاده از پخش آنلاین
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   دانلود با ترافیک مصرفی نیم بها
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   سرعت بالا و بدون محدودیت در دانلود
    //                 </p>
    //               </div>
    //               <div className="h-[25px]"></div>
    //             </div>
    //             <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             <div>
    //               <p className="text-base font-medium">
    //                 راستی اگه کد تخفیف هم داری همین‌جا وارد کن که یه تخفیف خوب
    //                 ازمون بگیری {`:)`}
    //               </p>
    //             </div>
    //             <div className="relative">
    //               <Input
    //                 placeholder="کد تخفیف"
    //                 className="border py-7 dark:placeholder:text-[#979CA6] dark:border-[hsla(215,20%,65%,0.24)] dark:bg-[#242F3D]"
    //               />
    //               <Button
    //                 variant="secondary"
    //                 className="absolute dark:bg-[#17212B] top-1 end-1 px-4 py-[14px] rounded-md"
    //               >
    //                 اعمال کد تخفیف
    //               </Button>
    //             </div>
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <div className="w-[350px] h-[400px] rounded-2xl bg-background">
    //               <div className="relative w-full h-2/3 top-0 z-40">
    //                 <Image
    //                   src="/images/blogs/b2.webp"
    //                   alt="subscription"
    //                   fill
    //                   className="object-cover object-center rounded-2xl"
    //                 />
    //                 <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-background to-background/0 "></div>
    //               </div>
    //               <div className="flex flex-col gap-3 items-center px-6 rounded-md -mt-10 z-50">
    //                 <h3 className="text-2xl font-bold z-50">۳۰ روزه</h3>
    //                 <h4 className="text-[32px] font-black z-50">
    //                   ۶۰،۰۰۰ تومان
    //                 </h4>
    //                 <Button className="flex gap-1 h-12 w-full z-50">
    //                   <svg
    //                     width="25"
    //                     height="24"
    //                     viewBox="0 0 25 24"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       d="M4.01819 10.3058C3.63013 9.23176 3.4361 8.69476 3.51884 8.35065C3.60933 7.97427 3.877 7.68084 4.21913 7.58296C4.53193 7.49346 5.01853 7.70973 5.99173 8.14227C6.85253 8.52486 7.28293 8.71615 7.68732 8.70551C8.13257 8.69379 8.56088 8.51524 8.9016 8.19931C9.21105 7.91237 9.41861 7.45513 9.83373 6.54064L10.7486 4.52525C11.5128 2.84175 11.8949 2 12.5 2C13.1051 2 13.4872 2.84175 14.2514 4.52525L15.1663 6.54064C15.5814 7.45513 15.789 7.91237 16.0984 8.19931C16.4391 8.51524 16.8674 8.69379 17.3127 8.70551C17.7171 8.71615 18.1475 8.52486 19.0083 8.14227C19.9815 7.70973 20.4681 7.49346 20.7809 7.58296C21.123 7.68084 21.3907 7.97427 21.4812 8.35065C21.5639 8.69476 21.3699 9.23176 20.9818 10.3057L19.3138 14.9222C18.6002 16.897 18.2435 17.8844 17.4968 18.4422C16.7502 19 15.7854 19 13.8558 19H11.1442C9.21459 19 8.24977 19 7.50315 18.4422C6.75654 17.8844 6.39977 16.897 5.68622 14.9222L4.01819 10.3058Z"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                     />
    //                     <path
    //                       d="M12.5 14H12.509"
    //                       stroke="white"
    //                       strokeWidth="2"
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                     />
    //                     <path
    //                       d="M7.5 22H17.5"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                       strokeLinecap="round"
    //                     />
    //                   </svg>
    //                   <p>خرید اشتراک</p>
    //                 </Button>
    //               </div>
    //             </div>
    //             {/* <TabsContent value="30"></TabsContent>
    //           <TabsContent value="60"></TabsContent>
    //           <TabsContent value="90"></TabsContent> */}
    //           </div>
    //         </div>
    //       </TabsContent>
    //       <TabsContent value="60">
    //         <div className="flex justify-between">
    //           <div className="flex flex-col gap-7">
    //             <div className="flex flex-col gap-4">
    //               <h2 className="text-2xl font-bold">
    //                 اشتراک ویژه‌ خودت رو انتخاب کن
    //               </h2>
    //               <p className="text-sm font-medium">
    //                 دسترسی کامل به آرشیو انیمه‌ها، فیلم‌ها، سریال‌ها و دراماهای
    //                 سایت انیمه‌لیست
    //               </p>
    //             </div>
    //             <div className="flex gap-[10px] items-center">
    //               <p className="text-sm font-medium min-w-fit">
    //                 به اضافه‌ی کلی ویژگی دیگه
    //               </p>
    //               <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             </div>
    //             <div className="flex flex-col gap-3">
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M4 11.7998V15.7998C4 19.0996 4 20.7496 5.02513 21.7747C6.05025 22.7998 7.70017 22.7998 11 22.7998H13C16.2998 22.7998 17.9497 22.7998 18.9749 21.7747C20 20.7496 20 19.0996 20 15.7998V11.7998"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M3 9.7998C3 9.05211 3 8.67827 3.20096 8.3998C3.33261 8.21738 3.52197 8.0659 3.75 7.96057C4.09808 7.7998 4.56538 7.7998 5.5 7.7998H18.5C19.4346 7.7998 19.9019 7.7998 20.25 7.96057C20.478 8.0659 20.6674 8.21738 20.799 8.3998C21 8.67827 21 9.05211 21 9.7998C21 10.5475 21 10.9213 20.799 11.1998C20.6674 11.3822 20.478 11.5337 20.25 11.639C19.9019 11.7998 19.4346 11.7998 18.5 11.7998H5.5C4.56538 11.7998 4.09808 11.7998 3.75 11.639C3.52197 11.5337 3.33261 11.3822 3.20096 11.1998C3 10.9213 3 10.5475 3 9.7998Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M6 4.58552C6 3.5993 6.79949 2.7998 7.78571 2.7998H8.14286C10.2731 2.7998 12 4.52671 12 6.65695V7.7998H9.21429C7.43908 7.7998 6 6.36072 6 4.58552Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M18 4.58552C18 3.5993 17.2005 2.7998 16.2143 2.7998H15.8571C13.7269 2.7998 12 4.52671 12 6.65695V7.7998H14.7857C16.5609 7.7998 18 6.36072 18 4.58552Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M12 11.7998L12 22.7998"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>

    //                 <p className="text-base font-medium text-[#FFC107]">
    //                   + ۶ روز هدیه
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">تماشای آفلاین</p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   امکان استفاده از پخش آنلاین
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   دانلود با ترافیک مصرفی نیم بها
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   سرعت بالا و بدون محدودیت در دانلود
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             <div>
    //               <p className="text-base font-medium">
    //                 راستی اگه کد تخفیف هم داری همین‌جا وارد کن که یه تخفیف خوب
    //                 ازمون بگیری {`:)`}
    //               </p>
    //             </div>
    //             <div className="relative">
    //               <Input
    //                 placeholder="کد تخفیف"
    //                 className="border py-7 dark:placeholder:text-[#979CA6] dark:border-[hsla(215,20%,65%,0.24)] dark:bg-[#242F3D]"
    //               />
    //               <Button
    //                 variant="secondary"
    //                 className="absolute dark:bg-[#17212B] top-1 end-1 px-4 py-[14px] rounded-md"
    //               >
    //                 اعمال کد تخفیف
    //               </Button>
    //             </div>
    //           </div>
    //           <div className="flex flex-col gap-3">
    //             <div className="w-[350px] h-[400px] rounded-2xl bg-background">
    //               <div className="relative w-full h-2/3 top-0 z-40">
    //                 <Image
    //                   src="/images/blogs/b1.webp"
    //                   alt="subscription"
    //                   fill
    //                   className="object-cover object-center rounded-2xl"
    //                 />
    //                 <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-background to-background/0 "></div>
    //                 <div className="absolute w-full  p-2 flex justify-end">
    //                   <div className="bg-[#FFC107] py-[2px] px-1 rounded-md flex items-center justify-center text-sm font-medium text-[#4D3A02]">
    //                     محبوب‌ترین طرح
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="flex flex-col gap-3 items-center px-6 rounded-md -mt-10 z-50">
    //                 <h3 className="text-2xl font-bold z-50">۶۰ روزه</h3>
    //                 <h4 className="text-[32px] font-black z-50">
    //                   ۱۲۰،۰۰۰ تومان
    //                 </h4>
    //                 <Button className="flex gap-1 h-12 w-full z-50">
    //                   <svg
    //                     width="25"
    //                     height="24"
    //                     viewBox="0 0 25 24"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       d="M4.01819 10.3058C3.63013 9.23176 3.4361 8.69476 3.51884 8.35065C3.60933 7.97427 3.877 7.68084 4.21913 7.58296C4.53193 7.49346 5.01853 7.70973 5.99173 8.14227C6.85253 8.52486 7.28293 8.71615 7.68732 8.70551C8.13257 8.69379 8.56088 8.51524 8.9016 8.19931C9.21105 7.91237 9.41861 7.45513 9.83373 6.54064L10.7486 4.52525C11.5128 2.84175 11.8949 2 12.5 2C13.1051 2 13.4872 2.84175 14.2514 4.52525L15.1663 6.54064C15.5814 7.45513 15.789 7.91237 16.0984 8.19931C16.4391 8.51524 16.8674 8.69379 17.3127 8.70551C17.7171 8.71615 18.1475 8.52486 19.0083 8.14227C19.9815 7.70973 20.4681 7.49346 20.7809 7.58296C21.123 7.68084 21.3907 7.97427 21.4812 8.35065C21.5639 8.69476 21.3699 9.23176 20.9818 10.3057L19.3138 14.9222C18.6002 16.897 18.2435 17.8844 17.4968 18.4422C16.7502 19 15.7854 19 13.8558 19H11.1442C9.21459 19 8.24977 19 7.50315 18.4422C6.75654 17.8844 6.39977 16.897 5.68622 14.9222L4.01819 10.3058Z"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                     />
    //                     <path
    //                       d="M12.5 14H12.509"
    //                       stroke="white"
    //                       strokeWidth="2"
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                     />
    //                     <path
    //                       d="M7.5 22H17.5"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                       strokeLinecap="round"
    //                     />
    //                   </svg>
    //                   <p>خرید اشتراک</p>
    //                 </Button>
    //               </div>
    //             </div>
    //             {/* <TabsContent value="30"></TabsContent>
    //           <TabsContent value="60"></TabsContent>
    //           <TabsContent value="90"></TabsContent> */}
    //           </div>
    //         </div>
    //       </TabsContent>
    //       <TabsContent value="90">
    //         {" "}
    //         <div className="flex justify-between">
    //           <div className="flex flex-col gap-7">
    //             <div className="flex flex-col gap-4">
    //               <h2 className="text-2xl font-bold">
    //                 اشتراک ویژه‌ خودت رو انتخاب کن
    //               </h2>
    //               <p className="text-sm font-medium">
    //                 دسترسی کامل به آرشیو انیمه‌ها، فیلم‌ها، سریال‌ها و دراماهای
    //                 سایت انیمه‌لیست
    //               </p>
    //             </div>
    //             <div className="flex gap-[10px] items-center">
    //               <p className="text-sm font-medium min-w-fit">
    //                 به اضافه‌ی کلی ویژگی دیگه
    //               </p>
    //               <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             </div>
    //             <div className="flex flex-col gap-3">
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M4 11.7998V15.7998C4 19.0996 4 20.7496 5.02513 21.7747C6.05025 22.7998 7.70017 22.7998 11 22.7998H13C16.2998 22.7998 17.9497 22.7998 18.9749 21.7747C20 20.7496 20 19.0996 20 15.7998V11.7998"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M3 9.7998C3 9.05211 3 8.67827 3.20096 8.3998C3.33261 8.21738 3.52197 8.0659 3.75 7.96057C4.09808 7.7998 4.56538 7.7998 5.5 7.7998H18.5C19.4346 7.7998 19.9019 7.7998 20.25 7.96057C20.478 8.0659 20.6674 8.21738 20.799 8.3998C21 8.67827 21 9.05211 21 9.7998C21 10.5475 21 10.9213 20.799 11.1998C20.6674 11.3822 20.478 11.5337 20.25 11.639C19.9019 11.7998 19.4346 11.7998 18.5 11.7998H5.5C4.56538 11.7998 4.09808 11.7998 3.75 11.639C3.52197 11.5337 3.33261 11.3822 3.20096 11.1998C3 10.9213 3 10.5475 3 9.7998Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M6 4.58552C6 3.5993 6.79949 2.7998 7.78571 2.7998H8.14286C10.2731 2.7998 12 4.52671 12 6.65695V7.7998H9.21429C7.43908 7.7998 6 6.36072 6 4.58552Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M18 4.58552C18 3.5993 17.2005 2.7998 16.2143 2.7998H15.8571C13.7269 2.7998 12 4.52671 12 6.65695V7.7998H14.7857C16.5609 7.7998 18 6.36072 18 4.58552Z"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinejoin="round"
    //                   />
    //                   <path
    //                     d="M12 11.7998L12 22.7998"
    //                     stroke="#FFC107"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>

    //                 <p className="text-base font-medium text-[#FFC107]">
    //                   + ۱۰ روز هدیه
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">تماشای آفلاین</p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   امکان استفاده از پخش آنلاین
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   دانلود با ترافیک مصرفی نیم بها
    //                 </p>
    //               </div>
    //               <div className="flex gap-[10px] items-center">
    //                 <svg
    //                   width="24"
    //                   height="25"
    //                   viewBox="0 0 24 25"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M5 15.2998C5 15.2998 6.5 15.2998 8.5 18.7998C8.5 18.7998 14.0588 9.63314 19 7.7998"
    //                     stroke="#11EB75"
    //                     strokeWidth="1.5"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //                 <p className="text-base font-medium">
    //                   سرعت بالا و بدون محدودیت در دانلود
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="w-full bg-[hsla(215,20%,65%,0.24)] h-[1px]"></div>
    //             <div>
    //               <p className="text-base font-medium">
    //                 راستی اگه کد تخفیف هم داری همین‌جا وارد کن که یه تخفیف خوب
    //                 ازمون بگیری {`:)`}
    //               </p>
    //             </div>
    //             <div className="relative">
    //               <Input
    //                 placeholder="کد تخفیف"
    //                 className="border py-7 dark:placeholder:text-[#979CA6] dark:border-[hsla(215,20%,65%,0.24)] dark:bg-[#242F3D]"
    //               />
    //               <Button
    //                 variant="secondary"
    //                 className="absolute dark:bg-[#17212B] top-1 end-1 px-4 py-[14px] rounded-md"
    //               >
    //                 اعمال کد تخفیف
    //               </Button>
    //             </div>
    //           </div>
    //           <div className="flex flex-col">
    //             <div className="w-[350px] h-[400px] rounded-2xl bg-background">
    //               <div className="relative w-full h-2/3 top-0 z-40">
    //                 <Image
    //                   src="/images/blogs/b3.webp"
    //                   alt="subscription"
    //                   fill
    //                   className="object-cover object-center rounded-2xl"
    //                 />
    //                 <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-background to-background/0 "></div>
    //               </div>
    //               <div className="flex flex-col gap-3 items-center px-6 rounded-md -mt-10 z-50">
    //                 <h3 className="text-2xl font-bold z-50">۹۰ روزه</h3>
    //                 <h4 className="text-[32px] font-black z-50">
    //                   ۱۸۰،۰۰۰ تومان
    //                 </h4>
    //                 <Button className="flex gap-1 h-12 w-full z-50">
    //                   <svg
    //                     width="25"
    //                     height="24"
    //                     viewBox="0 0 25 24"
    //                     fill="none"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       d="M4.01819 10.3058C3.63013 9.23176 3.4361 8.69476 3.51884 8.35065C3.60933 7.97427 3.877 7.68084 4.21913 7.58296C4.53193 7.49346 5.01853 7.70973 5.99173 8.14227C6.85253 8.52486 7.28293 8.71615 7.68732 8.70551C8.13257 8.69379 8.56088 8.51524 8.9016 8.19931C9.21105 7.91237 9.41861 7.45513 9.83373 6.54064L10.7486 4.52525C11.5128 2.84175 11.8949 2 12.5 2C13.1051 2 13.4872 2.84175 14.2514 4.52525L15.1663 6.54064C15.5814 7.45513 15.789 7.91237 16.0984 8.19931C16.4391 8.51524 16.8674 8.69379 17.3127 8.70551C17.7171 8.71615 18.1475 8.52486 19.0083 8.14227C19.9815 7.70973 20.4681 7.49346 20.7809 7.58296C21.123 7.68084 21.3907 7.97427 21.4812 8.35065C21.5639 8.69476 21.3699 9.23176 20.9818 10.3057L19.3138 14.9222C18.6002 16.897 18.2435 17.8844 17.4968 18.4422C16.7502 19 15.7854 19 13.8558 19H11.1442C9.21459 19 8.24977 19 7.50315 18.4422C6.75654 17.8844 6.39977 16.897 5.68622 14.9222L4.01819 10.3058Z"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                     />
    //                     <path
    //                       d="M12.5 14H12.509"
    //                       stroke="white"
    //                       strokeWidth="2"
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                     />
    //                     <path
    //                       d="M7.5 22H17.5"
    //                       stroke="white"
    //                       strokeWidth="1.5"
    //                       strokeLinecap="round"
    //                     />
    //                   </svg>
    //                   <p>خرید اشتراک</p>
    //                 </Button>
    //               </div>
    //             </div>
    //             {/* <TabsContent value="30"></TabsContent>
    //           <TabsContent value="60"></TabsContent>
    //           <TabsContent value="90"></TabsContent> */}
    //           </div>
    //         </div>
    //       </TabsContent>
    //       <div className="w-full flex justify-end items-center">
    //         <TabsList className="rounded-lg h-[56px] w-[350px] gap-[10px] -mt-14 dark:bg-[#242F3D]">
    //           <TabsTrigger
    //             value="30"
    //             className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
    //           >
    //             ۳۰ روزه
    //           </TabsTrigger>
    //           <TabsTrigger
    //             value="60"
    //             className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
    //           >
    //             ۶۰ روزه
    //           </TabsTrigger>
    //           <TabsTrigger
    //             value="90"
    //             className="h-12 w-1/3 text-base font-semibold text-white dark:data-[state=active]:bg-background"
    //           >
    //             ۹۰ روزه
    //           </TabsTrigger>
    //         </TabsList>
    //       </div>
    //     </Tabs>
    //   </DialogContent>
    // </Dialog>
    
  );
}
