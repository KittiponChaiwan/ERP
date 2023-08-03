import * as React from 'react'
import { Box } from '@mui/material'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'

function CircleProgress(props) {
  return (
    <Box sx={{ position: 'relative', top: '50%', left: '50%' }}>
      <CircularProgress
        variant='determinate'
        sx={{
          color: theme => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: theme => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          }
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  )
}

function CircleLoading() {
  return <CircleProgress />
}

export default CircleLoading
