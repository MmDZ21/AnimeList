import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryCard from "@/components/layout/cards/CategoryCard";
import { getClient } from "@/lib/apolloClient";
import {
  GetAnimeGenresDocument,
  GetAnimeGenresQuery,
} from "@/generated/graphql";
import { Suspense } from "react";
import GenresList from "@/components/genres/GenresList";
import CategoryPageSkeleton from "@/components/layout/Skeletons/CategoryPageSkeleton";
const genreTabs = [
  { label: "انیمه", value: "anime" },
  { label: "دونگهوا", value: "donghua" },
  { label: "فیلم", value: "movie" },
  { label: "سریال", value: "series" },
  { label: "استودیو", value: "studio" },
  { label: "عوامل", value: "staff" },
  { label: "شخصیت", value: "characters" },
];
export default async function page() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <h1 className="font-bold text-2xl">دسته‌بندی‌ها</h1>
      <div>
        <Tabs defaultValue="anime">
          <TabsList className="dark:bg-[#17212B] flex-wrap rounded-lg justify-start items-center p-1 h-fit gap-2">
            {genreTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="py-3 px-2 w-[80px] lg:w-[100px] flex items-center justify-center rounded-lg text-base font-semibold text-white dark:data-[state=active]:bg-[#242F3D]"
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <Suspense fallback={<CategoryPageSkeleton length={20}/>}>
            <GenresList />
          </Suspense>
        </Tabs>
      </div>
    </div>
  );
}
