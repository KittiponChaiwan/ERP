// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'

const TaxSupplier = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Grid>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={7.7} lg={6}>
          <Grid>
            <Typography sx={{ margin: 1 }}>Tax ID</Typography>
            <TextField size='small' variant='filled' />
          </Grid>
        </Grid>

        <Grid item>
          {/* ////////////// ไม่ได้ใส่ขนาดของ GRID เพราะจำทำให้ DORPDOWN -ขนาดไม่เท่า TEXT////////////////// */}
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Tax Category</Typography>
            <TextField size='small' variant='filled' label='' />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Tax Wihholding Category</Typography>
            <TextField size='small' variant='filled' label='' />
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
      </Grid>
    </Grid>
  )
}

export default TaxSupplier
