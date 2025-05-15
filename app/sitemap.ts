import { GetAllAnimeDocument, GetAllAnimeQuery, GetAllAnimeQueryVariables } from '@/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import { generateSlug } from '@/lib/utils';
import { MetadataRoute } from 'next'
 const PER_PAGE = 30;

export async function generateSitemaps() {
  const client = getClient();

  const { data } = await client.query<
    GetAllAnimeQuery,
    GetAllAnimeQueryVariables
  >({
    query: GetAllAnimeDocument,
    variables: { first: 1 }, // Only need 1 item to get total count
  });

  const total = data.animes.paginatorInfo.total;
  const totalSitemaps = Math.ceil(total / 3000);

  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

 
export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const client = getClient();
  let allAnime: GetAllAnimeQuery['animes']['data'] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data } = await client.query<GetAllAnimeQuery, GetAllAnimeQueryVariables>({
      query: GetAllAnimeDocument,
      variables: { first: PER_PAGE, page },
    });

    allAnime.push(...data.animes.data);
    hasMore = data.animes.paginatorInfo.hasMorePages;
    page++;
  }

  return allAnime.map((anime) => ({
    url: `${process.env.WEBSITE_URL}/anime/${anime.id}/${generateSlug(anime.dic_title!)}`}));
}