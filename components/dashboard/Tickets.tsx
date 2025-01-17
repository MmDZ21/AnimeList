import { columns } from "@/components/dashboard/tickets/columns";
import { TicketTable } from "@/components/dashboard/tickets/TicketTable";
import TicketCard from "@/components/layout/cards/TicketCard";

import { dawn } from "@/constants";
import React from "react";

export default async function Tickets() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:hidden">
        {dawn.tickets.map((ticket, i) => (
          <TicketCard data={ticket} key={i} />
        ))}
      </div>
      <TicketTable data={dawn.tickets} columns={columns} />
    </>
  );
}
