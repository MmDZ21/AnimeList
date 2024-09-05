// "use server";

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
