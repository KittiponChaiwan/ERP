import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  CardActions,
  Divider,
  CardContent,
  FormGroup,
  FormControlLabel
} from '@mui/material'

const MoreInfo = ({ getDataRow }) => {
  return (
    <Grid>
      <Box sx={{ width: 1080, display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography>Item Description</Typography>
          <TextField size='small' variant='filled' value={getDataRow.description || ''} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Stock UOM</Typography>
          <TextField size='small' variant='filled' value={getDataRow.stock_uom || ''} sx={{ width: 300 }} />
        </Box>
      </Box>
      <Box sx={{ mt: 8 }}>
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

export default MoreInfo
