import { z } from "zod";

const emailLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل خود را وارد کنید" })
    .email({ message: "ایمیل وارد شده صحیح نیست" }),
  password: z.string().min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
  rememberMe: z.boolean().optional(),
});

export default emailLoginSchema;
