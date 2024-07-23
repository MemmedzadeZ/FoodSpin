import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

let arr: Item[] = [];

const basketSlice = createSlice({
  name: "basket",
  initialState: { basketItems: arr },
  reducers: {
    addToBasket: (state, action: PayloadAction) => {
      state.basketItems.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
