import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import cartReducer from "./cardSlider";
import foodReducer from "./foodSlider";
import cardReducer from "./basketSlider";
import userReducer from "./userSlider";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    food: foodReducer,
    card: cardReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
