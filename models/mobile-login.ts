import { z } from "zod";

const phoneNumberPattern = /^09\d{9}$/;

const mobileLoginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "لطفا تلفن همراه خود را وارد کنید" })
    .regex(phoneNumberPattern, {
      message: "تلفن همراه وارد شده صحیح نیست.",
    }),
});

export default mobileLoginSchema;
