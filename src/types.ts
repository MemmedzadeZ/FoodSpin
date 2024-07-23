export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  disclosure: string;
  image: string;
}

export interface Item {
  id: number;
  name: string;
  price: number;
  disclosure: string;
  image: string;
}

export type User = {
  login: string;
  password: string;
};

export interface RootState {
  cart: {
    items: CartItem[];
  };
}

export interface ItemType {
  food: Item;
}
export interface CircleWrapperProps {
  selectedCategory: string;
}
