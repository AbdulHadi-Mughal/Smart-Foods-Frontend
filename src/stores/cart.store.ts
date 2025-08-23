import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BuyNowStore, CartItem, CartStore } from "@/types/cart.type";

// Persistent cart store with localStorage
export const cartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addItem: (item: CartItem) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

      removeItem: (deletedItem: string) =>
        set((state) => ({
          cartItems: state.cartItems.filter(({ name }) => name !== deletedItem),
        })),

      editItem: (editedItem: CartItem) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.name === editedItem.name && item.weight === editedItem.weight
              ? { ...item, ...editedItem }
              : item
          ),
        })),
      resetItems: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);

export const buyNowItem = create<BuyNowStore>()(
  persist(
    (set) => ({
      cartItem: null,

      setItem: (item: CartItem) =>
        set(() => ({
          cartItem: item,
        })),

      removeItem: () =>
        set({
          cartItem: null,
        }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);
