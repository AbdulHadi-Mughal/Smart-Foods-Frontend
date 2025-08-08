import { useEffect } from "react";

export const useServerWarmup = () => {
  useEffect(() => {
    const warmupServer = async () => {
      try {
        await fetch(import.meta.env.VITE_API_BASE_URL + "/warmup");
      } catch (error) {
        console.error("Error warming up server:", error);
      }
    };
    setInterval(() => {
      warmupServer();
    }, 1000 * 60 * 5); // 5 minutes
  }, []);
};
