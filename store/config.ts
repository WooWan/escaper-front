import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import modalReducer from "./slices/Modal";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
