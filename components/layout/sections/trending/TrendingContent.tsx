'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/client';

import AnimeCard from '../../cards/AnimeCard';
import { GetSeasonalAnimesDocument, TrendingAnimeFragmentFragment } from '@/generated/graphql';

export default function TrendingContent() {
  const { data } = useSuspenseQuery(GetSeasonalAnimesDocument, {
    variables: {
      first: 2,
    },
  });
  const animes : TrendingAnimeFragmentFragment[] = data?.animesSeason.data || []
  console.log(animes)
  return (
    <div className="flex flex-col gap-6">
      {animes.map((item) => (
        <AnimeCard data={item} key={item.id} />
      ))}
    </div>
  );
}
