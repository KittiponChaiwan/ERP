// ** React Imports
import React from 'react'

// ** Mui Imports
import { Box, TextField, Typography } from '@mui/material'

const PurchasingItem = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Purchase Unit of Measure:</Typography>
          <TextField variant='filled' />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Lead Time in days :</Typography>
          <TextField variant='filled' label='' />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }} variant='subtitle1'>
            Minimum Order Qty:
          </Typography>
          <TextField variant='filled' label='' />
          <Typography sx={{ marginBottom: 2 }} variant='subtitle2'>
            Minimum quantity should be as per Stock UOM:
          </Typography>
        </Box>
        <Box sx={{ ml: 6 }}>
          <Typography sx={{ marginBottom: 2 }}>Last Purchase Rate:</Typography>
          <TextField variant='filled' label='' />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Safety Stock:</Typography>
          <TextField variant='filled' label='' />
        </Box>
      </Box>
    </Box>
  )
}

export default PurchasingItem
