import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genres } from "@/constants";
import CategoryCard from "@/components/layout/cards/CategoryCard";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <h1 className="font-bold text-2xl">دسته‌بندی‌ها</h1>
      <div>
        <Tabs defaultValue="anime">
          <TabsList className="dark:bg-[#17212B] rounded-lg justify-start items-center p-1 h-fit gap-2">
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="anime"
            >
              انیمه
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="donghua"
            >
              دونگهوا
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="movie"
            >
              فیلم
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="series"
            >
              سریال
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="studio"
            >
              استودیو
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="staff"
            >
              عوامل
            </TabsTrigger>
            <TabsTrigger
              className="py-3 px-2 w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
              value="characters"
            >
              شخصیت
            </TabsTrigger>
          </TabsList>
          <TabsContent value="anime">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-5">
              {genres.map((genre) => (
                <CategoryCard key={genre.title} category={genre} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="donghua"></TabsContent>
          <TabsContent value="movie"></TabsContent>
          <TabsContent value="series"></TabsContent>
          <TabsContent value="studio"></TabsContent>
          <TabsContent value="staff"></TabsContent>
          <TabsContent value="characters"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
