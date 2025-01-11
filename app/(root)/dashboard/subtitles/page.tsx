import React from "react";
import RecentCard from "@/components/layout/cards/RecentCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { dawn } from "@/constants";
import SubtitleCard from "@/components/layout/cards/SubtitleCard";

export default async function page() {
  return (
    <>
      <Tabs className="w-full" defaultValue="exclusive">
        <TabsList className="w-full h-12 text-[#A1A1AA] justify-center dark:bg-[#17212B] rounded-md p-1">
          <TabsTrigger
            className="px-4 py-2 dark:data-[state=active]:text-white data-[state=active]:font-bold dark:data-[state=active]:bg-background rounded-md"
            value="exclusive"
          >
            زیرنویس‌های اختصاصی
          </TabsTrigger>
          <TabsTrigger
            className="px-4 py-2 dark:data-[state=active]:bg-background rounded-md data-[state=active]:font-bold"
            value="nonexclusive"
          >
            زیرنویس‌های ارسالی
          </TabsTrigger>
        </TabsList>
        <TabsContent value="exclusive">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-sm font-medium">آخرین زیرنویس‌های اختصاصی</p>
              <div className="flex gap-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 10H18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 14H16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 18H14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 6H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 18.8125C6.60678 19.255 5.56018 21 5 21M5 21C4.43982 21 3.39322 19.255 3 18.8125M5 21V15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5.1875C3.39322 4.74501 4.43982 3 5 3M5 3C5.56018 3 6.60678 4.74501 7 5.1875M5 3V9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7H6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 17H9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 17H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 7H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7C6 6.06812 6 5.60218 6.15224 5.23463C6.35523 4.74458 6.74458 4.35523 7.23463 4.15224C7.60218 4 8.06812 4 9 4C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23463C12 5.60218 12 6.06812 12 7C12 7.93188 12 8.39782 11.8478 8.76537C11.6448 9.25542 11.2554 9.64477 10.7654 9.84776C10.3978 10 9.93188 10 9 10C8.06812 10 7.60218 10 7.23463 9.84776C6.74458 9.64477 6.35523 9.25542 6.15224 8.76537C6 8.39782 6 7.93188 6 7Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 17C12 16.0681 12 15.6022 12.1522 15.2346C12.3552 14.7446 12.7446 14.3552 13.2346 14.1522C13.6022 14 14.0681 14 15 14C15.9319 14 16.3978 14 16.7654 14.1522C17.2554 14.3552 17.6448 14.7446 17.8478 15.2346C18 15.6022 18 16.0681 18 17C18 17.9319 18 18.3978 17.8478 18.7654C17.6448 19.2554 17.2554 19.6448 16.7654 19.8478C16.3978 20 15.9319 20 15 20C14.0681 20 13.6022 20 13.2346 19.8478C12.7446 19.6448 12.3552 19.2554 12.1522 18.7654C12 18.3978 12 17.9319 12 17Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {dawn.subtitles.map((sub) => (
                <SubtitleCard data={sub} key={sub.episode.episodeTitle} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="nonexclusive">
          <div className="flex flex-col gap-3"></div>
        </TabsContent>
      </Tabs>
      {/* <div className="hidden lg:flex flex-col bg-[#17212B] p-3 gap-2 rounded-lg"></div> */}
    </>
  );
}
