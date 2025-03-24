"use server";

import { UpdatePasswordDocument, UpdatePasswordMutation, UpdatePasswordMutationVariables } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
export default async function updatePassword(
  oldPassword: string,
  password: string,
  confirmPassword: string
) {
  try {
    const { data, errors } = await getAuthClient().mutate<UpdatePasswordMutation,UpdatePasswordMutationVariables>({
      mutation: UpdatePasswordDocument,
      variables: {
        input: {
            old_password:oldPassword,
          password,
          password_confirmation: confirmPassword,
        },
      },
    });
    if (errors || data?.updatePassword.status !== "PASSWORD_UPDATED") {
      return {
        success: false,
        error:"مشکلی پیش اومد",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Updating error:", error);
    return { success: false, error: "مشکلی در تغییر پسورد پیش اومد" };
  }
}
