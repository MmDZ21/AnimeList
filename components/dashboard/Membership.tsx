import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Wallet from "./Wallet/Wallet";
import Sub from "./membership/Sub";

export default async function Membership() {
  return (
    <div className="w-full">
      <Tabs defaultValue="wallet" className="flex flex-col lg:flex-row gap-5 w-full">
        <TabsList className="lg:flex lg:flex-col inline-flex lg:h-fit h-12 lg:w-1/4 w-full rounded-lg lg:p-4 p-1 justify-center lg:gap-2 text-white  bg-[#17212B]">
          <TabsTrigger
            className="flex w-full items-center justify-center text-start lg:justify-start whitespace-nowrap rounded-lg px-4 py-2 text-base font-medium ring-offset-0 transition-all focus-visible:outline-none focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:shadow-none  focus-visible:ring-0  data-[state=active]:bg-background  data-[state=active]:text-white"
            value="wallet"
          >
            کیف پول
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full items-center justify-center text-start lg:justify-start whitespace-nowrap rounded-lg px-4 py-2 text-base font-medium ring-offset-0 transition-all focus-visible:outline-none focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-none  focus-visible:ring-0  data-[state=active]:bg-background  data-[state=active]:text-white"
            value="sub"
          >
            اشتراک
          </TabsTrigger>
        </TabsList>
        <div className="flex flex-col w-full lg:w-3/4 rounded-lg bg-[#17212B] p-4">
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
