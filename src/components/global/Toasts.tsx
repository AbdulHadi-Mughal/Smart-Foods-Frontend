import { toast } from "sonner";

export const successToast = (message: string) =>
  toast.success(message, {
    duration: 3000,
  });

export const errorToast = (message: string) =>
  toast.error(message, {
    duration: 3000,
  });

export const infoToast = (message: string) =>
  toast.info(`${message} functionality is coming soon.`, {
    duration: 3000,
  });
