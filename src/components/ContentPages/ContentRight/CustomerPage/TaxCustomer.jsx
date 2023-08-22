import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'

const TaxCustomer = ({ getDataRow }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Tax ID</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.tax_id} />
          </Box>
          <Box sx={{ ml: 20 }}>
            <Typography sx={{ marginBottom: 2 }}>Tax Category</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.tax_category} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box sx={{ ml: 82 }}>
            <Typography sx={{ marginBottom: 2 }}>tax_withholding_category</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.tax_withholding_category} />
          </Box>
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

export default TaxCustomer
