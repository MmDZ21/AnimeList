// "use client";
// import React from "react";
// import { switchLocaleAction } from "@/actions/switch-locale";
// import { useTranslation } from "@/i18n/client";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import Image from "next/image";

// export default function ChangeLocale() {
//   const { i18n, t } = useTranslation("common");
//   return (
//     <div>
//       <Select
//         onValueChange={(e) => switchLocaleAction(e)}
//         value={i18n.resolvedLanguage}
//       >
//         <SelectTrigger className="flex gap-1">
//           <SelectValue placeholder="language" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="en">
//             <div className="flex items-center justify-center gap-2 ">
//               <Image src="/svg/en.svg" width={16} height={16} alt="en" />
//               {t("english")}
//             </div>
//           </SelectItem>
//           <SelectItem value="fa">
//             <div className="flex items-center justify-center gap-2 ">
//               <Image src="/svg/fa.svg" width={16} height={16} alt="fa" />
//               {t("persian")}
//             </div>
//           </SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
