"use server";
import { PayReqDocument, PayReqMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import { redirect } from "next/navigation";

export default async function payReq(formData: FormData) {
  console.log(JSON.stringify(formData))
  const client = getAuthClient();
  const { data, errors} = await client.mutate<PayReqMutation>({
    mutation: PayReqDocument,
    variables:{
        input:{
          amount:Number(formData.get("amount")),
          callback_url:"http://localhost:3000/dashboard"
        }
    }
  });
  if (errors) {
    console.error("Error fetching dashboard data:", errors);
    throw new Error("Error fetching dashboard data");
  }

  redirect(data?.createPaymentRequest.redirect_url || "/404")
}