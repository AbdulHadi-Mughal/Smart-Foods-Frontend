import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/types/cart.type";
import { cartStore } from "@/stores/cart.store";
import { Link } from "react-router-dom";

interface CartUpdateDialogProps {
  sameCartOpen: boolean;
  onClose: (cancel: boolean) => void;
  newItem: CartItem | null;
}

export function CartUpdateDialog({
  sameCartOpen,
  onClose,
  newItem,
}: CartUpdateDialogProps) {
  const { editItem } = cartStore();

  if (!newItem) return null;

  const handleUpdate = () => {
    editItem(newItem);
    onClose(false);
  };

  return (
    <Dialog open={sameCartOpen} onOpenChange={() => onClose(true)}>
      <DialogContent aria-describedby="dialog-description">
        <DialogTrigger onClick={() => onClose(true)}></DialogTrigger>
        <DialogHeader>
          <DialogTitle>Item Already in Cart</DialogTitle>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          The item <strong>{newItem.name}</strong> is already in your cart. Do
          you want to update it with the new details?
          <Link to="/cart" className="underline ml-1">
            See Cart
          </Link>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onClose(true)}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>Update Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
