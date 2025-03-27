import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { membershipPlans } from "@/constants";
import SubscriptionTab from "./SubscriptionTab";

export default function SubscriptionDesktop() {
  return (
    <Tabs defaultValue="2">
      {membershipPlans.map((plan) => (
        <TabsContent value={plan.value} key={plan.value}>
          <SubscriptionTab plan={plan} />
        </TabsContent>
      ))}

      <div className="w-full flex justify-end items-center">
        <TabsList className="rounded-lg h-[56px] w-[350px] gap-[10px] -mt-14  bg-[#242F3D]">
          <TabsTrigger
            value="1"
            className="h-12 w-1/3 text-base font-semibold text-white  data-[state=active]:bg-background"
          >
            ۳۰ روزه
          </TabsTrigger>
          <TabsTrigger
            value="2"
            className="h-12 w-1/3 text-base font-semibold text-white  data-[state=active]:bg-background"
          >
            ۶۰ روزه
          </TabsTrigger>
          <TabsTrigger
            value="3"
            className="h-12 w-1/3 text-base font-semibold text-white  data-[state=active]:bg-background"
          >
            ۹۰ روزه
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}
