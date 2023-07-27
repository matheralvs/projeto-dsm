import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  searchInitialValue: string
  searchValue: string
  skip: boolean
}

const initialState: CounterState = {
  searchInitialValue: '',
  searchValue: '',
  skip: true,
}

export const searchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchInitialValue: (state, action: PayloadAction<string>) => {
      state.searchInitialValue = action.payload
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSkip: (state, action: PayloadAction<boolean>) => {
      state.skip = action.payload
    },
  },
})

export const { setSearchInitialValue, setSearchValue, setSkip } =
  searchSlice.actions

export default searchSlice.reducer
