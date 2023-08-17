// ** React Imports
import React from 'react'

// ** MUI Imports
import { Box, TextField, Typography } from '@mui/material'

const AccountingItem = () => {
  const columnsAcc = [
    { field: '', headerName: 'No.', width: 90, editable: true },
    { field: '', headerName: 'Company', width: 280 },
    { field: '', headerName: 'Default Warehouse', width: 280 },
    { field: '', headerName: 'Default Price List', width: 280 }
  ]

  return (
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
      <Box sx={{ mt: 10 }}>
        <Typography>Add a comment</Typography>
        <TextField variant='filled' label='' multiline rows={6} fullWidth />
      </Box>
      <Box></Box>
    </Box>
  )
}

export default AccountingItem
