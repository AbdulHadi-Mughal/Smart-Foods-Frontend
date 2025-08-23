import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define state shape
interface UserState {
  profile: "customer" | "admin" | "guest";
  setProfile: (value: UserState["profile"]) => void;
}

// Create store
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: "guest",
      setProfile: (value) => set({ profile: value }),
    }),
    {
      name: "user-storage", // key in localStorage
    }
  )
);
