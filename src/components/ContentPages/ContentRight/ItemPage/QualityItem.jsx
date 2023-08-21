// React Imports
import React from 'react'

// MUI Imports
import { Box, Typography, Checkbox, TextField, Button } from '@mui/material'

const QualityItem = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Inspection Required before Purchase
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Quality Inspection Template
          </Typography>
          <TextField variant='filled' label='' size='small' />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Inspection Required before Delivery
          </Typography>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography>Add a comment</Typography>
          <TextField variant='filled' label='' multiline rows={6} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default QualityItem
