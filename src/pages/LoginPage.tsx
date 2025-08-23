import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm } from "../components/auth/LoginForm";
import {
  loginSchema,
  type LoginFormData,
} from "../lib/zodSchemas/login.schema";
import { useNavigate, useSearchParams } from "react-router-dom";
import { errorToast, successToast } from "../components/global/Toasts";
import { useState } from "react";
import { useUserStore } from "@/stores/user.store";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [invalid, setInvalid] = useState<boolean>(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const RedirectionURL = searchParams.get("from");

  const { setProfile } = useUserStore();

  const loginUser = async (data: LoginFormData) => {
    try {
      const body = JSON.stringify({
        email: data.email.trim().toLowerCase(),
        password: data.password,
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/login`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body,
        }
      );
      if (response.ok) {
        setProfile("customer");
        successToast("Login successful! Redirecting...");
        setTimeout(() => {
          navigate(RedirectionURL || "/");
        }, 1000);
      } else {
        if (response.status === 400) {
          setInvalid(true);
        } else {
          errorToast("Login failed! Please try again later.");
        }
      }
    } catch {
      errorToast("Login failed! Please try again later.");
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit(loginUser)}>
            <LoginForm
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              invalid={invalid}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
