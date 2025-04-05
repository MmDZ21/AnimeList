import { GetGenreInfoDocument, GetGenreInfoQuery, GetGenreInfoQueryVariables } from '@/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'

export default async function GenreTitle({id}: {id: string}) {
      const client = getClient();
    
      const { data, error } = await client.query<
        GetGenreInfoQuery,
        GetGenreInfoQueryVariables
      >({
        query: GetGenreInfoDocument,
        variables: { id },
      });
    
      if (error) {
        console.error("Error fetching Genre data:", error);
        return <p>Error loading Genre data.</p>;
      }
    
      const genre = data?.AnimeGenreInfo;
    
      if (!genre) {
        return <p>Genre not found.</p>;
      }
    
  return (
      <div className='w-full flex justify-between items-center'>
        <h1 className="font-bold text-2xl">انیمه‌های ژانر {genre.name_fa}</h1>
        <Link href="/anime/genre" className='text-primary-500 flex  items-center text-sm'>
   مشاهده سایر ژانرها
        <ChevronLeftIcon className=''/>
        </Link>
      </div>
  )
}
