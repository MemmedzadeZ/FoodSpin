import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

let admin: User = {
  login: "admin1",
  password: "admin",
};

const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: admin },
  reducers: {
    editUser: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { editUser } = userSlice.actions;
export default userSlice.reducer;
