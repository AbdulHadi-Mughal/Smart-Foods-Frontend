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
  house_building: string()
    .trim()
    .nonempty("House or Building No. is required.")
    .min(5, "House or Building No. must be at least 5 characters.")
    .max(100, "House or Building No. must be at most 100 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "House or Building No. contains invalid characters.",
    }),

  street_area: string()
    .trim()
    .nonempty("Street or Area is required.")
    .min(5, "Street or Area must be at least 5 characters.")
    .max(100, "Street or Area must be at most 100 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "Street or Area contains invalid characters.",
    }),

  city: string()
    .trim()
    .nonempty("City is required.")
    .min(2, "City must be at least 2 characters.")
    .max(50, "City must be at most 50 characters.")
    .refine((s) => /^[\p{L}0-9\s,.'\-#]+$/u.test(s), {
      message: "City contains invalid characters.",
    }),

  province: zEnum(provinceOptions, { message: "Province is required." }),

  postalCode: string()
    .trim()
    .nonempty("Postal code is required.")
    .length(5, "Postal code must be exactly 5 digits."),
});

export type AddressForm = zInfer<typeof addressSchema>;
