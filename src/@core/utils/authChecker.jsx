// ** React Imports
import { useEffect } from 'react'

// ** next/router
import { useRouter } from 'next/router'

// ** Cookies Import
import Cookies from 'js-cookie' // Make sure to import the correct library
import jwt from 'jsonwebtoken'

// ** Redux Imports
import { logoutUser } from 'src/redux/authSlice'
import { useDispatch } from 'react-redux'

const AuthChecker = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY

  useEffect(() => {
    const token = Cookies.get('token')

    if (token) {
      try {
        const decodedToken = jwt.verify(token, PRIVATE_KEY)

        if (!decodedToken) {
          dispatch(logoutUser())
          router.push('/pages/login')
        } else {
          if (router.pathname === '/pages/login') {
            router.push('/')
          }
        }
      } catch (error) {
        console.error('Token verification error:', error)
        dispatch(logoutUser())
        router.push('/pages/login')
      }
    } else {
      console.log('Token missing')
      dispatch(logoutUser())
      router.push('/pages/login')
    }
  }, [router.pathname])

  return null
}

export default AuthChecker
