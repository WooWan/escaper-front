import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchKeyword: '',
}

const searchKeywordSlice = createSlice({
  name: 'searchKeyword',
  initialState,
  reducers: {
    setSearchKeyword(state, action) {
      console.log('redux action', action.payload)
      state.searchKeyword = action.payload
    },
  },
})

export const { setSearchKeyword } = searchKeywordSlice.actions

export default searchKeywordSlice.reducer
