import React from "react";
import SubscriptionDesktop from "@/components/SubscriptionDesktop";
import Subscription from "@/components/Subscription";

export default function Sub() {
  return (
    <>
      <div className="hidden lg:block">
        <SubscriptionDesktop />
      </div>
      <div className="block lg:hidden">
        <Subscription />
      </div>
    </>
  );
}
