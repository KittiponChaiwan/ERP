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
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@mui/material'

const ScapAndProcessLoss = ({ getDataRow }) => {
  return (
    <Grid>
      <Box>
        <Box>
          <Typography variant='h6'>Process Loss</Typography>
        </Box>
        <Box sx={{ mt: 6, display: 'flex' }}>
          <Box>
            <Typography sx={{ mb: 5 }}>% Process Loss</Typography>
            <TextField
              size='small'
              variant='filled'
              label=''
              value={getDataRow.process_loss_percentage}
              sx={{ width: 300 }}
            />
          </Box>
          <Box sx={{ ml: 30 }}>
            <Typography sx={{ mb: 5 }}>Process Loss Qty</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.process_loss_qty} sx={{ width: 300 }} />
          </Box>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default ScapAndProcessLoss
