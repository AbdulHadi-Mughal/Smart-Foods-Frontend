import { useState, useMemo } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/types/cart.type";
import { cartStore } from "@/stores/cart.store";
import { Image } from "@imagekit/react";
import type { Spice } from "@/types/spice.type";
import { CustomWeightPicker } from "./CustomWeights";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { successToast } from "../global/Toasts";

interface CartDrawerProps {
  setSameCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewItem: React.Dispatch<React.SetStateAction<CartItem | null>>;
  drawerType: "Add to Cart" | "Buy Now" | "Edit Cart Item";
  isOpen: boolean;
  onClose: () => void;
  product: Spice;
}

export default function CartDrawer({
  setSameCartOpen,
  setNewItem,
  drawerType,
  isOpen,
  onClose,
  product,
}: CartDrawerProps) {
  const { addItem, cartItems } = cartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [weightType, setWeightType] = useState<"fixed" | "custom">("fixed");
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const totalPrice = useMemo(() => {
    const pricePerGram = product.price / product.weight;
    return (pricePerGram * selectedWeight * quantity).toFixed(2);
  }, [selectedWeight, quantity, product.price, product.weight]);

  const handleAddToCart = () => {
    const newItem = {
      name: product.name,
      price: parseFloat(totalPrice),
      weight: selectedWeight,
      quantity,
    };

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === newItem?.name && item.weight === newItem?.weight
    );

    if (existingItemIndex !== -1) {
      setNewItem(newItem);
      setSameCartOpen(true);
      return;
    }

    addItem(newItem);
    successToast(`Added ${newItem.name} to cart!`);
    onClose();
    onClose();
  };

  return (
    <>
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="pb-4 pt-2 px-4 max-w-2xl mx-auto">
          <DrawerTitle className="text-lg font-semibold text-center hidden sm:block pb-4">
            {drawerType} - {product.name}
          </DrawerTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Image */}
            {product.imageUrl ? (
              <div className="mx-auto grid grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-w-40 object-cover rounded"
                />
                <div className="text-center">
                  <DrawerDescription>{product.name}</DrawerDescription>
                  {!product.inStock && (
                    <p className="text-md font-bold text-red-600">
                      Out of Stock
                    </p>
                  )}
                  <p className="text-sm text-primary">Rs. {product.price}</p>
                </div>
              </div>
            ) : (
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded">
                No Image
              </div>
            )}

            <div className="flex flex-col justify-center mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm font-medium">Quantity:</p>
                <div className="flex items-center gap-2">
                  <Button
                    disabled={quantity <= 1}
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </Button>
                  <input
                    className="size-8 text-center rounded focus:outline-none"
                    value={quantity}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setQuantity(1);
                        return;
                      }
                      if (!/^\d+$/.test(e.target.value)) return;
                      setQuantity(Number(e.target.value));
                    }}
                  />
                  <Button
                    disabled={quantity >= 500}
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Weight (always stacked below Quantity in desktop) */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Select Weight:</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={
                      selectedWeight === product.weight &&
                      weightType === "fixed"
                        ? "secondary"
                        : "outline"
                    }
                    onClick={() => {
                      setWeightType("fixed");
                      setSelectedWeight(product.weight);
                    }}
                    className="text-sm"
                  >
                    {product.weight}g
                  </Button>
                  <CustomWeightPicker
                    weightType={weightType}
                    selectedWeight={selectedWeight}
                    onChange={(weight: number) => {
                      setSelectedWeight(weight);
                      setWeightType("custom");
                    }}
                  />
                  <Tooltip
                    defaultOpen={false}
                    open={tooltipOpen}
                    onOpenChange={setTooltipOpen}
                  >
                    <Info
                      onClick={() => {
                        setTooltipOpen(!tooltipOpen);
                      }}
                      className="relative top-1.5 size-5"
                    />
                    <TooltipTrigger />
                    <TooltipContent>
                      <p className="max-w-40">
                        You can choose a custom weight from 600 g to 1000 g, in
                        steps of 50 g.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
            {/* Quantity */}
          </div>

          {/* Total Price */}
          <div className="my-4 text-lg font-semibold text-center">
            Total: Rs. {totalPrice}
          </div>

          <DrawerFooter>
            <Button
              onClick={handleAddToCart}
              className="w-full max-w-sm mx-auto"
            >
              {drawerType}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full max-w-sm mx-auto"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
