// Writing in modular format for better readability

import { email, object, string, type infer as zInfer } from "zod";

export const usernameSchema = string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be at most 20 characters");

export const emailSchema = email("Invalid email format");

export const passwordSchema = string().min(
  6,
  "Password must be at least 6 characters"
);

export const citySchema = string().min(
  2,
  "City name must be at least 2 characters"
);

export const phoneNumberSchema = string()
  .transform((v) => v.trim())
  .optional()
  .refine(
    (val) => !val || /^[0-9]{10,15}$/.test(val), // if value exists, validate format
    {
      message: "Phone number must be 10–15 digits",
    }
  );

export const signupSchema = object({
  username: usernameSchema,

  email: emailSchema,
  password: passwordSchema,
  confirmPassword: string(),
  city: citySchema,
  phoneNumber: phoneNumberSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignupFormData = zInfer<typeof signupSchema>;
