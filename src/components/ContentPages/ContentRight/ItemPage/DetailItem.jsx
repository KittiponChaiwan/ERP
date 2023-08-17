// ** React Import
import React from 'react'

// ** Mui Import
import { Box, TextField, Typography } from '@mui/material'

const DetailItem = ({ getDataRow }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Item Name :</Typography>
          <TextField size='small' variant='filled' value={getDataRow.item_name} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Valuation Rate :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.valuation_rate} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Item Group :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.item_group} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Delivery/Receipt Allowance (%) :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.over_delivery_receipt_allowance} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Unit of Measure :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.stock_uom} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Billing Allowance (%) :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.over_billing_allowance} />
        </Box>
      </Box>
      <Box sx={{ mt: 30 }}>
        <Typography variant='h5'>Descripstion:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
      </Box>
    </Box>
  )
}

export default DetailItem
