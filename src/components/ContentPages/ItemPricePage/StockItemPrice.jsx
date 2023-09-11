import { useEffect, useState } from 'react'

const { Grid, Box, TextField, Typography, Checkbox, Button } = require('@mui/material')

const StockItemPricePage = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid sx={{ width: 1080 }}>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography sx={{ margin: 1 }}>Item Code*</Typography>
            <TextField size='small' variant='filled' value={dataRow.item_code} />
          </Box>
          <Box sx={{ ml: 40 }}>
            <Typography sx={{ marginBottom: 2 }}>Item Name</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.item_name} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>UOM</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.uom} />
          </Box>
          <Box sx={{ ml: 40 }}>
            <Typography sx={{ marginBottom: 2 }}>Item Description</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.item_description} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Packing Unit</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.packing_unit} />
            <Typography variant='subtitle2'>Quantity that must be bought or sold per UOM</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6'>Price List</Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography sx={{ marginBottom: 2 }}>Price List</Typography>
                <TextField size='small' variant='filled' label='' value={dataRow.price_list} />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ marginBottom: 2 }}>Supplier</Typography>
                <TextField size='small' variant='filled' label='' value={dataRow.supplier} />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ marginBottom: 2 }}>Batch No</Typography>
                <TextField size='small' variant='filled' label='' value={dataRow.batch_no} />
              </Box>
            </Box>
            <Box sx={{ ml: 40, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={dataRow.buying} onChange={handleCheckboxChange} />
                <Typography variant='subtitle1' sx={{ mt: 1 }}>
                  Buying
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={dataRow.selling} onChange={handleCheckboxChange} />
                <Typography variant='subtitle1' sx={{ mt: 1 }}>
                  Selling
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 10, display: 'flex' }}>
          <Box>
            <Typography sx={{ margin: 1 }}>Currency</Typography>
            <TextField size='small' variant='filled' value={dataRow.currency} />
          </Box>
          <Box sx={{ ml: 40 }}>
            <Typography sx={{ marginBottom: 2 }}>Rate</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.price_list_rate} />
          </Box>
        </Box>
        <Box sx={{ mt: 10, display: 'flex' }}>
          <Box>
            <Typography sx={{ margin: 1 }}>Valid From</Typography>
            <TextField size='small' variant='filled' value={dataRow.valid_from} />
          </Box>
          <Box sx={{ ml: 40 }}>
            <Typography sx={{ marginBottom: 2 }}>Valid Upto</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.valid_upto} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Lead Time in days</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.lead_time_days} />
          </Box>
        </Box>
        <Box sx={{ mt: 30 }}>
          <Typography>Note:</Typography>
          <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={dataRow.note || ''} />
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Reference</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.reference} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ mt: 16 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Grid>
  )
}

export default StockItemPricePage
