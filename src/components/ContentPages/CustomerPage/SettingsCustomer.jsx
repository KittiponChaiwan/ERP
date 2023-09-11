import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'

const SettingsCustomer = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={getDataRow.so_required} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales Invoice Creation Without Sales Order
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 20 }}>
          <Checkbox {...label} checked={getDataRow.is_frozen} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Is Frozen
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={getDataRow.dn_required} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales Invoice Creation Without Delivery Note
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 16 }}>
          <Checkbox {...label} checked={getDataRow.disabled} onChange={handleCheckboxChange} />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Disabled
          </Typography>
        </Box>
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

export default SettingsCustomer
