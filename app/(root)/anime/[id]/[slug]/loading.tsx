import AnimeHeroSkeleton from "@/components/layout/Skeletons/AnimeHeroSkeleton";
import DesktopPreviewSkeleton from "@/components/layout/Skeletons/DesktopPreviewSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrailerSkeleton from "@/components/layout/Skeletons/TrailerSkeleton";
const loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <AnimeHeroSkeleton />
      <div className="w-full flex flex-col justify-center max-w-[1280px] mx-auto z-20 gap-6">
        <div className="flex flex-col gap-4 -mt-14">
          <DesktopPreviewSkeleton />
        </div>
        <Skeleton className="w-full h-[100px] rounded-md hidden lg:block" />
        <Skeleton className="w-full h-14"/>
        {/* <div className="w-full hidden lg:block">
        <Tabs defaultValue="trailers" className="w-full">
          <TabsList className="w-full dark:bg-[#17212B] rounded-lg justify-start items-center p-1 h-fit gap-2">
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="trailers"
            >
              تریلر
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="download"
            >
              دانلود
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="cc"
            >
              زیرنویس
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="staff"
            >
              شخصیت‌ها و عوامل
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="details"
            >
              اطلاعات تکمیلی
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background"
              value="similars"
            >
              آثار مشابه
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[160px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-background gap-2"
              value="comments"
            >
              نظرات
            </TabsTrigger>
          </TabsList>
          <TabsContent className="py-4" value="trailers">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <TrailerSkeleton />
              <TrailerSkeleton />
              <TrailerSkeleton />
            </div>
          </TabsContent>
          <TabsContent className="py-4" value="download">
            <Skeleton className="w-full h-96" />
          </TabsContent>
          <TabsContent className="py-4" value="cc">
            <Skeleton className="w-full h-96" />
          </TabsContent>
          <TabsContent value="staff" className="py-4">
            <Skeleton className="w-full h-96" />
          </TabsContent>
          <TabsContent value="details"></TabsContent>
          <TabsContent value="similars">
            <Skeleton className="w-full h-96" />
          </TabsContent>
          <TabsContent value="comments">
            <Skeleton className="w-full h-96" />
          </TabsContent>
        </Tabs>
      </div> */}
      </div>
    </div>
  );
};

export default loading;
