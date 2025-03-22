import { z } from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const updatePasswordSchema = z
  .object({    
    oldPassword:z
    .string(),
    password: z
      .string()
      .min(8, { message: "حداقل شامل ۸ کرکتر باشد" })
      .regex(/.*[a-z].*/, { message: "دارای یک حرف کوچک باشد" })
      .regex(/.*[A-Z].*/, { message: "دارای یک حرف بزرگ باشد" })
      .regex(/.*\d.*/, { message: "دارای یک رقم باشد" }),
    confirmPassword: z.string().min(1, { message: "لطفا تایید رمز عبور را وارد کنید" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"], // Show error next to confirm password field
  });
  
export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
export default updatePasswordSchema;
