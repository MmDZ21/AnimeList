import { z } from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const registrationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "لطفا ایمیل خود را وارد کنید" })
      .email({ message: "ایمیل وارد شده صحیح نیست" }),

    name: z.string().min(1, { message: "لطفا نام خود را وارد نمایید" }),

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
  
export type RegistrationSchema = z.infer<typeof registrationSchema>;
export default registrationSchema;
