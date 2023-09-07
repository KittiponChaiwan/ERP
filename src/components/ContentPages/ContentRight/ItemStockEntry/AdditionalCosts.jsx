import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const AdditionalCosts = ({ dataRow }) => {
  return (
    <Grid>
      <Box sx={{ width: 1080, display: 'flex' }}>
        <Box sx={{ width: '60%' }}>
          <Typography sx={{ margin: 1 }}>Total Additional Costs</Typography>
          <TextField size='small' variant='filled' value={dataRow.total_additional_costs} />
        </Box>
        <Box sx={{ width: '40%' }}></Box>
      </Box>
      <Box>
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

export default AdditionalCosts
