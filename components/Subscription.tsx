"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "@/components/ui/custom-tabs";
import Image from "next/image";
import { features, membershipPlans } from "@/constants";
import { useFormStatus } from "react-dom";
import membership from "@/actions/membership";

function Submit() {
  const status = useFormStatus();
  return (
    <Button
      disabled={status.pending}
      type="submit"
      className="flex gap-1 h-12 w-full"
    >
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
      {status.pending && (
        <Image src={"/svg/spinner.svg"} alt="pending" width={24} height={24} />
      )}
    </Button>
  );
}

export default function Subscription() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[260px] w-full">
        <Image
          src="/images/violet.webp"
          alt="subscription"
          fill
          priority
          className="object-cover object-top absolute inset-0 z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/25 z-20" />
        <div className="z-40 h-full w-full flex flex-col justify-end relative bottom-2 items-center gap-4">
          <h1 className="font-bold text-xl text-center">
            حسابت کاربریت رو ارتقا بده
            <br />و از آرشیو بزرگ ما نهایت لذت رو ببر
          </h1>
          <h2 className="text-base font-normal text-[#D3D5D9] text-center px-6">
            با خرید اشتراک ویژه می‌تونی دسترسی کاملی به کل آرشیو انیم‌آپ و
            دانلود جهت تماشای آفلاین داشته باشی.
          </h2>
        </div>
      </div>
      <Tabs className="w-full" defaultValue="2">
        <TabsList className="w-full  bg-transparent border-b border-[hsla(215,20%,65%,0.24)] justify-center">
          <TabsTrigger value="1">یک ماهه</TabsTrigger>
          <TabsTrigger value="2">سه ماهه</TabsTrigger>
          <TabsTrigger value="3">شش ماهه</TabsTrigger>
        </TabsList>
        {membershipPlans.map((plan) => (
          <TabsContent key={plan.value} value={plan.value}>
            <div className="flex flex-col p-4 gap-4 items-center">
              <div className="w-full max-w-[800px] h-[360px] rounded-2xl bg-transparent border border-[hsla(215,20%,65%,0.24)]">
                <div className="relative w-full h-2/3 top-0 z-40 ">
                  <Image
                    src={plan.image}
                    alt="subscription"
                    fill
                    className="object-cover object-center rounded-2xl"
                  />
                  <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-background to-background/40 "></div>
                </div>
                <form
                  action={membership}
                  className="flex flex-col gap-4 px-6 -mt-[188px]"
                >
                  <div className="flex flex-col gap-1 z-50">
                    <p className="text-base font-bold">{plan.days} روزه</p>
                    <p className="text-2xl font-black">{plan.price} تومان</p>
                  </div>
                  <div className="flex flex-col gap-2 z-50 text-base font-medium min-h-[152px]">
                    {plan.bonusDays > 0 && (
                      <div className="flex gap-[10px] items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11"
                            stroke="#FFC107"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z"
                            stroke="#FFC107"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z"
                            stroke="#FFC107"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z"
                            stroke="#FFC107"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 11L12 22"
                            stroke="#FFC107"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <p className="text-[#FFC107]">
                          + {plan.bonusDays} روز هدیه
                        </p>
                      </div>
                    )}
                    {features.map((feature) => (
                      <div
                        className="flex gap-[10px] items-center"
                        key={feature}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                            stroke="#11EB75"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <input type="hidden" name="membershipId" value={plan.value} />
                  <Submit />
                </form>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
