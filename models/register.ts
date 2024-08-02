import { z } from "zod";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

const registrationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل خود را وارد کنید" })
    .email({ message: "ایمیل وارد شده صحیح نیست" }),
  password: z
    .string()
    .min(8, { message: "حداقل شامل ۸ کرکتر باشد" })
    .regex(/.*[a-z].*/, { message: "دارای یک حرف کوچک باشد" })
    .regex(/.*[A-Z].*/, { message: "دارای یک حرف بزرگ باشد" })
    .regex(/.*\d.*/, { message: "دارای یک رقم باشد" }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
export default registrationSchema;
