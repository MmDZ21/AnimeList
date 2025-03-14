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
