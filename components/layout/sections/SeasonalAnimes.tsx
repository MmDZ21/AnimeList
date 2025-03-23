// import React, { Suspense } from 'react';
// import SectionContainer from './SectionContainer';
// import MediaCarousels from '../carousels/MediaCarousels';
// import { PreloadQuery } from '@/lib/apolloClient';
// import {
//   GetSeasonalAnimesDocument,
// } from '@/generated/graphql';
// import MediaCarouselSkeleton from '../Skeletons/MediaCarouselSkeleton';

// export default async function SeasonalAnimes() {
//   const client = getClient();

//   const { data, error } = await client.query<GetSeas>({
//     query: HomePageContentDocument,
//   });

//   if (error) {
//     console.error("Error fetching Home Page data:", error);
//     return <p>Error loading Home Page data.</p>;
//   }

//   const content = data?.homePageAnimeContent;

//   if (!content) {
//     return <p>Content not found.</p>;
//   }
//   return (
//         <SectionContainer
//           title="انیمه های فصل پاییز"
//           description="لیستی از بهترین انیمه‌های این فصل"
//           className="lg:-mt-28"
//         >
//       <Suspense fallback={<MediaCarouselSkeleton length={10}/>}>
//           <MediaCarousels
//           />
//       </Suspense>
//         </SectionContainer>

//   );
// }
