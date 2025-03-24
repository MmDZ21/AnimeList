"use server";
import { PayReqDocument, PayReqMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import { redirect } from "next/navigation";

export default async function payReq(formData: FormData) {
  const client = getAuthClient();
  const { data, errors } = await client.mutate<PayReqMutation>({
    mutation: PayReqDocument,
    variables: {
      input: {
        amount: Number(formData.get("amount")),
        callback_url: process.env.WEBSITE_URL + "/dashboard/payment",
      },
    },
  });
  if (errors) {
    console.error("Error fetching dashboard data:", errors);
    throw new Error("Error fetching dashboard data");
  }

  redirect(data?.createPaymentRequest.redirect_url || "/404");
}
