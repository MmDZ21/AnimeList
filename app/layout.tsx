import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ApolloWrapper } from "@/components/ApolloWrapper";
import DirProvider from "@/components/DirProvider";
import { Toaster } from "@/components/ui/sonner";
// Define the expected type for the parameters
// interface MetadataParams {
//   params: {
//     locale: Locales;
//   };
// }

// Dynamic Metadata based on locale
// export async function generateMetadata({
//   params: { locale },
// }: MetadataParams): Promise<Metadata> {
//   const meta = {
//     en: {
//       title: "AnimeList - Your Source for Latest Anime",
//       description:
//         "Discover and download the latest episodes of your favorite anime series.",
//       openGraph: {
//         title: "AnimeList - Latest Anime Episodes",
//         description: "Download and stream the latest anime episodes.",
//         url: "https://yourwebsite.com/",
//         images: [
//           {
//             url: "https://yourwebsite.com/og-image-en.jpg",
//             width: 800,
//             height: 600,
//             alt: "AnimeList",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "AnimeList",
//         description: "Your source for the latest anime.",
//         image: "https://yourwebsite.com/twitter-image-en.jpg",
//       },
//     },
//     fa: {
//       title: "انیمه لیست | دانلود انیمه، دانلود فیلم، دانلود سریال",
//       description:
//         "جدیدترین قسمت‌های انیمه مورد علاقه‌تان را کشف و دانلود کنید.",
//       openGraph: {
//         title: "انیمه لیست - جدیدترین قسمت‌های انیمه",
//         description: "دانلود و پخش جدیدترین قسمت‌های انیمه.",
//         url: "https://dev.alplayer.ir/",
//         images: [
//           {
//             url: "https://dev.alplayer.ir/images/logo.webp",
//             width: 800,
//             height: 600,
//             alt: "انیمه لیست",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "انیمه لیست",
//         description: "منبع شما برای جدیدترین انیمه‌ها.",
//         image: "https://dev.alplayer.ir/twitter-image-fa.jpg",
//       },
//     },
//   };

//   // Return the metadata based on the locale
//   return meta[locale] || meta.fa;
// }

// Define local fonts
const modam = localFont({
  src: [
    {
      path: "./fonts/modamweb-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/modamweb-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {

      title: "انیمه لیست | دانلود انیمه بدون سانسور با زیرنویس فارسی چسبیده",
      description:
        "جدیدترین قسمت‌های انیمه مورد علاقه‌تان را کشف و دانلود کنید.",
      openGraph: {
        title: "انیمه لیست | دانلود انیمه بدون سانسور با زیرنویس فارسی چسبیده",
        description: "دانلود انیمه با زیرنویس فارسی چسبیده بدون سانسور با لینک مستقیم به همراه اپلیکیشن اندروید و ویندوز, دانلود انیمه ایسکای و فانتزی, ایچی, یوری, یائویی",
        url: process.env.WEBSITE_URL,
        siteName:"انیمه لیست",
        type:"website",
        images: [
          {
            url: process.env.WEBSITE_URL + "/images/logo.webp",
            width: 800,
            height: 600,
            alt: "انیمه لیست",
          },
        ],
      },
      alternates: {
        canonical: process.env.WEBSITE_URL
      }

}
// Global Layout Component
export default async function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // // Dynamically get the user's locale
  // const locale = await getLocale();
  // const metadata = await generateMetadata({ params: { locale } });

  return (
    <html
      // lang={locale}
      // dir={locale === "fa" ? "rtl" : "ltr"}
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
      <body className={`bg-background ${modam.className} w-full text-white`}>
        <ApolloWrapper>
          {/* <LocaleProvider value={locale}> */}
              <DirProvider dir="rtl">
                {children}
              </DirProvider>
          {/* </LocaleProvider> */}
        </ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}
