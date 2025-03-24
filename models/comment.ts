import { z } from "zod";

const commentSchema = z.object({
  text: z
    .string()
    .min(1, "لطفا نظر خود را بنویسید")
    .max(500, "متن نظر نمی‌تواند بیش از ۵۰۰ حرف باشد"),
  containsSpoiler: z.boolean().default(false), // Checkbox for spoilers
  emojis: z.array(z.string()).optional(), // Array of emoji strings
  attachments: z.array(z.string()).optional(), // Array of file paths or URLs
});
export type CommentSchema = z.infer<typeof commentSchema>;

export default commentSchema;
