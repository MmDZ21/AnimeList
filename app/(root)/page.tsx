import HomePageContent from "@/components/HomePageContent";
import { Suspense } from "react";
import MediaCarouselSkeleton from "@/components/layout/Skeletons/MediaCarouselSkeleton";
import Slider from "@/components/layout/Slider/Slider";

export default async function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10">
      <Slider />
      <div className="min-h-screen w-full flex flex-col gap-10 px-4 lg:px-16">
        {/* <SeasonalAnimes />
        <PreloadQuery
          query={GetSeasonalAnimesDocument}
          variables={{
            first: 10,
          }}
        > */}
        <Suspense fallback={<MediaCarouselSkeleton length={8}/>}>
          <HomePageContent />
        </Suspense>
        {/* <Parallel
            bgGradient="to top, hsla(226,90%,11%,0.8), hsla(224,71%,14%,0.48)"
            bgUrl="/images/conan.webp"
            title="Detective Conan Collection"
            description="مجموعهٔ کامل انیمه سریالی و سینمایی‌های کارآگاه کوچک محبوب دل ها رو اینجا با ترجمهٔ اختصاصی و زیرنویس چسبیده ببین"
            // actions={[<WatchOnline key={1} />, <AddToWatchList key={2} />]}
          >
            <Suspense fallback={<MediaCarouselSkeleton length={10} />}>
              <MediaCarousels />
            </Suspense>
          </Parallel> */}
        {/* </PreloadQuery> */}
        {/* <NewEpisodes />
        <Banners /> */}
      </div>
    </div>
  );
}
