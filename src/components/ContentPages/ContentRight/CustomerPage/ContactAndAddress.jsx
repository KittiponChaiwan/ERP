// ** React Import
import React, { useState } from 'react'

// ** Mui Import
import { Box, TextField, Typography, Checkbox, Button, Grid } from '@mui/material'
import Address_Contact from './Primary_Address_Contact/Address_Contact'

const ContactAndAddress = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Grid>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sx={{ width: '100%' }}>
          <Address_Contact getDataRow={getDataRow} />
        </Grid>

        <Grid item>
          {/* ////////////// ไม่ได้ใส่ขนาดของ GRID เพราะจำทำให้ DORPDOWN -ขนาดไม่เท่า TEXT////////////////// */}
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Grid>
    </Grid>
  )
}

export default ContactAndAddress
