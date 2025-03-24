"use server";

import { RegisterDocument, RegisterMutation, RegisterMutationVariables } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import registrationSchema from "@/models/register";

export default async function register(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  try {
    const { data, errors } = await getAuthClient().mutate<RegisterMutation,RegisterMutationVariables>({
      mutation: RegisterDocument,
      variables: {
        input: {
          name,
          email,
          password,
          password_confirmation: confirmPassword,
        },
      },
    });
    if (errors || data?.register.status !== "SUCCESS") {
      return {
        success: false,
        error:"مشکلی پیش اومد",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: "مشکلی در ثبت نام پیش اومد" };
  }
}
