import { object, string, enum as zEnum, type infer as zInfer } from "zod";

const provinceOptions = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Jammu and Kashmir",
] as const;

export const addressSchema = object({
  area: string()
    .trim()
    .min(5, "Area must be at least 5 characters.")
    .max(100, "Area must be at most 100 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "Area contains invalid characters.",
    }),

  street: string()
    .trim()
    .min(5, "Street must be at least 5 characters.")
    .max(100, "Street must be at most 100 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "Street contains invalid characters.",
    }),

  city: string()
    .trim()
    .min(2, "City must be at least 2 characters.")
    .max(50, "City must be at most 50 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "City contains invalid characters.",
    }),

  province: zEnum(provinceOptions),

  postalCode: string()
    .trim()
    .length(5, "Postal code must be exactly 5 digits."),
});

export type AddressForm = zInfer<typeof addressSchema>;
