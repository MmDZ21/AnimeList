import React, { Suspense } from 'react';
import SectionContainer from './SectionContainer';
import MediaCarousels from '../carousels/MediaCarousels';
import { PreloadQuery } from '@/lib/apolloClient';
import {
  GetSeasonalAnimesDocument,
} from '@/generated/graphql';
import MediaCarouselSkeleton from '../Skeletons/MediaCarouselSkeleton';

export default function SeasonalAnimes() {

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
      <Suspense fallback={<MediaCarouselSkeleton length={10}/>}>
          <MediaCarousels
          />
      </Suspense>
        </SectionContainer>
    </PreloadQuery>
  );
}
