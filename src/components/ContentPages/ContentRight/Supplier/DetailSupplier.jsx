// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import Internal_Supplier from './DetailSupplier/Internal_supplier '
import More_Information from './DetailSupplier/More_Information'

const DetailSupplier = ({ getDataRow }) => {
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
            <Typography sx={{ margin: 1 }}>Supplier Name * :</Typography>
            <TextField size='small' variant='filled' value={getDataRow.supplier_name} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Country :</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.country} />
          </Grid>
        </Grid>
        <Grid item>
          {/* ////////////// ไม่ได้ใส่ขนาดของ GRID เพราะจำทำให้ DORPDOWN -ขนาดไม่เท่า TEXT////////////////// */}
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Supplier Group * :</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.supplier_group} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Pupplier Type :</Typography>
            <DorpdownButton />
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ mt: 10 }}>
        <Typography>Defaults</Typography>
      </Grid>

      {/* ////////////////////////////////////// แถวที่ 2 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={7.7} lg={6}>
          <Grid>
            <Typography sx={{ margin: 1 }}>Billing Currency </Typography>
            <TextField size='small' variant='filled' value={getDataRow.supplier_name} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Default Company Bank Account</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.country} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Price List</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.supplier_group} />
          </Grid>
        </Grid>
      </Grid>
      {/* ////////////////////////////////////// แถวที่ 3 ///////////////////////////////////////////// */}
      <Grid container sx={{ mt: 10 }}>
        <Grid>
          <Internal_Supplier />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <More_Information />
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
      </Grid>
    </Grid>
  )
}

export default DetailSupplier
