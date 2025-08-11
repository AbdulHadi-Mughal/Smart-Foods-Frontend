import { create } from "zustand";
import type { CartItem, CartStore } from "@/types/cart.type";

export const cartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItem: (item: CartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeItem: (deletedItem: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter(({ name }) => name !== deletedItem),
    })),
}));
