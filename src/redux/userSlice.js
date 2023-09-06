import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: null, // ข้อมูลของผู้ใช้
  isLoggedIn: false, // สถานะการล็อกอิน
  userRole: null, // สิทธิ์ของผู้ใช้
  userImage: null // รูปภาพของผู้ใช้
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userName = action.payload.userName
      state.isLoggedIn = true
      state.userRole = action.payload.userRole
      state.userImage = action.payload.userImage
    },
    logoutSuccess: state => {
      state.userName = null
      state.isLoggedIn = false
      state.userRole = null
      state.userImage = null
    }
  }
})

// Export actions to use them in components and thunks
export const { loginSuccess, logoutSuccess } = userSlice.actions

// Export reducer to include it in the store
export default userSlice.reducer
