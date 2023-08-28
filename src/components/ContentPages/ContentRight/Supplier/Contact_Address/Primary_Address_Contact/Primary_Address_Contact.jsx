// ** React Import
import React from 'react'

// ** Mui Import
import { Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Primary_Address_Contact = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Grid>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2} sx={{ display: 'flex', width: '100%' }}>
        <Grid item>
          <Grid>
            <Typography sx={{ margin: 1 }}>Supplier Primary Contact</Typography>
            <TextField size='small' variant='filled' value={''} fullWidth multiline />
            <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen contact is edited after save</Typography>
          </Grid>
        </Grid>
        <Grid item>
          {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
          <Grid sx={{ mt: 5 }}>
            <Typography sx={{ marginBottom: 2 }}>Supplier Primary Address</Typography>
            <TextField size='small' variant='filled' label='' value={''} fullWidth multiline />
            <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen address is edited after save</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Primary_Address_Contact
