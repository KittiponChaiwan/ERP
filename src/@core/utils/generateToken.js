import Cookies from 'js-cookie'

const jwt = require('jsonwebtoken')

const PRIVATE_KEY = process.env.PRIVATE_KEY

export const generateToken = payload => {
  // คีย์สำหรับเซ็น JWT (ส่วนตัว)
  // สร้าง JWT โดยใช้คีย์ส่วนตัว
  const token = jwt.sign({ data: payload }, PRIVATE_KEY, { expiresIn: '3h' })

  Cookies.set('jwtToken', token, { expiresIn: '3h' })
}
