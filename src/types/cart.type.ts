import type { Spice } from "./spice.type";

export type CartItem = {
  name: string;
  price: number;
  weight: number;
  quantity: number;
};
export type CartStore = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  editItem: (editedItem: CartItem) => void;
  resetItems: () => void;
};

export type BuyNowStore = {
  cartItem: CartItem | null;
  setItem: (item: CartItem) => void;
  removeItem: () => void;
};

export type Row = {
  cartItem: CartItem;
  product: Spice | undefined;
  pricePerGram: number;
  totalGrams: number;
  lineTotal: number;
  source: "server" | "store" | "fallback";
};
