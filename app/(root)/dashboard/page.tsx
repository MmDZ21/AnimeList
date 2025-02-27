import React, { Suspense } from "react";
import UserInfo from "@/components/dashboard/UserInfo";

import {
  Tabs as CustomTabs,
  TabsList as CustomTabsList,
  TabsTrigger as CustomTabsTrigger,
  TabsContent as CustomTabsContent,
} from "@/components/ui/custom-tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dashboardRoutes } from "@/constants";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export default async function Page() {
  return (
    <>
      {/* Main Dashboard Content */}
      <div className="w-full flex flex-col items-center gap-4 lg:gap-6 max-w-[1280px] pb-4 -mt-12 lg:-mt-44 z-20 lg:px-4">
        {/* User Info */}
        <UserInfo />
        {/* Mobile Tabs (CustomTabs) */}
        <CustomTabs
          defaultValue={dashboardRoutes[0].value}
          className="w-full lg:hidden"
        >
          <CustomTabsList className="w-full dark:bg-transparent border-b border-[hsla(215,20%,65%,0.24)] flex justify-between px-4">
            {dashboardRoutes.map((route) => (
              <CustomTabsTrigger
                key={route.value}
                value={route.value}
                className={cn(
                  "px-0 py-3",
                  route.value === "settings" && "hidden"
                )}
              >
                {route.label}
              </CustomTabsTrigger>
            ))}
          </CustomTabsList>

          {dashboardRoutes.map((route) => (
            <CustomTabsContent
              key={route.value}
              value={route.value}
              className={cn("", route.value === "settings" && "hidden")}
            >
              <div className="px-4 flex flex-col gap-2 animate-fade-right">
                <route.content />
              </div>
            </CustomTabsContent>
          ))}
        </CustomTabs>

        {/* Desktop Tabs (ShadCN Tabs) */}
        <Tabs
          defaultValue={dashboardRoutes[0].value}
          className="w-full hidden lg:block"
        >
          <TabsList className="w-full h-fit dark:text-white justify-start dark:bg-[#17212B] rounded-lg p-1 gap-2">
            {dashboardRoutes.map((route) => (
              <TabsTrigger
                key={route.value}
                value={route.value}
                className="text-base font-semibold w-40 py-3 rounded-lg dark:data-[state=active]:bg-background"
              >
                {route.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {dashboardRoutes.map((route) => (
            <TabsContent key={route.value} value={route.value}>
              <div className="px-4 flex flex-col gap-4 py-4 lg:px-0 lg:py-2 animate-fade-right">
                <route.content />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
