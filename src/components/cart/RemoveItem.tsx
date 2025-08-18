import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/stores/cart.store";
import { successToast } from "../global/Toasts";

interface RemoveItemProps {
  RemoveDialogOpen: boolean;
  onClose: () => void;
  name: string;
}

export function RemoveItem({
  RemoveDialogOpen,
  onClose,
  name,
}: RemoveItemProps) {
  const { removeItem } = cartStore();

  if (!name) return null;

  const handleRemove = () => {
    removeItem(name);
    successToast(`Removed ${name} from cart.`);
    onClose();
  };

  return (
    <Dialog open={RemoveDialogOpen} onOpenChange={onClose}>
      <DialogContent aria-describedby="dialog-description">
        <DialogTrigger></DialogTrigger>
        <DialogHeader>
          <DialogTitle>Remove Cart</DialogTitle>
        </DialogHeader>

        <div className="text-sm text-muted-foreground">
          Are you sure you want to remove <strong>{name}</strong> from cart?
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button onClick={handleRemove}>Remove Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
