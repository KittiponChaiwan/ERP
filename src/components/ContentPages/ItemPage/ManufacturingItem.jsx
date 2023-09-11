// ** React Imports
import React from 'react'

// MUI imports
import { Box, Typography, Checkbox, TextField, Button } from '@mui/material'

const ManufacturingItem = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={dataRow.include_item_in_manufacturing} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Include Item In Manufacturing
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={dataRow.is_sub_contracted_item} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Supply Raw Materials for Purchase
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2'>If subcontracted to a vendor</Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ mt: 10 }}>
          <Typography>Add a comment</Typography>
          <TextField variant='filled' label='' multiline rows={6} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Button>Add Comment</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ManufacturingItem
