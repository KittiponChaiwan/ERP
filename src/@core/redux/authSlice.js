import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  name: '', // เพิ่ม property สำหรับชื่อ
  status: '', // เพิ่ม property สำหรับสถานะ
  authState: false // เพิ่ม property สำหรับสถานะการอนุญาต
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      const { name, status, authState } = action.payload
      state.name = name
      state.status = status
      state.authState = authState
    },
    logoutUser(state) {
      return initialState
    }
  }
})

const { setAuthUser, logoutUser } = authSlice.actions

const selectAuthUser = state => state.auth

export { setAuthUser, selectAuthUser, logoutUser }

export default authSlice.reducer
