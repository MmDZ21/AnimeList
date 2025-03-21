import dynamic from "next/dynamic";
import Hero from "@/components/layout/hero";
import SeasonalAnimes from "@/components/layout/sections/SeasonalAnimes";
const MediaCarousels = dynamic(
  () => import("@/components/layout/carousels/MediaCarousels")
);
const Parallel = dynamic(() => import("@/components/layout/sections/Parallel"));
import { PreloadQuery } from "@/lib/apolloClient";
import { Suspense } from "react";
import { GetSeasonalAnimesDocument } from "@/generated/graphql";
import MediaCarouselSkeleton from "@/components/layout/Skeletons/MediaCarouselSkeleton";

export default async function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10">
      <Hero />
      <div className="min-h-screen w-full flex flex-col gap-10 px-4 lg:px-16">
        <SeasonalAnimes />
        {/* <UserEpisodes />
        <Trending />
        <SummerAnime /> */}
        <PreloadQuery
          query={GetSeasonalAnimesDocument}
          variables={{
            first: 10,
          }}
        >
          <Parallel
            bgGradient="to top, hsla(226,90%,11%,0.8), hsla(224,71%,14%,0.48)"
            bgUrl="/images/conan.webp"
            title="Detective Conan Collection"
            description="مجموعهٔ کامل انیمه سریالی و سینمایی‌های کارآگاه کوچک محبوب دل ها رو اینجا با ترجمهٔ اختصاصی و زیرنویس چسبیده ببین"
            // actions={[<WatchOnline key={1} />, <AddToWatchList key={2} />]}
          >
            <Suspense fallback={<MediaCarouselSkeleton length={10} />}>
              <MediaCarousels />
            </Suspense>
          </Parallel>
        </PreloadQuery>
        {/* <NewEpisodes />
        <Banners /> */}
      </div>
    </div>
  );
}
