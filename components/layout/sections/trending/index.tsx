// import React, { Suspense } from "react";
// import SectionContainer from "../SectionContainer";
// import TrendingParallel from "./Parallel";
// import { PreloadQuery } from "@/lib/apolloClient";

// import TrendingContent from "./TrendingContent";
// import { GetSeasonalAnimesDocument } from "@/generated/graphql";

// export default function Trending() {
//   return (
//         <PreloadQuery
//           query={GetSeasonalAnimesDocument}
//           variables={{
//             first: 10,
//           }}
//         >
//           <Suspense fallback={<p>Loading trending anime...</p>}>
//     <div>
//       <div className="hidden lg:block">
//         <TrendingParallel />
//       </div>
//       <SectionContainer
//         title="محبوب‌ترین‌های فصل"
//         className="flex flex-col lg:hidden"
//       >
//             <TrendingContent />
//       </SectionContainer>
//     </div>
//           </Suspense>
//         </PreloadQuery>
//   );
// }
