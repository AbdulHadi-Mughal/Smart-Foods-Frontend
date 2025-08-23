import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "@/functions/signOut";
import { useUserStore } from "@/stores/user.store";
import { errorToast } from "./Toasts";

interface SignOutDialogProps {
  open: boolean;
  onClose: (cancel: boolean) => void;
}

export function SignOutDialog({ open, onClose }: SignOutDialogProps) {
  const { setProfile } = useUserStore();

  const handleSignOut = async () => {
    const ok = await signOut();
    if (!ok) {
      errorToast("Something went wrong! Please try again later.");
    } else {
      setProfile("customer");
      onClose(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => onClose(true)}>
      <DialogContent aria-describedby="dialog-description">
        <DialogTrigger onClick={() => onClose(true)}></DialogTrigger>
        <DialogHeader>
          <DialogTitle>Are you sure you want to sign out?</DialogTitle>
        </DialogHeader>

        {/* <div className="text-sm text-muted-foreground">
          
        </div> */}

        <DialogFooter>
          <Button variant="outline" onClick={() => onClose(true)}>
            Cancel
          </Button>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SignOutDialog;
