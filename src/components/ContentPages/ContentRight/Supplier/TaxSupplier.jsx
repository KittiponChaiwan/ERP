// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'

const TaxSupplier = () => {
  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ margin: 1 }}>Tax ID</Typography>
          <TextField fullWidth size='small' variant='filled' />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Tax Category</Typography>
          <TextField fullWidth size='small' variant='filled' label='' />
          <Typography sx={{ marginBottom: 2 }}>Tax Wihholding Category</Typography>
          <TextField fullWidth size='small' variant='filled' label='' />
        </Grid>

        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
      </Grid>
    </Box>
  )
}

export default TaxSupplier
