export type User = {
  username: string;
  email: string;
  city: string;
  phoneNumber?: string;
  restaurant?: string;
  address: string[];
  favouriteSpices: string[];
  history: Order[];
};

export type Order = {
  id: number;
  userEmail: string;
  orderedSpices: OrderedSpice[];
  state:
    | "pending"
    | "accepted"
    | "delivered"
    | {
        type: "rejected";
        reason: string;
      };
  createdAt: Date;
  updatedAt: Date;
};

export type OrderedSpice = {
  spiceName: string;
  weight: number;
  quantity: number;
};

export type Address = {
  _id: string;
  userId: string;
  area: string;
  street: string;
  city: string;
  province: Province;
  postalCode: string;
};

export type Province =
  | "Punjab"
  | "Sindh"
  | "Khyber Pakhtunkhwa"
  | "Balochistan"
  | "Gilgit-Baltistan"
  | "Islamabad Capital Territory"
  | "Azad Jammu and Kashmir";
