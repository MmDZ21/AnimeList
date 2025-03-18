import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Wallet from "./Wallet/Wallet";
import Sub from "./membership/Sub";

export default async function Membership() {
  return (
    <div className="w-full">
      <Tabs defaultValue="wallet" className="flex gap-5 w-full">
        <TabsList className="flex flex-col h-fit w-1/4 rounded-lg p-4 gap-2 text-white bg-[#17212B] dark:bg-[#17212B] dark:text-white">
          <TabsTrigger
            className="flex w-full items-center justify-start whitespace-nowrap rounded-lg p-2 text-base font-medium ring-offset-0 transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-white data-[state=active]:shadow-none dark:focus-visible:ring-0 dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
            value="wallet"
          >
            کیف پول
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full items-center justify-start whitespace-nowrap rounded-lg p-2 text-base font-medium ring-offset-0 transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-white data-[state=active]:shadow-none dark:focus-visible:ring-0 dark:data-[state=active]:bg-background dark:data-[state=active]:text-white"
            value="sub"
          >
            اشتراک
          </TabsTrigger>
        </TabsList>
        <div className="flex flex-col w-3/4 rounded-lg bg-[#17212B] p-4">
          <TabsContent className="mt-0" value="wallet">
            <Wallet />
          </TabsContent>
          <TabsContent className="mt-0" value="sub">
            <Sub />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
