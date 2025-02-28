import { z } from "zod";

export const RegisterFormSchema = z.object({
  // min and max use errors mesage pattern from Zod
  userName: z.string().min(3,).max(20).regex(/^[A-Za-z0-9]+$/),
  email: z.string().email(),
  // Specify custom error message for min and max
  password: z.string().min(8, "Password me bt at lease 8 characters").max(20, "Maximum is 20 characters").regex(/^[A-Za-z0-9]+$/),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "The passwords do not match",
  path: ["confirmPassword"]
});