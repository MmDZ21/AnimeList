import {
  HomePageContentDocument,
  HomePageContentQuery,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import React from "react";
import SectionContainer from "./layout/sections/SectionContainer";
import MediaCarousels from "./layout/carousels/MediaCarousels";
import { delay } from "@/lib/utils";

export default async function HomePageContent() {
  await delay(5000)
  const client = getClient();
  
  const { data, error } = await client.query<HomePageContentQuery>({
    query: HomePageContentDocument,
  });

  if (error) {
    console.error("Error fetching Home Page data:", error);
    return <p>Error loading Home Page data.</p>;
  }

  const result = data?.homePageAnimeContent;

  if (!result) {
    return <p>Content not found.</p>;
  }
  const content = result.map(res=> {
    let params = JSON.parse(res.parameters!)
    let link = undefined
    if(params.genreID !== ""){
      link = "/anime/genre/" + params.genreID + "/" + params.genreSlug
    } else if (params.year !== "") {
      link = "/anime/year/" + params.year
    }else {
      link = undefined
    }
    return {
      link,
      ...res
    }
  })
  return (
    <>
      {content.map((content) => (
        <SectionContainer
          title={content.appBarHeader + " " + "های" + " " + content.appBarQuery}
          description={"لیستی از بهترین انیمه‌های" + " " + content.appBarQuery}
          key={content.headerText}
          hasMore={content.hasMore === 1 ? true : false}
          hasMoreLink={content.link}
        >
          <MediaCarousels items={content.content}/>
        </SectionContainer>
      ))}
    </>
  );
}
