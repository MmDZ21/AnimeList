import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const modam = localFont({
  src: [
    {
      path: "../../public/fonts/modamweb-extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/modamweb-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <>
      <html
        lang={locale}
        dir={locale === "fa" ? "rtl" : "ltr"}
        suppressHydrationWarning
      >
        <head />
        <body className={`dark:bg-background ${modam.className}`}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
