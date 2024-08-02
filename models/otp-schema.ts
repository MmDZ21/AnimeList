import { z } from "zod";

const otpSchema = z.object({
  otp: z
    .string()
    .min(4, { message: "کد تایید باید حداقل ۴ رقم باشد" })
    .max(6, { message: "کد تایید باید حداکثر ۶ رقم باشد" })
    .regex(/^\d+$/, { message: "کد تایید باید فقط شامل اعداد باشد" }),
});

export default otpSchema;
