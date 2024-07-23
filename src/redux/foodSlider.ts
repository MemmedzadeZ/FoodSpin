import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

const item: Item = {
  id: "0",
  name: "defaul",
  disclosure: "default",
  price: 0,
  image: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState: { selectedFood: item },
  reducers: {
    setFood: (state, action: PayloadAction<Item>) => {
      state.selectedFood = action.payload;
    },
  },
});

export const { setFood } = foodSlice.actions;
export default foodSlice.reducer;
