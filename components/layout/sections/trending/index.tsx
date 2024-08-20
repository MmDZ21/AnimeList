import React from "react";
import SectionContainer from "../SectionContainer";
import TrendingParallel from "./Parallel";
import { recommendations, trending } from "@/constants";
import AnimeCard from "../../cards/AnimeCard";

export default function Trending() {
  return (
    <div>
      <div className="hidden lg:block">
        <TrendingParallel />
      </div>
      <SectionContainer
        title="محبوب‌ترین‌های فصل"
        className="flex flex-col lg:hidden"
      >
        <div className="flex flex-col gap-6">
          {trending.map((item) => (
            <AnimeCard data={item} key={item.title} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
