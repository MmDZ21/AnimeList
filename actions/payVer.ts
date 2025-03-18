"use server"

import { PayVerDocument, PayVerMutation } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";

export default async function verifyPayment(trackId: string) {
    const client = getAuthClient();
    try {
      const { data } = await client.mutate<PayVerMutation>({
        mutation: PayVerDocument,
        variables: {
          input: { trackId },
        },
      });
      return data?.verifyPaymentRequest; // returns an object with status and message
    } catch (error) {
      console.error("Error verifying payment:", error);
      throw error;
    }
  }