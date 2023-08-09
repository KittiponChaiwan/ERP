import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { authSlice } from './authSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer

      // ...reducers อื่น ๆ ...
    },
    devTools: true
  })

export const wrapper = createWrapper(makeStore)
