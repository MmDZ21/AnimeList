"use server";

import { signOut } from "@/auth";

export default async function logout(formData: FormData) {
      await signOut({
        redirectTo:"/"
      })
  }