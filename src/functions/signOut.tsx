import { errorToast } from "@/components/global/Toasts";

export const signOut = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_BASE_URL + "/users/logout",
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.ok;
  } catch {
    errorToast("Something went wrong! Please try again later.");
  }
};
