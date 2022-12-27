import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './Reducer'

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
})

