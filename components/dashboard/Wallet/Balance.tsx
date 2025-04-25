import { fetchBalance } from "@/actions/fetchBalance";
import { GetUserInfoDocument, GetUserInfoQuery } from "@/generated/graphql";
import React from "react";
import { delay } from "../utils";

export default async function Balance() {
    const data = await fetchBalance()
  return (
    <div className="bg-background px-6 py-2 text-center text-primary-500 font-bold text-base rounded-lg">
      {data.me.balance} تومان
    </div>
  );
}
