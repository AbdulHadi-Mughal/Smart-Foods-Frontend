"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/types/cart.type";
import { cartStore } from "@/stores/cart.store";

interface CartUpdateDialogProps {
  open: boolean;
  onClose: () => void;
  newItem: CartItem | null;
}

export function CartUpdateDialog({
  open,
  onClose,
  newItem,
}: CartUpdateDialogProps) {
  const { editItem } = cartStore();

  if (!newItem) return null;

  const handleUpdate = () => {
    editItem(newItem);
    onClose();
  };

  console.log(open);

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Item Already in Cart</DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          The item <strong>{newItem.name}</strong> is already in your cart. Do
          you want to update it with the new details or cancel this action?
        </p>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>Update Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
