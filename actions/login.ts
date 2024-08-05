"use server";

import { signIn } from "@/auth";
import emailLoginSchema from "@/models/email-login";
import { z } from "zod";

export const login = async (data: z.infer<typeof emailLoginSchema>) => {
  // Validate data against the schema
  const parsedData = emailLoginSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error("Invalid input");
  }

  // Sign in using credentials
  const result = await signIn("credentials", {
    redirect: false,
    email: parsedData.data.email,
    password: parsedData.data.password,
  });

  if (result?.error) {
    throw new Error(result.error);
  }

  return result;
};
