import React from "react";
import payVer from "@/actions/payVer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

interface PaymentCallbackProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function PaymentCallback({
  searchParams,
}: PaymentCallbackProps) {
  const trackId = (await searchParams).trackId;
  const success = (await searchParams).success;
  let message = "تراکنشی یافت";
  let icon = undefined;

  if (trackId && success === "1") {
    try {
      const result = await payVer(trackId);
      if (result && result.status === "OK") {
        message = `کیف پول شما با موفقیت شارژ شد`;
        icon = <CheckCircledIcon className="size-12 text-green-500" />;
      } else {
        message = `پرداخت ناموفق`;
        icon = <CrossCircledIcon className="size-12 text-red-600" />;
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      message = "خطا در تایید تراکنش";
      icon = <CrossCircledIcon className="size-12 text-red-600" />;
    }
  }

  return (
    <div className="bg-[#17212B] -mt-12 z-50 rounded-lg p-4 flex flex-col gap-4 w-1/4">
      <div className="flex flex-col gap-4 justify-center items-center">
        {icon}
        <h1 className="font-bold text-base">{message}</h1>
      </div>
      <Button asChild>
        <Link href={"/dashboard"}>بازگشت</Link>
      </Button>
    </div>
  );
}
