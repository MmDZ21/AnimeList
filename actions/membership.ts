"use server";
import { BuyMembershipDocument, BuyMembershipMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";

export default async function membership(formData: FormData) {
  console.log(JSON.stringify(formData))
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