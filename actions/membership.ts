"use server";
import { BuyMembershipDocument, BuyMembershipMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import { redirect } from "next/navigation";

export default async function membership(id: string) {
try {
  const client = getAuthClient();
  const { data, errors} = await client.mutate<BuyMembershipMutation>({
    mutation: BuyMembershipDocument,
    variables:{
        input:{
            membership_id:Number(id),
        }
    }
  })
  if(errors){
    return {
      success : false,
      message : "server error"
    }
  }
  if(data?.buyMembership.status !== "OK"){
    return {
      success: false,
      message: data?.buyMembership.message
    }
  }
    return {
      success : true
    }

} catch (error) {
  return {
    success: false,
    message:"server error"
  }
}
}