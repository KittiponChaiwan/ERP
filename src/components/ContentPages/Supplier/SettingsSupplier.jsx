// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography, Checkbox } from '@mui/material'

import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

const SettingsSupplier = () => {
  const [setAge] = useState('')

  // ** State
  const [collapse, setCollapse] = useState(false)
  const [isInternalSupplier, setIsInternalSupplier] = useState(false)

  const handleCheckboxChange = event => {
    setIsInternalSupplier(event.target.checked)
  }

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
          <FormGroup>
            <FormControlLabel
              sx={{ marginBottom: 1 }}
              control={<Checkbox defaultChecked />}
              label='Allow Purchase Invoice Creation Without Purchase Order'
            />
            <FormControlLabel
              sx={{ marginBottom: 1 }}
              control={<Checkbox defaultChecked />}
              label='Allow Purchase Invoice Creation Without Purchase Receipt'
            />
            <FormControlLabel sx={{ marginBottom: 1 }} control={<Checkbox defaultChecked />} label='Is Frozen' />
            <FormControlLabel sx={{ marginBottom: 1 }} control={<Checkbox defaultChecked />} label='Disabled' />
            <Box sx={{ borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)', m: 8 }}></Box>
          </FormGroup>
          <Typography sx={{ marginBottom: 1 }}>Mention if non-standard payable account</Typography>

          <FormControlLabel
            control={<Checkbox checked={isInternalSupplier} onChange={handleCheckboxChange} />}
            variant='body2'
            label='Is Internal Supplier'
          />
          {isInternalSupplier && (
            <Box>
              <Typography sx={{ marginBottom: 2 }}>Hold Type </Typography>
              <DorpdownButton />
              <Typography sx={{ marginBottom: 2 }}>Release Date </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation='landscape' />
              </LocalizationProvider>
              <Typography sx={{ marginBottom: 2 }}>Leave blank if the Supplier is blocked indefinitely </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
      </Grid>
    </Box>
  )
}

export default SettingsSupplier
