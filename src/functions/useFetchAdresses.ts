import { errorToast } from "../components/global/Toasts";

export const UseFetchAddresses = async () => {
  try {
    const data = await fetch(
      import.meta.env.VITE_API_BASE_URL + "/users/address",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const response = await data.json();
    if (!data.ok) {
      return errorToast("Failed to fetch addresses");
    }
    return response;
  } catch {
    errorToast("Failed to fetch addresses");
  }
};
