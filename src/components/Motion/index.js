import { motion } from 'framer-motion'

export const Visible = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export const OnHover = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1
        }
      }}
    >
      {children}
    </motion.div>
  )
}
