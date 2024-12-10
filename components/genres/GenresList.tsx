import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genres } from "@/constants";
import CategoryCard from "@/components/layout/cards/CategoryCard";
import { getClient } from "@/lib/apolloClient";
import { GetAnimeGenresDocument, GetAnimeGenresQuery } from "@/generated/graphql";

async function fetchGenres() {
    const client = getClient();
  
    await new Promise((resolve) => setTimeout(resolve, 5000));
  
    const { data } = await client.query<GetAnimeGenresQuery>({
      query: GetAnimeGenresDocument,
    });
  
    return data?.genres || [];
  }
export default async function GenresList() {
    const genres = await fetchGenres();

    if (!genres || genres.length === 0) {
      return <p>Genres not found.</p>;
    }

  return (
    <div className="w-full flex flex-col gap-6 px-4 lg:px-16 py-6">
      <h1 className="font-bold text-2xl">دسته‌بندی‌ها</h1>
      <div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-5">
              {genres.map((genre, i) => (
                <CategoryCard
                  key={genre.id}
                  category={genre}
                  priority={i === 0 ? true : false}
                />
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
