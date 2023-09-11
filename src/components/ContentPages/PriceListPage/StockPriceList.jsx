import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const StockPriceList = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const columnsApp = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Country', headerName: 'Country', width: 150 }
  ]

  const rowsApp = [
    {
      id: 1,
      Country: 'Sidw'
    }
  ]

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Box sx={{ display: 'flex', width: 1080 }}>
        <Checkbox checked={dataRow.enabled} onChange={handleCheckboxChange} />
        <Typography sx={{ m: 2 }}>Enabled</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography sx={{ margin: 1 }}>Currency</Typography>
            <TextField size='small' variant='filled' value={dataRow.currency} />
          </Box>
          <Box sx={{ display: 'flex', mt: 6 }}>
            <Checkbox {...label} checked={dataRow.buying} onChange={handleCheckboxChange} />
            <Typography sx={{ m: 2 }}>Buying</Typography>
          </Box>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <Checkbox {...label} checked={dataRow.selling} onChange={handleCheckboxChange} />
            <Typography sx={{ m: 2 }}>Selling</Typography>
          </Box>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <Checkbox {...label} />
            <Typography sx={{ m: 2 }}>Price Not UOM Dependent</Typography>
          </Box>
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography>Applicable for Countries</Typography>
          <DataGrid
            rows={rowsApp}
            columns={columnsApp}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          <Button>Add Row</Button>
        </Box>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Grid>
  )
}

export default StockPriceList
