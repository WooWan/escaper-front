import { RootState } from "./../config";
import { IMember } from "./../../interfaces/member.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: IMember | null;
  isLogin: boolean;
}
const initialState: UserState = {
  user: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state: UserState, action: PayloadAction<IMember>) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLogin = false;
    },
    updateUser: (state: UserState, action: PayloadAction<IMember>) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
