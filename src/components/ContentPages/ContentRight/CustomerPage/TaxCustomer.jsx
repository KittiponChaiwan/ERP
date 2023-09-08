import { Box, TextField, Typography, Checkbox, Button, Grid } from '@mui/material'

const TaxCustomer = ({ getDataRow }) => {
  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Tax ID</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.tax_id} fullWidth />
        </Grid>

        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Tax Category</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.tax_category} fullWidth />

          <Typography sx={{ marginBottom: 2 }}>tax_withholding_category</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.tax_withholding_category} fullWidth />
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

export default TaxCustomer
