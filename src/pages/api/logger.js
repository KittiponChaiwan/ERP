import jwt from 'jsonwebtoken'

export default async function logger(req, res) {
  const { token } = req.body

  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_PRIVATE_KEY)

    if (!decoded || !decoded.loggedIn) {
      return res.status(401).json({ message: 'Not Authenticated' })
    }

    res.status(200).json({ message: 'Authenticated' })
  } catch (error) {
    console.error('Verification error', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
