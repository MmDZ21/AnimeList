"use server";
import { BuyMembershipDocument, BuyMembershipMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import { redirect } from "next/navigation";

export default async function membership(formData: FormData) {
  const client = getAuthClient();
  const { data, errors} = await client.mutate<BuyMembershipMutation>({
    mutation: BuyMembershipDocument,
    variables:{
        input:{
            membership_id:Number(formData.get("membershipId")),
        }
    }
  });
  if (errors) {
    console.error("Error buying membership:", errors);
    throw new Error("Error buying membership");
  }
}