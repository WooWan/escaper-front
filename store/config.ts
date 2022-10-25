import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/user";
import modalReducer from "./slices/Modal";
import darkModeReducer from './slices/Theme';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
