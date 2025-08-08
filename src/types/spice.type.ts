export interface Spice {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  weight: number;
  price: number;
  category: Category;
  instruction: string;
  inStock: boolean;
}

export type SpiceCardInfo = {
  _id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  weight: number;
  price: number;
  category: Category;
};

export type Category =
  | "Chicken"
  | "Pizza Topping"
  | "Sauces"
  | "Fries Masala"
  | "Other";
