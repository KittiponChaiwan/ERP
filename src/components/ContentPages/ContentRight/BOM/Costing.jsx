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

const Costing = ({ getDataRow }) => {
  return (
    <Grid>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography>Operating Cost (THB)</Typography>
            <TextField
              size='small'
              variant='filled'
              label=''
              value={getDataRow.operating_cost || ''}
              sx={{ width: 300 }}
            />
          </Box>
          <Box sx={{ ml: 30 }}>
            <Typography>Total Cost (THB)</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.total_cost || ''} sx={{ width: 300 }} />
          </Box>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Raw Material Cost (THB)</Typography>
          <TextField
            size='small'
            variant='filled'
            label=''
            value={getDataRow.raw_material_cost || ''}
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Scrap Material Cost (THB)</Typography>
          <TextField
            size='small'
            variant='filled'
            label=''
            value={getDataRow.scrap_material_cost || ''}
            sx={{ width: 300 }}
          />
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

export default Costing
