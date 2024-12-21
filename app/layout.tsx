import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { getLocale } from "../i18n/server";
import localFont from "next/font/local";
import { ApolloWrapper } from "@/components/ApolloWrapper";
import { LocaleProvider } from "../hooks/locale-provider";
import { Locales } from "@/i18n/settings";
import DirProvider from "@/components/DirProvider";

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

      title: "انیمه لیست | دانلود انیمه، دانلود فیلم، دانلود سریال",
      description:
        "جدیدترین قسمت‌های انیمه مورد علاقه‌تان را کشف و دانلود کنید.",
      openGraph: {
        title: "انیمه لیست - جدیدترین قسمت‌های انیمه",
        description: "دانلود و پخش جدیدترین قسمت‌های انیمه.",
        url: "https://dev.alplayer.ir/",
        images: [
          {
            url: "https://dev.alplayer.ir/images/logo.webp",
            width: 800,
            height: 600,
            alt: "انیمه لیست",
          },
        ],
      },

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
      <body className={`dark:bg-background ${modam.className} w-full`}>
        <ApolloWrapper>
          {/* <LocaleProvider value={locale}> */}
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <DirProvider dir="rtl">
                {children}
              </DirProvider>
            </ThemeProvider>
          {/* </LocaleProvider> */}
        </ApolloWrapper>
      </body>
    </html>
  );
}
