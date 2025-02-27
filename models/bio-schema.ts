import { z } from "zod";

export const BioFormSchema = z.object({
  bio: z
    .string()
    .min(1, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})