const jwt = require('jsonwebtoken') // นำเข้า jsonwebtoken หากใช้ใน Node.js

// คีย์สำหรับการยืนยัน token
const PRIVATE_KEY = process.env.PRIVATE_KEY

export const checkCookieToken = token => {
  try {
    // ยืนยันและถอดรหัส token
    const decodedToken = jwt.verify(token, PRIVATE_KEY)
    console.log('decodedToken:', decodedToken)

    // ตรวจสอบค่าใน decodedToken เพื่อดูสถานะการเข้าสู่ระบบ
    if (decodedToken) {
      console.log('User is logged in.')

      return true
    } else {
      console.log('User is not logged in.')

      return false
    }
  } catch (error) {
    console.error('Invalid token:', error.message)
  }
}
