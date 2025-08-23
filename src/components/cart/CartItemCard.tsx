import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@imagekit/react";
import { Edit, X } from "lucide-react";
import { errorToast } from "@/components/global/Toasts";
import type { Row } from "@/types/cart.type";

type Props = {
  row: Row;
  onEdit: (productName: string) => void;
  onRemove: (productName: string) => void;
};

export function CartItemCard({ row, onEdit, onRemove }: Props) {
  return (
    <Card
      key={`${row.cartItem.name}-${row.cartItem.weight}-${row.cartItem.quantity}`}
      className="shadow-lg group grid grid-cols-6 items-center justify-between py-2 px-4 rounded-2xl bg-card"
      aria-label={`Cart item ${row.product?.name ?? row.cartItem.name}`}
    >
      <div className="col-span-3">
        <h2 className="text-lg font-semibold text-primary">
          {row.product?.name ?? row.cartItem.name}
        </h2>
        <div className="mt-3 grid grid-cols-1 items-center gap-3 text-sm">
          <div>
            <span className="font-semibold">Quantity:</span>
            <span className="ml-1">{row.cartItem.quantity}</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="font-semibold">Selected weight:</span>
            <span className="ml-1">{row.cartItem.weight} g</span>
          </div>
        </div>
        <div className="text-sm font-semibold mt-2">Total:</div>
        <div className="text-lg font-bold">Rs. {row.lineTotal.toFixed(2)}</div>
      </div>

      <div className="grid grid-cols-1 col-span-3 items-center">
        <div className="flex justify-center gap-2 ml-auto mb-4 opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={() => {
              if (row.product) onEdit(row.product.name);
              else errorToast("Could not find product details");
            }}
            variant="outline"
            className="border-0"
            aria-label={`Edit ${row.cartItem.name}`}
          >
            <Edit className="size-4" />
          </Button>
          <Button
            onClick={() => onRemove(row.cartItem.name)}
            variant="outline"
            className="border-0"
            aria-label={`Remove ${row.cartItem.name}`}
          >
            <X className="size-4" />
          </Button>
        </div>

        {row.product?.imageUrl ? (
          <Image
            src={row.product.imageUrl + "?tr=h-200"}
            alt={row.product?.name ?? row.cartItem.name}
            className="mx-auto mb-2 h-40 px-2 pb-1 rounded object-cover shadow"
            loading="lazy"
          />
        ) : (
          <div className="ml-auto mb-2 h-20 w-20 rounded bg-muted flex items-center justify-center text-sm">
            No Image
          </div>
        )}
      </div>
    </Card>
  );
}
