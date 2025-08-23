import { useMemo, useState } from "react";
import { cartStore } from "@/stores/cart.store";
import { RemoveItem } from "@/components/cart/RemoveItem";
import CartDrawer from "@/components/SingleProductPage/CartDrawer";
import CartPageSkeleton from "@/components/cart/CartPageSkele";
import EmptyCart from "@/components/cart/EmptyCart";
import { CartSummary } from "../components/cart/CartSummary";
import { useCartProducts } from "@/functions/useCartProducts";
import { round2 } from "@/lib/utils/math";
import { CartItemCard } from "@/components/cart/CartItemCard";
import type { Row } from "@/types/cart.type";

export default function CartPage() {
  const { cartItems } = cartStore();

  const [itemRemovable, setItemRemovable] = useState("");
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(false);
  const [drawerItemName, setDrawerItemName] = useState<string>();

  const itemsToRender = useMemo(
    () => (Array.isArray(cartItems) ? cartItems.slice() : []),
    [cartItems]
  );

  const { productsByName, loading, fetchError, setProductsByName } =
    useCartProducts(itemsToRender);

  const rows: Row[] = useMemo(() => {
    return itemsToRender.map((ci) => {
      const product = productsByName.find((p) => p.name === ci.name);
      const quantity =
        Number.isInteger(ci.quantity) && ci.quantity > 0 ? ci.quantity : 1;
      const weight = Number(ci.weight) > 0 ? Number(ci.weight) : 100;
      const pricePerGram =
        product && product.weight > 0 ? product.price / product.weight : 0;
      const totalGrams = weight * quantity;
      const lineTotal = round2(pricePerGram * totalGrams);

      return {
        cartItem: { ...ci, quantity, weight },
        product,
        pricePerGram,
        totalGrams,
        lineTotal,
        source: "server",
      };
    });
  }, [itemsToRender, productsByName]);

  const subtotal = useMemo(
    () => round2(rows.reduce((s, r) => s + r.lineTotal, 0)),
    [rows]
  );

  return (
    <div>
      <RemoveItem
        name={itemRemovable}
        RemoveDialogOpen={removeDialogOpen}
        onClose={() => {
          setItemRemovable("");
          setRemoveDialogOpen(false);
        }}
      />
      {editingItem && drawerItemName && (
        <CartDrawer
          setNewItem={() =>
            setProductsByName([
              ...productsByName.filter((p) => p.name !== drawerItemName),
            ])
          }
          drawerType="Update Cart Item"
          product={productsByName.find((p) => p.name === drawerItemName)!}
          isOpen={editingItem}
          onClose={() => {
            setEditingItem(false);
            setDrawerItemName(undefined);
          }}
        />
      )}

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

        {loading && <CartPageSkeleton />}
        {fetchError && (
          <div role="alert" className="py-2 text-center text-destructive">
            {fetchError}
          </div>
        )}

        {rows.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <section className="md:col-span-2 space-y-3">
              {rows.map((r) => (
                <CartItemCard
                  key={`${r.cartItem.name}-${r.cartItem.weight}-${r.cartItem.quantity}`}
                  row={r}
                  onEdit={(name) => {
                    setEditingItem(true);
                    setDrawerItemName(name);
                  }}
                  onRemove={(name) => {
                    setItemRemovable(name);
                    setRemoveDialogOpen(true);
                  }}
                />
              ))}
            </section>
            <CartSummary subtotal={subtotal} />
          </div>
        )}
      </main>
    </div>
  );
}
