// React Imports
import React from 'react'

// MUI Imports
import { Box, Typography, Checkbox, TextField, Button } from '@mui/material'

const QualityItem = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={dataRow.inspection_required_before_purchase} onChange={handleCheckboxChange} />
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Inspection Required before Purchase
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Quality Inspection Template
          </Typography>
          <TextField variant='filled' label='' size='small' value={dataRow.quality_inspection_template} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={dataRow.inspection_required_before_delivery} onChange={handleCheckboxChange} />
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
