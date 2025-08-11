import { useEffect } from "react";

export const useServerWarmup = () => {
  useEffect(() => {
    const warmupServer = async () => {
      try {
        await fetch(import.meta.env.VITE_API_BASE_URL + "/warmup");
      } catch {
        /* empty */
      }
    };
    setInterval(() => {
      warmupServer();
    }, 1000 * 60 * 5); // 5 minutes
    warmupServer();
  }, []);
};
