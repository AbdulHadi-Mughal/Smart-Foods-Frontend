import { toast } from "sonner";

export const successToast = (message: string) =>
  toast.success(message, {
    duration: 3000,
    style: {
      backgroundColor: "#05df72",
      fontWeight: "bold",
    },
  });

export const errorToast = (message: string) =>
  toast.error(message, {
    duration: 3000,
    style: {
      backgroundColor: "#b22222",
      color: "#faf9f6",
      fontWeight: "bold",
    },
  });

export const infoToast = (message: string) =>
  toast.info(`${message} functionality is coming soon.`, {
    duration: 3000,
    style: {
      backgroundColor: "#1e90ff",
      color: "#faf9f6",
      fontWeight: "bold",
    },
  });
