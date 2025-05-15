import { GetAllAnimeDocument, GetAllAnimeQuery, GetAllAnimeQueryVariables } from '@/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import { generateSlug } from '@/lib/utils';
import { MetadataRoute } from 'next'

const CHUNK_SIZE = 3000; // URLs per sitemap
const PAGE_SIZE = 30;    // Items per API call
const WEBSITE_URL = process.env.WEBSITE_URL || 'https://animelist.pro';

export async function generateSitemaps() {
  const client = getClient();

  // Only one item is enough to get the total count
  const { data } = await client.query<GetAllAnimeQuery, GetAllAnimeQueryVariables>({
    query: GetAllAnimeDocument,
    variables: { first: 1 },
  });

  const total = data.animes.paginatorInfo.total;
  const totalSitemaps = Math.ceil(total / CHUNK_SIZE);

  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

 
export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const client = getClient();
  const startIndex = id * CHUNK_SIZE;
  const endIndex = startIndex + CHUNK_SIZE;

  let currentPage = 1;
  let fetchedCount = 0;
  const allAnime: GetAllAnimeQuery['animes']['data'] = [];

  while (fetchedCount < endIndex) {
    const { data } = await client.query<GetAllAnimeQuery, GetAllAnimeQueryVariables>({
      query: GetAllAnimeDocument,
      variables: { first: PAGE_SIZE, page: currentPage },
    });

    const pageData = data.animes.data;
    const pageStartIndex = fetchedCount;
    const pageEndIndex = fetchedCount + pageData.length;

    // Only take relevant items within this chunk
    if (pageEndIndex > startIndex && pageStartIndex < endIndex) {
      const sliceStart = Math.max(0, startIndex - pageStartIndex);
      const sliceEnd = Math.min(pageData.length, endIndex - pageStartIndex);
      allAnime.push(...pageData.slice(sliceStart, sliceEnd));
    }

    fetchedCount += pageData.length;
    if (!data.animes.paginatorInfo.hasMorePages) break;

    currentPage++;
  }

  return allAnime.map((anime) => ({
    url: `${WEBSITE_URL}/anime/${anime.id}/${generateSlug(anime.dic_title!)}`,
  }));
}