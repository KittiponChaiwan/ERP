import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios' // อย่าลืม import Axios
import Cookies from 'js-cookie'

export default async function handler(req, res) {
  // เพิ่ม async
  if (req.method === 'POST') {
    const isAuthenticated = true // สมมุติว่าผ่านการตรวจสอบแล้ว

    if (isAuthenticated) {
      const { usr, pwd } = req.body

      try {
        const apiResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}api/method/login`, {
          usr: usr,
          pwd: pwd
        })

        if (apiResponse.status !== 200 || !apiResponse.data) {
          return res.status(404).json({ message: 'Not Found' })
        }

        if (apiResponse.status === 200) {
          const token = jwt.sign(
            {
              usr: usr,
              loggedIn: true
            },
            process.env.NEXT_PUBLIC_PRIVATE_KEY,
            { expiresIn: '1d' }
          )

          // const secure = false // หรือ process.env.NODE_ENV === 'production';

          // res.setHeader(
          //   'Set-Cookie',
          //   serialize('jwt', token, {
          //     httpOnly: true,
          //     secure,
          //     path: '/',
          //     sameSite: 'strict',
          //     maxAge: 60 * 60 * 24 // 1 day
          //   })
          // )

          // Cookies.set('jwt', token, { expires: 1, path: '' })

          res.status(200).json({
            message: 'Authenticated',
            data: {
              userName: apiResponse.data.full_name,
              userRole: 'Administrator',
              userImage: '/images/avatars/1.png',
              token: token
            }
          })
          console.log('ok')
        } else {
          res.status(404).json({ message: 'Not Found' })
        }
      } catch (error) {
        console.error('API request error', error)
        res.status(500).json({ message: 'Internal Server Error' })
      }
    } else {
      res.status(401).json({ message: 'Not Authenticated' })
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
