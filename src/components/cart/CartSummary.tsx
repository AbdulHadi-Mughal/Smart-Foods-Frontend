import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { infoToast } from "@/components/global/Toasts";

type Props = { subtotal: number };

export function CartSummary({ subtotal }: Props) {
  return (
    <aside className="md:col-span-1 p-4 rounded-2xl shadow-sm bg-card h-fit">
      <h3 className="text-lg font-medium mb-2">Order Summary</h3>
      <div className="flex justify-between text-sm mb-1">
        <span>Subtotal</span>
        <span>Rs. {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span>Estimated delivery</span>
        <span>—</span>
      </div>
      <div className="mb-4">
        <Button onClick={() => infoToast("Checkout")} className="w-full">
          Proceed to Checkout
        </Button>
      </div>
      <Link to="/products" className="block text-center text-sm underline">
        Continue shopping
      </Link>
    </aside>
  );
}
