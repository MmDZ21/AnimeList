"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/custom-tabs";
import { dashboardRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

export default function RouteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Determine the active tab from the current route
  const activeTab = pathname.split("/")[2] || "dashboard";

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) =>
        value === "dashboard"
          ? router.push("/dashboard/")
          : router.push(`/dashboard/${value}`)
      }
      className="w-full"
    >
      <TabsList className="w-full dark:bg-transparent border-b border-[hsla(215,20%,65%,0.24)] flex justify-between px-4">
        {dashboardRoutes.map((route) => (
          <TabsTrigger
            key={route.value}
            value={route.value}
            className={cn(
              "px-0 py-3",
              route.value === "settings" && "hidden lg:inline-flex"
            )}
          >
            {route.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {dashboardRoutes.map((route) => (
        <TabsContent
          key={route.value}
          value={route.value}
          className={cn("", route.value === "settings" && "hidden lg:block")}
        >
          {activeTab === route.value && children}
        </TabsContent>
      ))}
    </Tabs>
  );
}
