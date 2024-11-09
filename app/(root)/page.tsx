import dynamic from "next/dynamic";
import AddToWatchList from "@/components/buttons/AddToWatchList";
import WatchOnline from "@/components/buttons/WatchOnline";
// // // import MediaCarousels from "@/components/layout/carousels/MediaCarousels";
import Hero from "@/components/layout/hero";
// // // import Banners from "@/components/layout/sections/banners";
// // // import NewEpisodes from "@/components/layout/sections/NewEpisodes";
// // // import Parallel from "@/components/layout/sections/Parallel";
import Recommendation from "@/components/layout/sections/Recommendation";
// // import SummerAnime from "@/components/layout/sections/SummerAnime";
// // import Trending from "@/components/layout/sections/trending";
const MediaCarousels = dynamic(
  () => import("@/components/layout/carousels/MediaCarousels"),
  { ssr: false }
);
const Banners = dynamic(() => import("@/components/layout/sections/banners"));
const NewEpisodes = dynamic(
  () => import("@/components/layout/sections/NewEpisodes")
);
const Parallel = dynamic(() => import("@/components/layout/sections/Parallel"));
// const Recommendation = dynamic(
//   () => import("@/components/layout/sections/Recommendation")
// );
const SummerAnime = dynamic(
  () => import("@/components/layout/sections/SummerAnime")
);
const Trending = dynamic(() => import("@/components/layout/sections/trending"));
const UserEpisodes = dynamic(
  () => import("@/components/layout/sections/UserEpisodes")
);

// import UserEpisodes from "@/components/layout/sections/UserEpisodes";
import { recommendations } from "@/constants";

export default async function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10">
      <Hero />
      <div className="min-h-screen w-full flex flex-col gap-10 px-4 lg:px-16">
        <Recommendation />
        <UserEpisodes />
        <Trending />
        <SummerAnime />
        <NewEpisodes />
        <Banners />
        <Parallel
          bgGradient="to top, hsla(226,90%,11%,0.8), hsla(224,71%,14%,0.48)"
          bgUrl="/images/conan.webp"
          title="Detective Conan Collection"
          description="مجموعهٔ کامل انیمه سریالی و سینمایی‌های کارآگاه کوچک محبوب دل ها رو اینجا با ترجمهٔ اختصاصی و زیرنویس چسبیده ببین"
          actions={[<WatchOnline key={1} />, <AddToWatchList key={2} />]}
        >
          <MediaCarousels data={recommendations} />
        </Parallel>
      </div>
    </div>
  );
}
