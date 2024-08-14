import MediaCarousels from "@/components/layout/carousels/MediaCarousels";
import Hero from "@/components/layout/hero";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import { recommendations } from "@/constants";

export default async function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <SectionContainer
        title="بهترین‌ها برای شما"
        description="لیستی از بهترین انیمه‌ها بر اساس سلیقه‌ شما"
        className="lg:-mt-28"
      >
        <MediaCarousels data={recommendations} />
      </SectionContainer>
    </div>
  );
}
