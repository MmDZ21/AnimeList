import React, { Suspense } from 'react';
import SectionContainer from './SectionContainer';
import MediaCarousels from '../carousels/MediaCarousels';
import { PreloadQuery } from '@/lib/apolloClient';
import {
  GetSeasonalAnimesDocument,
  GetSeasonalAnimesQuery,
  GetSeasonalAnimesQueryVariables,
} from '@/generated/graphql';

export default function SeasonalAnimes() {
  console.log(GetSeasonalAnimesDocument)
  return (
    <PreloadQuery
      query={GetSeasonalAnimesDocument}
      variables={{
        first: 10,
      }}
    >
        <SectionContainer
          title="انیمه های فصل پاییز"
          description="لیستی از بهترین انیمه‌های این فصل"
          className="lg:-mt-28"
        >
      <Suspense fallback={<p>Loading trending anime...</p>}>
          <MediaCarousels
          />
      </Suspense>
        </SectionContainer>
    </PreloadQuery>
  );
}
