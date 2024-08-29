"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
      onValueChange={(value) => router.push(`/dashboard/${value}`)}
    >
      <TabsList>
        <TabsTrigger value="dashboard">داشبورد</TabsTrigger>
        <TabsTrigger value="anime-list">لیست انیمه‌ها</TabsTrigger>
        <TabsTrigger value="favorites">علاقه‌مندی‌ها</TabsTrigger>
        <TabsTrigger value="settings">تنظیمات</TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard">
        {activeTab === "dashboard" && children}
      </TabsContent>
      <TabsContent value="anime-list">
        {activeTab === "anime-list" && children}
      </TabsContent>
      <TabsContent value="favorites">
        {activeTab === "favorites" && children}
      </TabsContent>
      <TabsContent value="settings">
        {activeTab === "settings" && children}
      </TabsContent>
    </Tabs>
  );
}
