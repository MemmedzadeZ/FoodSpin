import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#ffeede", // Default color
  selectedCategory: "BreakfastFood", // Default category
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeColor: (state) => {
      const colors = ["#ffeede", "#e0f7fa", "#ffe0b2"];
      const currentColorIndex = colors.indexOf(state.color);
      const nextColorIndex = (currentColorIndex + 1) % colors.length;
      state.color = colors[nextColorIndex];
    },
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { changeColor, changeCategory } = themeSlice.actions;
export default themeSlice.reducer;
