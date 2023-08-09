import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import authSlice from './authSlice' // ไม่ใช้ curly braces

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authSlice // ใช้ 'auth' แทนที่จะใช้ authSlice.name
      // ...reducers อื่น ๆ ...
    },
    devTools: true
  })

const AppStore = makeStore()
const AppState = AppStore.getState()

const AppThunk = (dispatch, getState, extraArgument) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument)
  }

  return next(action)
}

export const wrapper = createWrapper(makeStore)
