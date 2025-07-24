import type { FormEvent } from "react";
import { LoginForm } from "../components/LoginForm";

function LoginPage() {
  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      const data = await response.json();
      console.log("Response from server:", data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <>
      <div className="bg-zinc-900 w-full h-screen">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginUser(e);
              }}
            >
              <LoginForm />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
