import {
  GetAnimeByIdDocument,
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import Image from "next/image";

export default async function HeroImage({ id }: { id: string }) {
  const client = getClient();

  const { data, error } = await client.query<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >({
    query: GetAnimeByIdDocument,
    variables: { id },
  });

  if (error) {
    console.error("Error fetching anime data:", error);
    return <p>Error loading anime data.</p>;
  }

  const anime = data?.anime;

  if (!anime) {
    return <p>Anime not found.</p>;
  }

  const desktopSrc = anime.mal_image_url
    ? "https://dev-api.alplayer.ir" + anime.wide_image
    : "/svg/imageloader.svg";
  const mobileSrc = anime.mal_image_url
    ? "https://dev-api.alplayer.ir" + anime.mal_image_url
    : anime.anilist_image_url
    ? "https://dev-api.alplayer.ir" + anime.anilist_image_url
    : "/svg/imageloader.svg";
  return (
    <div className="w-full h-[585px] relative">
      <Image
        priority
        src={mobileSrc}
        fill
        alt={anime.dic_title!}
        className="object-cover lg:hidden"
      />
      <Image
        priority
        src={desktopSrc}
        fill
        alt={anime.dic_title!}
        className="object-cover hidden lg:block"
      />
      <div className="absolute h-1/2 bottom-0 left-0 right-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
    </div>
  );
}
