import { useForm } from "react-hook-form";
import type { Address } from "../../types/user.type";
import {
  addressSchema,
  type AddressForm,
} from "../../lib/zodSchemas/address.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { errorToast, successToast } from "../global/Toasts";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export function AddressUpdater({
  allAddresses,
  setAllAddresses,
  open,
  onClose,
  onUpdated,
  initialAddress,
  mode,
}: {
  allAddresses: Address[];
  setAllAddresses: React.Dispatch<React.SetStateAction<Address[]>>;
  open: boolean;
  onClose: (open: boolean) => void;
  onUpdated: () => Promise<void>;
  initialAddress?: Address;
  mode: "add" | "edit";
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<AddressForm>({
    resolver: zodResolver(addressSchema),
    defaultValues: initialAddress,
  });

  useEffect(() => {
    if (mode === "edit" && initialAddress) {
      reset(initialAddress);
      setValue("province", initialAddress.province);
    }
  }, [initialAddress, mode, reset, setValue]);

  const onSubmit = async (data: AddressForm) => {
    if (isSubmitting) return;

    if (mode === "edit" && initialAddress) {
      if (
        data.area === initialAddress.area &&
        data.street === initialAddress.street &&
        data.city === initialAddress.city &&
        data.postalCode === initialAddress.postalCode &&
        data.province === initialAddress.province
      ) {
        errorToast("No changes detected. Please modify the address.");
        return;
      }
    }

    const existingAddress = allAddresses.find(
      (addr) =>
        addr.area === data.area &&
        addr.street === data.street &&
        addr.city === data.city &&
        addr.postalCode === data.postalCode &&
        addr.province === data.province
    );

    if (existingAddress) {
      errorToast("Address already exists. Please check your entries.");
      return;
    }

    try {
      const method = mode === "edit" ? "PUT" : "POST";
      const url =
        mode === "edit"
          ? `/users/address/${initialAddress?._id}`
          : `/users/address`;

      const response = await fetch(import.meta.env.VITE_API_BASE_URL + url, {
        method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 409) {
          errorToast("Address already exists. Please check your entries.");
        } else if (response.status === 404) {
          errorToast("Address not found. Please refresh the page.");
        } else if (response.status === 400) {
          errorToast("Invalid address data.");
        } else if (response.status === 401) {
          errorToast("Unauthorized. Please log in again.");
        } else {
          errorToast("An unexpected error occurred.");
        }
        return;
      }

      const result = await response.json();
      successToast(mode === "edit" ? "Address updated." : "Address added.");

      setAllAddresses((prev) => {
        if (mode === "edit" && initialAddress) {
          return prev.map((addr) =>
            addr._id === initialAddress._id ? result : addr
          );
        } else {
          return [...prev, result];
        }
      });

      onClose(false);
      onUpdated?.();
    } catch (err) {
      console.error(err);
      errorToast(`Failed to ${mode === "edit" ? "update" : "add"} address.`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>
          <div className="text-xl font-semibold text-center">
            {mode === "edit" ? "Edit Address" : "Add New Address"}
          </div>
        </DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Area */}
          <div className="grid gap-2">
            <Label htmlFor="area">Area</Label>
            <Input
              id="area"
              placeholder="Detailed Area"
              {...register("area")}
            />
            {errors.area && (
              <p className="text-sm text-red-600">{errors.area.message}</p>
            )}
          </div>

          {/* Street */}
          <div className="grid gap-2">
            <Label htmlFor="street">Street</Label>
            <Input
              id="street"
              placeholder="e.g., Street No. 12"
              {...register("street")}
            />
            {errors.street && (
              <p className="text-sm text-red-600">{errors.street.message}</p>
            )}
          </div>

          {/* City + Postal Code side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="e.g., Lahore"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                placeholder="e.g., 54000"
                {...register("postalCode")}
              />
              {errors.postalCode && (
                <p className="text-sm text-red-600">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>

          {/* Province */}
          <div className="grid gap-2">
            <Label htmlFor="province">Province</Label>
            <Select
              defaultValue={initialAddress?.province}
              onValueChange={(value) =>
                setValue("province", value as AddressForm["province"])
              }
            >
              <SelectTrigger id="province">
                <SelectValue placeholder="Select Province" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Punjab",
                  "Sindh",
                  "Khyber Pakhtunkhwa",
                  "Balochistan",
                  "Islamabad Capital Territory",
                  "Gilgit-Baltistan",
                  "Azad Jammu and Kashmir",
                ].map((prov) => (
                  <SelectItem key={prov} value={prov}>
                    {prov}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.province && (
              <p className="text-sm text-red-600">{errors.province.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? mode === "edit"
                  ? "Updating..."
                  : "Adding..."
                : mode === "edit"
                ? "Update"
                : "Add"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
