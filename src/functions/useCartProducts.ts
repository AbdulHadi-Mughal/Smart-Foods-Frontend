import { useEffect, useState } from "react";
import type { Spice } from "@/types/spice.type";
import fetchProductsBatch from "@/functions/fetchProductsBatch";
import type { CartItem } from "@/types/cart.type";

export function useCartProducts(itemsToRender: CartItem[]) {
  const [productsByName, setProductsByName] = useState<Spice[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
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
        const products = await fetchProductsBatch(names);
        if (mounted) setProductsByName(products);
      } catch (err: unknown) {
        if ((err as Error)?.name !== "AbortError") {
          setProductsByName([]);
          setFetchError("Failed to fetch product details.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [itemsToRender]);

  return { productsByName, loading, fetchError, setProductsByName };
}
