import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filters from "@/components/search/advanced/Filters";
import Result from "@/components/search/advanced/Result";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <Tabs defaultValue="anime">
        <TabsList className="dark:bg-[#17212B] flex-wrap rounded-lg justify-start items-center p-1 h-fit gap-2">
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="anime"
          >
            انیمه
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="donghua"
          >
            دونگهوا
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="movie"
          >
            فیلم
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="series"
          >
            سریال
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="studio"
          >
            استودیو
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="staff"
          >
            عوامل
          </TabsTrigger>
          <TabsTrigger
            className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
            value="characters"
          >
            شخصیت
          </TabsTrigger>
        </TabsList>
        <TabsContent value="anime">
<Suspense>
<Filters />
<Result />
</Suspense>
        </TabsContent>
        <TabsContent value="donghua"></TabsContent>
        <TabsContent value="movie"></TabsContent>
        <TabsContent value="series"></TabsContent>
        <TabsContent value="studio"></TabsContent>
        <TabsContent value="staff"></TabsContent>
        <TabsContent value="characters"></TabsContent>
      </Tabs>
    </div>
  );
}
