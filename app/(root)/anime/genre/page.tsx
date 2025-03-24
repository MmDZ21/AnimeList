import { Suspense } from "react";
import GenresList from "@/components/genres/GenresList";
import CategoryPageSkeleton from "@/components/layout/Skeletons/CategoryPageSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "انیمه براساس ژانر - انیم آپ",
  description: "انتخاب ژانر مورد نظر شما",
};

export default async function page() {
  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <h1 className="font-bold text-2xl">دسته‌بندی‌ها</h1>
      <div>
          <Suspense fallback={<CategoryPageSkeleton length={20}/>}>
            <GenresList />
          </Suspense>
      </div>
    </div>
  );
}
