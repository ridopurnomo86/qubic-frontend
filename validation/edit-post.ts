import { z } from "zod";

export type EditPostValidationType = z.infer<typeof EditPostValidation>;

export const EditPostValidation = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});
