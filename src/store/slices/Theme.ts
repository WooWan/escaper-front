import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../config";

const initialState = {
  theme: 'default'
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    enableLightMode(state){
      state.theme = 'light'
    },
    enableDarkMode(state){
      state.theme = 'dark'
    },
  }
})


export const selectDarkMode = (state: RootState) => state.darkMode
export const {enableLightMode, enableDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;