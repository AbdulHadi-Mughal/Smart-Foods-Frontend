import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { useRef } from "react";
import type { SignupFormData } from "../../lib/zodSchemas/signup.schema";

type SignupFormProps = {
  register: UseFormRegister<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  existingUser: boolean;
  setUserExists: React.Dispatch<React.SetStateAction<boolean>>;
  isSubmitting: boolean;
};

export function SignupForm({
  register,
  errors,
  existingUser,
  setUserExists,
  isSubmitting,
}: SignupFormProps) {
  const phoneNumberRef = useRef(null);

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Create a New Account</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Username */}
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                {...register("username")}
                autoComplete="username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                autoComplete="email"
                id="email"
                type="email"
                placeholder="e.g: example@gmail.com"
                {...register("email")}
                onChange={() => {
                  if (existingUser) {
                    setUserExists(false);
                  }
                }}
              />
              {existingUser && (
                <p className="text-sm text-red-500">
                  User with this name or email already exists
                </p>
              )}
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                autoComplete="new-password"
                id="password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
              </div>
              <Input
                autoComplete="new-password"
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* City Name */}
            <div className="grid gap-3">
              <Label htmlFor="city">Your City Name</Label>
              <Input
                autoComplete="address-level2"
                id="city"
                type="text"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-sm text-red-500">{errors.city.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                autoComplete="tel-national"
                id="phoneNumber"
                type="text"
                placeholder="e.g: 0123456789 (Optional)"
                {...register("phoneNumber")}
                ref={phoneNumberRef}
                maxLength={15}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-3 mt-4">
              <Button type="submit" className="w-full">
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </div>

            {/* Redirect to login */}
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={"/sign-in"} className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignupForm;
