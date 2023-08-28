// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import Connections from './DashboardSupplier/Connections'
import Activity from './DashboardSupplier/Activity '

const Dashboard_sup = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <Grid>
      <Grid container sx={{ mt: 10 }}>
        <Grid>
          <Activity />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <Connections />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
      </Grid>
    </Grid>
  )
}

export default Dashboard_sup
