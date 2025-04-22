import { Suspense } from "react";
import CategoryPageSkeleton from "@/components/layout/Skeletons/CategoryPageSkeleton";
import YearList from "@/components/genres/YearList";
import AnimeYearListSkeleton from "@/components/layout/Skeletons/AnimeYearListSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "انیمه براساس سال - انیمه لیست",
  description: "انتخاب سال مورد نظر شما",
  alternates : {
    canonical: process.env.WEBSITE_URL + "/anime/year"
  }
};

export default async function page() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <h1 className="font-bold text-2xl">سال‌ها</h1>
      <div>
          <Suspense fallback={<AnimeYearListSkeleton length={20}/>}>
            <YearList />
          </Suspense>
      </div>
    </div>
  );
}
