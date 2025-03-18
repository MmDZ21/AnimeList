import React, { Suspense } from "react";
import Balance from "./Balance";
import Tips from "./Tips";
import Charge from "./Charge";
import Image from "next/image";

export default async function Wallet() {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h5 className="text-base font-bold text-white">موجودی کیف پول شما</h5>
         <Suspense fallback={
              <div className="bg-background px-6 py-2 text-center text-primary-500 font-bold text-base rounded-lg">
              <Image src={"svg/spinner.svg"} alt="موجودی" width={24} height={24}/>
            </div>
         }>
            <Balance />
         </Suspense>
        </div>
      </div>
      <Tips />
      <Charge />
    </div>
  );
}
