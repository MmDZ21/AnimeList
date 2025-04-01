"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export default async function login(email: string, password: string) {
   try {
      // Try signing in using the provided credentials
      await signIn("credentials", {
         email,
         password,
         redirect: false
      });
      return {
         success: true
      }
      // If successful, redirect to the dashboard.
    } catch (error: any) {
      if (isRedirectError(error)) {
         throw error ;
       }
      return { success: false};
    }
  }

// import { LOGIN_MUTATION } from "@/graphql/mutations/login";
// import { makeClient } from "@/lib/apollo-login";

// import emailLoginSchema from "@/models/email-login";
// import { z } from "zod";

// export const login = async (data: z.infer<typeof emailLoginSchema>) => {
//   console.log("logging in with: ", { data });
//   // Validate data against the schema
//   const parsedData = emailLoginSchema.safeParse(data);

//   if (!parsedData.success) {
//     throw new Error("Invalid input");
//   }
//   try {
//     console.log("trying to login...");
//     const { data, errors } = await makeClient().mutate({
//       mutation: LOGIN_MUTATION,
//       variables: {
//         input: {
//           username: parsedData.data.email,
//           password: parsedData.data.password,
//         },
//       },
//     });
//     if (errors) {
//       throw errors;
//     }
//     console.log("logged in: ", { data });
//     if (data.login && data.login.user) {
//       console.log("making session...");
//     } else {
//       return null;
//     }
//   } catch (error) {
//     return null;
//   }
// };
