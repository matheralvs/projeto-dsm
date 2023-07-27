import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { noticiesApi } from '@services/http'

import searchReducer from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    [noticiesApi.reducerPath]: noticiesApi.reducer,
    searchSlice: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noticiesApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
