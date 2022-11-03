import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../config";

type TokenState = {
  accessToken: string;
  refreshToken: string;
}

const initialState: TokenState = {
  accessToken: "",
  refreshToken: "",
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    removeToken(state) {
      state.accessToken = ""
      state.refreshToken = ""
    }
  }
});


export const selectToken = (state: RootState) => state.token
export const {setToken, removeToken} = tokenSlice.actions;
export default tokenSlice.reducer;
