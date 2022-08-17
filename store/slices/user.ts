import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * initial 타입 추가 필요
 */
interface UserType {
  id: number;
  name: string;
}
interface UserState {
  user: UserType | null;
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
    loginUser: (state: UserState, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLogin = false;
    },
    updateUser: (state: UserState, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
