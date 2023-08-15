// ** React Imports
import React from 'react'

// ** MUI Imports
import { Box, Typography, TextField, Checkbox } from '@mui/material'

const SalesItem = () => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Default Sales Unit of Measure :</Typography>
            <TextField variant='filled' label='' />
          </Box>
          <Box sx={{ ml: 20 }}>
            <Typography sx={{ marginBottom: 2 }}>Max Discount (%) :</Typography>
            <TextField variant='filled' label='' />
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Grant Commission
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales
          </Typography>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6'>Deferred Revenue</Typography>
        </Box>
        <Box sx={{ mt: 4, display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Enable Deferred Revenue
          </Typography>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6'>Customer Details </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
            Item Defaults
          </Typography>
          <Box>
            {/* <DataGrid
          // rows={dataItem}
          columns={columnsAcc}
          // getRowId={row => row.name}
          checkboxSelection
          disableRowSelectionOnClick
        /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SalesItem
