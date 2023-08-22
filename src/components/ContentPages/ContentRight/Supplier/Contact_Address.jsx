// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Card } from 'mdi-material-ui'
import Address_Contacts from './Contact_Address/Address_Contacts'

const Contact_Address = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Grid>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sx={{ width: '100%' }}>
          <Address_Contacts />
        </Grid>

        <Grid item>
          {/* ////////////// ไม่ได้ใส่ขนาดของ GRID เพราะจำทำให้ DORPDOWN -ขนาดไม่เท่า TEXT////////////////// */}
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
      </Grid>
    </Grid>
  )
}

export default Contact_Address
