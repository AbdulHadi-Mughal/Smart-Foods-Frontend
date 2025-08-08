// src/lib/schemas/login-schema.ts

import { email, object, string, type infer as zInfer } from "zod";

export const loginSchema = object({
  email: email("Not a valid email address"),

  password: string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = zInfer<typeof loginSchema>;
