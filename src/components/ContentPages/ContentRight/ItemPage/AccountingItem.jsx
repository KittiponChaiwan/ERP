// ** React Imports
import React from 'react'

// ** MUI Imports
import { Box, Button, TextField, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const AccountingItem = () => {
  const columnsAcc = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Company', headerName: 'Company', width: 150 },
    { field: 'Warehouse', headerName: 'Default Warehouse', width: 200 },
    { field: 'PriceList', headerName: 'Default Price List', width: 200 }
  ]

  const rowAcc = [
    {
      id: 1,
      Company: 'Targaryen',
      Warehouse: 'Daenerys',
      PriceList: 'daeams'
    }
  ]

  return (
    <Box>
      <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
        Item Defaults
      </Typography>
      <Box>
        <DataGrid
          rows={rowAcc}
          columns={columnsAcc}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
      <Box>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Box>
  )
}

export default AccountingItem
