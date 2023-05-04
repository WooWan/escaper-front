import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/user'
import modalReducer from './slices/Modal'
import darkModeReducer from './slices/Theme'
import searchKeywordReducer from './slices/SearchKeyword'

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    darkMode: darkModeReducer,
    search: searchKeywordReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
