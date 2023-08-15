import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const Details_item = props => {
  const { getRow } = props

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Item Name :</Typography>
          <TextField variant='filled' value={getRow.item_name} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Valuation Rate :</Typography>
          <TextField variant='filled' label='' value={getRow.valuation_rate} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Item Group :</Typography>
          <TextField variant='filled' label='' value={getRow.item_group} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Delivery/Receipt Allowance (%) :</Typography>
          <TextField variant='filled' label='' value={getRow.over_delivery_receipt_allowance} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Unit of Measure :</Typography>
          <TextField variant='filled' label='' value={getRow.stock_uom} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Billing Allowance (%) :</Typography>
          <TextField variant='filled' label='' value={getRow.over_billing_allowance} />
        </Box>
      </Box>
      <Box sx={{ mt: 30 }}>
        <Typography variant='h5'>Descripstion:</Typography>
        <TextField variant='filled' label='' multiline rows={8} fullWidth value={getRow.description} />
      </Box>
    </Box>
  )
}

export default Details_item
