// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Box, Button, TextField, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

const AccountingItem = ({ dataRow }) => {
  const columnsAcc = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'default_warehouse', headerName: 'Default Warehouse', width: 200 },
    { field: 'default_price_list', headerName: 'Default Price List', width: 200 }
  ]

  const [dataItemAccouting, setDataItemAccouting] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Item/${dataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataItemAccouting(res.data.data)
      })
  }, [dataRow])

  if (dataItemAccouting.length === 0) {
    return 'waiting...'
  }

  return (
    <Box>
      <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
        Item Defaults
      </Typography>
      <Box>
        <DataGrid
          rows={dataItemAccouting}
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
