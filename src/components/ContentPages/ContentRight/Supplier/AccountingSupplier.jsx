// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'

const Accounting = () => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography sx={{ marginBottom: 1 }}>Default Payment Terms Template</Typography>
          <TextField size='small' variant='filled' fullWidth multiline />
          <Box sx={{ borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)', m: 8 }}></Box>

          <Typography sx={{ marginBottom: 1, mb: 5 }}>Default Accounts</Typography>
          <Typography variant='body2' sx={{ marginBottom: 1 }}>
            Accounts
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 1 }}>
            Mention if non-standard payable account
          </Typography>

          <TextField size='small' variant='filled' fullWidth multiline />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
      </Grid>
    </Box>
  )
}

export default Accounting
