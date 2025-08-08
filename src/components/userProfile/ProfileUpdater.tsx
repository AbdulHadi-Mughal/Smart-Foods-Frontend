import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import type { EditableField } from "./ProfileInfo";
import { errorToast, successToast } from "../global/Toasts";
import { DialogTitle } from "@radix-ui/react-dialog";
import type { User } from "../../types/user.type";
import {
  citySchema,
  phoneNumberSchema,
  usernameSchema,
} from "../../lib/zodSchemas/signup.schema";
import type { ZodTypeAny } from "zod";

// Import individual schemas

export type ChangeProfileProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  field: EditableField;
  currentValue: string;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
};

type EditableFields = {
  username: string;
  city: string;
  phoneNumber?: string;
  restaurant?: string;
};

// Map each field to its validator
const fieldValidators: Record<keyof EditableFields, ZodTypeAny> = {
  username: usernameSchema,
  city: citySchema,
  phoneNumber: phoneNumberSchema,
  restaurant: usernameSchema, // Replace with restaurant-specific schema if available
};

export function ProfileUpdater({
  isOpen,
  setIsOpen,
  field,
  currentValue,
  setProfile,
}: ChangeProfileProps) {
  const [newValue, setNewValue] = useState(currentValue);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = async () => {
    if (loading) return;

    //  Validate field before sending request
    const validator = fieldValidators[field];
    if (validator) {
      const result = validator.safeParse(newValue);
      if (!result.success) {
        setErrorMsg(result.error.issues[0].message);
        return;
      }
    }

    // No change check
    if (!newValue || newValue === currentValue) {
      setErrorMsg("No changes made.");
      return;
    }

    setErrorMsg(""); // clear error
    const body = JSON.stringify({ field, newValue });
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body,
        }
      );

      if (res.status === 200) {
        const data = await res.json();
        setProfile(data);
        successToast("Updated successfully.");
        setIsOpen(false);
      } else if (res.status === 400) {
        errorToast("Invalid data. Please check your input.");
      } else if (res.status === 401) {
        errorToast("Unauthorized. Please log in again.");
      } else if (res.status === 404) {
        errorToast("User not found. Please refresh the page.");
      } else {
        errorToast("Update failed. Please try again later.");
      }
    } catch {
      errorToast("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          Change {field}
        </Button>
      </DialogTrigger>
      <DialogTitle>Update {field}</DialogTitle>
      <DialogContent
        aria-describedby={undefined}
        className="border-2 border-gray-200 shadow-2xl"
      >
        <div className="space-y-4">
          <Label htmlFor={field} className="block font-semibold">
            {currentValue.length > 0 ? "Update " : "Enter"} {field}
          </Label>
          <Input
            id={field}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder={`Enter new ${field}...`}
          />
          {errorMsg && <p className="text-red-500 text-sm mt-1">{errorMsg}</p>}
          <div className="flex justify-between space-x-2">
            <p className="text-gray-600 text-sm mt-1">
              Avoid changing this frequently.
            </p>
            <Button disabled={loading} onClick={handleChange}>
              {loading ? "Updating..." : "Confirm"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileUpdater;
