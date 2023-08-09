import { AppState } from './store'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  name: '', // เพิ่ม property สำหรับชื่อ
  status: '', // เพิ่ม property สำหรับสถานะ
  token: '', // เพิ่ม property สำหรับโทเคน
  authState: false // เพิ่ม property สำหรับสถานะการอนุญาต
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      const { name, status, token, authState } = action.payload
      state.name = name
      state.status = status
      state.token = token
      state.authState = authState
    },
    logoutUser(state) {
      return initialState
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})

const { setAuthUser, logoutUser } = authSlice.actions

const selectAuthUser = state => state.auth

export { setAuthUser, selectAuthUser, logoutUser }

export default authSlice.reducer
