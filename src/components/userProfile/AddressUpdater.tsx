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

import "@geoapify/geocoder-autocomplete/styles/round-borders.css";

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

  // Reset form on edit
  useEffect(() => {
    if (mode === "edit" && initialAddress) {
      reset(initialAddress);
      setValue("province", initialAddress.province);
    }
  }, [initialAddress, mode, reset, setValue]);

  const onSubmit = async (data: AddressForm) => {
    if (isSubmitting) return;

    // Prevent submission if no changes
    if (mode === "edit" && initialAddress) {
      const unchanged =
        data.house_building === initialAddress.house_building &&
        data.street_area === initialAddress.street_area &&
        data.city === initialAddress.city &&
        data.postalCode === initialAddress.postalCode &&
        data.province === initialAddress.province;

      if (unchanged) {
        errorToast("No changes detected. Please modify the address.");
        return;
      }
    }

    // Prevent duplicate
    const existingAddress = allAddresses.find(
      (addr) =>
        addr.house_building === data.house_building &&
        addr.street_area === data.street_area &&
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
          : "/users/address";

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
          {/* House/Building */}
          <div className="grid gap-2">
            <Label htmlFor="house_building">House / Building</Label>
            <Input
              autoComplete="address-line1"
              id="house_building"
              placeholder="e.g. Block No. 4 House No. 18"
              {...register("house_building")}
            />

            {errors.house_building && (
              <p className="text-sm text-red-600">
                {errors.house_building.message}
              </p>
            )}
          </div>

          {/* Street/Area */}
          <div className="grid gap-2">
            <Label htmlFor="street">Area / Street</Label>
            <Input
              autoComplete="address-line2"
              id="street"
              placeholder="e.g. Fort Road"
              {...register("street_area")}
            />
            {errors.street_area && (
              <p className="text-sm text-red-600">
                {errors.street_area.message}
              </p>
            )}
          </div>

          {/* City + Postal Code */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                autoComplete="address-level2"
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
                autoComplete="postal-code"
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
              autoComplete="address-level1"
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
