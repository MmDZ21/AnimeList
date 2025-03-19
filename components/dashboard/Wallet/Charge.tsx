"use client";
import { Button } from "@/components/ui/button";
import { walletChargeOptions } from "@/constants";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import payReq from "@/actions/payReq";

export default function Charge() {
  const [option, setOption] = useState<string>("1");

  return (
    <form action={payReq} className="w-full flex flex-col gap-4 px-2 py-3">
      <p className="text-base font-bold">مبلغ شارژ را انتخاب کنید</p>
      <div className="w-full lg:flex grid grid-cols-2 py-2 gap-4">
        {walletChargeOptions.map((value) => (
          <Button
            type="button" // ✅ Prevents form submission
            onClick={() => setOption(value)}
            className={cn(
              "bg-background w-full py-3 text-center cursor-pointer text-sm",
              option === value && "bg-primary-500"
            )}
            key={value}
          >
            {value === "custom" ? "مبلغ دلخواه" : value}{" "}
            {value !== "custom" && "دلار"}
          </Button>
        ))}
      </div>
      {option === "custom" && (
        <div className="w-full flex justify-center items-center">
          <div className="w-1/3 space-y-2 text-center">
            <Label htmlFor="amount">مبلغ شارژ به دلار</Label>
            <Input name="amount" type="number" className="w-full" />
          </div>
        </div>
      )}
      <input type="hidden" name="amount" value={option} />
      <Button type="submit" className="w-1/3 m-auto">پرداخت</Button>
    </form>
  );
}
