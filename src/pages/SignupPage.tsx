import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupForm from "../components/auth/SignupForm";
import {
  signupSchema,
  type SignupFormData,
} from "../lib/zodSchemas/signup.schema";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { errorToast, successToast } from "../components/global/Toasts";
import { useUserStore } from "@/stores/user.store";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [userExists, setUserExists] = useState<boolean>(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const RedirectionURL = searchParams.get("from");

  const { setProfile } = useUserStore();

  const onSubmit = async (formData: SignupFormData) => {
    const { username, email, password, city, phoneNumber } = formData;

    try {
      const body = JSON.stringify({
        username: username.toString().trim(),
        email: email.toString().trim().toLowerCase(),
        password: password.toString().trim(),
        city: city.toString().trim(),
        phoneNumber: phoneNumber
          ?.toString()
          .trim()
          .replaceAll(" ", "")
          .replaceAll("-", ""),
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUserExists(false);
        setProfile("customer");
        successToast("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate(RedirectionURL || "/");
        }, 1000);
      } else if (data && data.existingUser) {
        setUserExists(true);
      } else if (response.status === 400) {
        errorToast("Signup failed! Please try again later.");
      } else {
        errorToast("Something went wrong! Please try again later.");
      }
    } catch {
      errorToast("Something went wrong! Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <SignupForm
              register={register}
              errors={errors}
              existingUser={userExists}
              setUserExists={setUserExists}
              isSubmitting={isSubmitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
