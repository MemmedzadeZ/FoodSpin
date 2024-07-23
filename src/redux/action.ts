import { CartItem } from "../types";

export const addItemToCart = (item: CartItem) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  };
};

export const removeItem = (id: number) => ({
  type: "REMOVE_ITEM",
  payload: id,
});
export const updateItem = (id: string, quantity: number) => {
  return {
    type: "UPDATE_ITEM_QUANTITY",
    payload: { id, quantity },
  };
};
