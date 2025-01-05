import RouteWrapper from "@/components/dashboard/RouteWrapper";
import UserInfo from "@/components/dashboard/UserInfo";
import UserInfoSkeleton from "@/components/layout/Skeletons/UserInfoSkeleton";
import { dawn } from "@/constants";

import Image from "next/image";
import React, { Suspense } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full h-[293px] lg:h-[500px] relative">
        <Image
          priority
          src="/images/dashboard.webp"
          fill
          alt="anime"
          className="object-cover object-top"
        />
        <div className="absolute h-1/2 lg:h-full bottom-0 left-0 right-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
      </div>
      <div className="w-full flex flex-col items-center gap-4 lg:gap-6 max-w-[1280px] pb-4 -mt-12 lg:-mt-44 z-20 lg:px-4">
        <Suspense fallback={<UserInfoSkeleton/>}>
          <UserInfo/>
        </Suspense>
        <RouteWrapper>{children}</RouteWrapper>
      </div>
    </div>
  );
}
