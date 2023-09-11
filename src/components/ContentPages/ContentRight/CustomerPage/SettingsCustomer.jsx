import { Box, TextField, Typography, Checkbox, Button, Grid } from '@mui/material'

const SettingsCustomer = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.so_required} onChange={handleCheckboxChange} />
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Allow Sales Invoice Creation Without Sales Order
            </Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.dn_required} onChange={handleCheckboxChange} />
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Allow Sales Invoice Creation Without Delivery Note
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={12} md={6} lg={6}>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.is_frozen} onChange={handleCheckboxChange} />
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Is Frozen
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.disabled} onChange={handleCheckboxChange} />
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Disabled
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: '100%' }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SettingsCustomer
