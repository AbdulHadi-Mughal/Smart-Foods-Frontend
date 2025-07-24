import type { FormEvent } from "react";
import SignupForm from "../components/SignupForm";

function SignupPage() {
  const createUser = async (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData);
    const { name, email, password } = formObject;
    console.log(formObject);
    if (formObject.password !== formObject.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      console.log(formObject);
      console.log(import.meta.env.VITE_SERVER_BASE_URL);
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name, email: email, password }),
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
      <div className="w-full h-screen">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createUser(e);
              }}
            >
              <SignupForm />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
