import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'

const SettingsCustomer = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales Invoice Creation Without Sales Order
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 20 }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Is Frozen
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales Invoice Creation Without Delivery Note
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 16 }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Disabled
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SettingsCustomer
