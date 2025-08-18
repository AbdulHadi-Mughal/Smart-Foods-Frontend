import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/stores/cart.store";
import type { JSX } from "react/jsx-runtime";
import { Edit, X } from "lucide-react";
import { RemoveItem } from "@/components/cart/RemoveItem";
import type { Spice } from "@/types/spice.type";
import type { CartItem } from "@/types/cart.type";
import fetchProductsBatch from "@/functions/fetchProductsBatch";
import { Image } from "@imagekit/react";
import { Card } from "@/components/ui/card";
import CartDrawer from "@/components/SingleProductPage/CartDrawer";
import { errorToast, infoToast } from "@/components/global/Toasts";
import CartPageSkeleton from "@/components/cart/CartPageSkele";

// Utility: safe rounding to 2 decimal places
const round2 = (v: number) => Math.round((v + Number.EPSILON) * 100) / 100;

type Row = {
  cartItem: CartItem;
  product: Spice | null;
  pricePerGram: number; // chosen source (server preferred, else derived)
  totalGrams: number;
  lineTotal: number; // final chosen line total used in summary
  source: "server" | "store" | "fallback";
};

export default function CartPage(): JSX.Element {
  // Pull cart items from the store. Keep typing narrow: CartItem[] or []
  const { cartItems } = cartStore();

  const [itemRemovable, setItemRemovable] = useState<string>("");
  const [RemoveDialogOpen, setRemoveDialogOpen] = useState(false);

  const apiBase =
    import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api";

  // Stable list of items to render (defensive copy)
  const itemsToRender: readonly CartItem[] = useMemo(
    () => (Array.isArray(cartItems) ? cartItems.slice() : []),
    [cartItems]
  );

  const [productsByName, setProductsByName] = useState<Spice[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [editingItem, setEditingItem] = useState(false);
  const [drawerItem, setDrawerItem] = useState<Spice>();

  useEffect(() => {
    // No fetch required for empty cart
    if (!itemsToRender || itemsToRender.length === 0) {
      setProductsByName([]);
      setLoading(false);
      setFetchError(null);
      return;
    }

    const controller = new AbortController();
    const names = Array.from(new Set(itemsToRender.map((c) => String(c.name))));

    let mounted = true;
    setLoading(true);
    setFetchError(null);

    (async () => {
      try {
        const fetchProducts = async (names: string[]) => {
          const batch = await fetchProductsBatch(names);
          return batch;
        };

        const products = await fetchProducts(names);

        setProductsByName(products);
      } catch (err: unknown) {
        if ((err as Error)?.name === "AbortError") return; // expected on unmount
        setProductsByName([]);
        setFetchError("Failed to fetch product details.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [apiBase, itemsToRender]);

  // Build rows: robust handling + strong typing
  const rows: Row[] = useMemo(() => {
    return itemsToRender.map((ci) => {
      // Defensive normalization of cart item numeric fields
      const quantity =
        Number.isInteger(ci.quantity) && ci.quantity > 0 ? ci.quantity : 1;
      const weight = Number(ci.weight) > 0 ? Number(ci.weight) : 100; // fallback weight

      const product = productsByName.find((p) => p.name === ci.name);

      // Prefer server price-per-gram when product is valid
      const pricePerGramFromProduct =
        product && product.weight > 0 ? product.price / product.weight : null;

      // If cart item has a `price` field, interpret it as total line price (safe fallback)
      const cartLinePrice =
        typeof ci.price === "number" && Number.isFinite(ci.price)
          ? ci.price
          : null;

      // If no server data, try to derive price-per-gram from cartLinePrice (if provided)
      const pricePerGramFromCart =
        cartLinePrice !== null ? cartLinePrice / (weight * quantity) : null;

      const pricePerGram = pricePerGramFromProduct ?? pricePerGramFromCart ?? 0;

      const totalGrams = weight * quantity;
      const calculatedLineTotal = pricePerGram * totalGrams;

      // Choose final line total in this order: server-calculated (if product exists), cartLinePrice, 0
      let lineTotal: number;
      let source: Row["source"];

      if (
        pricePerGramFromProduct !== null &&
        Number.isFinite(calculatedLineTotal) &&
        calculatedLineTotal > 0
      ) {
        lineTotal = round2(calculatedLineTotal);
        source = "server";
      } else if (cartLinePrice !== null) {
        lineTotal = round2(cartLinePrice);
        source = "store";
      } else {
        lineTotal = 0;
        source = "fallback";
      }

      return {
        cartItem: { ...ci, quantity, weight },
        product,
        pricePerGram,
        totalGrams,
        lineTotal,
        source,
      } as Row;
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
        RemoveDialogOpen={RemoveDialogOpen}
        onClose={() => {
          setItemRemovable("");
          setRemoveDialogOpen(false);
        }}
      />
      {editingItem && drawerItem && (
        <CartDrawer
          setNewItem={() =>
            setProductsByName([
              ...productsByName.filter((p) => p.name !== drawerItem?.name),
              drawerItem,
            ])
          }
          drawerType="Update Cart Item"
          product={drawerItem}
          isOpen={editingItem}
          onClose={() => {
            setEditingItem(false);
            setDrawerItem(undefined);
          }}
        />
      )}

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

        {/* Loading and fetch errors are non-blocking: we still show cart items if available */}
        {loading && <CartPageSkeleton />}

        {fetchError && (
          <div role="alert" className="py-2 text-center text-destructive">
            {fetchError}
          </div>
        )}

        {rows.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {/* Left: cart list */}
            <section className="md:col-span-2 space-y-3">
              {rows.map((r, i) => {
                return (
                  <Card
                    key={`${r.cartItem.name}-${r.cartItem.weight}-${r.cartItem.quantity}-${i}`}
                    className="shadow-lg group grid grid-cols-6 items-center justify-between py-2 px-4 rounded-2xl bg-card"
                    aria-label={`Cart item ${
                      r.product?.name ?? r.cartItem.name
                    }`}
                  >
                    <div className="col-span-3">
                      <div>
                        <h2 className="text-lg font-semibold text-primary">
                          {r.product?.name ?? r.cartItem.name}
                        </h2>
                      </div>

                      <div className="mt-3 grid grid-cols-1 items-center gap-3 text-sm">
                        <div>
                          <span className="font-semibold">Quantity:</span>
                          <span className="ml-1">{r.cartItem.quantity}</span>
                        </div>

                        <div className="whitespace-nowrap">
                          <span className="font-semibold overflow-scroll">
                            Selected weight:
                          </span>
                          <span className="ml-1">{r.cartItem.weight} g</span>
                        </div>
                      </div>

                      <div className="text-sm font-semibold mt-2">Total:</div>
                      <div className="text-lg font-bold">
                        Rs. {r.lineTotal.toFixed(2)}
                      </div>
                    </div>

                    {/* Right: small image + line total */}
                    <div className="grid grid-cols-1 col-span-3 items-center">
                      <div className="flex justify-center gap-2 ml-auto mb-4 opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => {
                            setEditingItem(true);
                            if (r.product) {
                              setDrawerItem(r.product);
                            } else {
                              errorToast("Could not find product details");
                            }
                          }}
                          variant="outline"
                          className="lg:opacity-0 group-hover:opacity-50 transition-opacity border-0"
                          aria-label={`Edit ${r.cartItem.name}`}
                        >
                          <Edit className="size-4" />
                        </Button>
                        <Button
                          onClick={() => {
                            setItemRemovable(r.cartItem.name);
                            setRemoveDialogOpen(true);
                          }}
                          variant="outline"
                          className="lg:opacity-0 group-hover:opacity-50 transition-opacity border-0"
                          aria-label={`Remove ${r.cartItem.name}`}
                        >
                          <X className="size-4" />
                        </Button>
                      </div>

                      {r.product?.imageUrl ? (
                        <Image
                          src={r.product.imageUrl + "?tr=h-200"}
                          alt={r.product?.name ?? r.cartItem.name}
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
              })}
            </section>

            {/* Right: summary */}
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
                <Button
                  onClick={() => infoToast("Checkout")}
                  className="w-full"
                >
                  Proceed to Checkout
                </Button>
              </div>

              <Link
                to="/products"
                className="block text-center text-sm underline"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
