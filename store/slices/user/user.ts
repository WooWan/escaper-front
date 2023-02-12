import { RootState } from '@/store/config'
import { IMember } from '@/types/member'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LoginState = {
  user: IMember
  isLogin: true
}
type LogoutState = {
  user: null
  isLogin: false
}

export type UserState = LoginState | LogoutState

const initialState: UserState = {
  user: null,
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state: UserState, action: PayloadAction<IMember>) => {
      state.user = action.payload
      state.isLogin = true
    },
    logoutUser: (state: UserState) => {
      state.user = null
      state.isLogin = false
    },
    updateUser: (state: UserState, action: PayloadAction<IMember>) => {
      state.user = action.payload
    },
  },
})

export const selectUser = (state: RootState) => state.user as UserState
export const { loginUser, logoutUser, updateUser } = userSlice.actions
export default userSlice.reducer
