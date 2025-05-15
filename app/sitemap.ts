import { yearsList } from "@/constants";
import {
  GetAllAnimeDocument,
  GetAllAnimeQuery,
  GetAllAnimeQueryVariables,
  GetAnimeGenresDocument,
  GetAnimeGenresQuery,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import { generateSlug } from "@/lib/utils";
import { MetadataRoute } from "next";

const CHUNK_SIZE = 3000; // URLs per sitemap
const PAGE_SIZE = 30; // Items per API call
const WEBSITE_URL = process.env.WEBSITE_URL || "https://animelist.pro";

export async function generateSitemaps() {
  const client = getClient();

  // Only one item is enough to get the total count
  const { data } = await client.query<
    GetAllAnimeQuery,
    GetAllAnimeQueryVariables
  >({
    query: GetAllAnimeDocument,
    variables: { first: 1 },
  });

  const total = data.animes.paginatorInfo.total;
  const totalSitemaps = Math.ceil(total / CHUNK_SIZE);
  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}
// export default async function sitemap({
//   id,
// }: {
//   id: number;
// }): Promise<MetadataRoute.Sitemap> {
//   const client = getClient();
//   const startIndex = id * CHUNK_SIZE;
//   const endIndex = startIndex + CHUNK_SIZE;

//   let currentPage = 1;
//   let fetchedCount = 0;
//   const animeItems: GetAllAnimeQuery["animes"]["data"] = [];

//   // Step 1: Fetch anime data for this sitemap chunk
//   while (fetchedCount < endIndex) {
//     const { data } = await client.query<
//       GetAllAnimeQuery,
//       GetAllAnimeQueryVariables
//     >({
//       query: GetAllAnimeDocument,
//       variables: { first: PAGE_SIZE, page: currentPage },
//     });

//     const pageData = data.animes.data;
//     const pageStartIndex = fetchedCount;
//     const pageEndIndex = fetchedCount + pageData.length;

//     if (pageEndIndex > startIndex && pageStartIndex < endIndex) {
//       const sliceStart = Math.max(0, startIndex - pageStartIndex);
//       const sliceEnd = Math.min(pageData.length, endIndex - pageStartIndex);
//       animeItems.push(...pageData.slice(sliceStart, sliceEnd));
//     }

//     fetchedCount += pageData.length;
//     if (!data.animes.paginatorInfo.hasMorePages) break;
//     currentPage++;
//   }

//   const animePages = animeItems.map((anime) => ({
//     url: `${WEBSITE_URL}/anime/${anime.id}/${generateSlug(anime.dic_title!)}`,
//   }));

//   // Step 2: Static pages only for the first sitemap chunk (id === 0)
// const staticPages =
//   id === 0
//     ? [
//         '/',
//         '/search',
//         '/anime/ongoing',
//         '/anime/movies',
//       ].map((path) => ({
//         url: `${WEBSITE_URL}${path}`,
//         lastModified: new Date().toISOString(),
//       }))
//     : [];

//   // Step 3: Genre and Year pages (only in id === 0)
//   let genrePages: MetadataRoute.Sitemap = [];
//   let yearPages: MetadataRoute.Sitemap = [];

// if (id === 0) {
//   console.log('Generating static routes and genres for sitemap 0');

//   const [{ data: genresData }] = await Promise.all([
//     client.query<GetAnimeGenresQuery>({ query: GetAnimeGenresDocument }),
//   ]);

//   console.log('Genres fetched:', genresData.genres.length);

//   genrePages = genresData.genres.map((genre) => ({
//     url: `${WEBSITE_URL}/anime/genre/${genre.id}/${encodeURIComponent(genre.name_en!)}`,
//   }));

//   yearPages = yearsList.map((year) => ({
//     url: `${WEBSITE_URL}/anime/year/${year}`,
//   }));
// }

//   return [...staticPages, ...genrePages, ...yearPages, ...animePages];
// }

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  console.log("Sitemap function called with id:", id, "type:", typeof id);
  const client = getClient();

  let staticPages: MetadataRoute.Sitemap = [];
  let genrePages: MetadataRoute.Sitemap = [];
  let yearPages: MetadataRoute.Sitemap = [];

  if (id === 0) {
  console.log("Inside id === 0 block");

    staticPages = [
      '',
      '/search',
      '/anime',
      '/anime/ongoing',
      '/anime/movies',
    ].map(path => ({
      url: `${WEBSITE_URL}${path}`,
      lastModified: new Date().toISOString(),
    }));

    const { data: genresData } = await client.query<GetAnimeGenresQuery>({
      query: GetAnimeGenresDocument,
    });
    console.log("Genres fetched:", genresData.genres.length);

    genrePages = genresData.genres.map(genre => ({
      url: `${WEBSITE_URL}/anime/genre/${genre.id}/${generateSlug(genre.name_en!)}`,
    }));

    yearPages = yearsList.map(year => ({
      url: `${WEBSITE_URL}/anime/year/${year}`,
    }));
  }

  // For brevity, skipping anime fetching here, just return static + genre + year for now
  return [...staticPages, ...genrePages, ...yearPages];
}