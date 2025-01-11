import NotifTable from "@/components/dashboard/notifications/NotifTable";
import NotifCard from "@/components/layout/cards/NotifCard";
import { dawn } from "@/constants";

import React from "react";

export default async function page() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:hidden">
        {dawn.notifications.map((notif, i) => (
          <NotifCard data={notif} key={i} />
        ))}
      </div>
      <NotifTable data={dawn.notifications} />
    </>
  );
}
