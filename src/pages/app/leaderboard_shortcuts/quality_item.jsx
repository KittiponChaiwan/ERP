import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'

const Quality_item = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Inspection Required before Purchase
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Quality Inspection Template
          </Typography>
          <TextField variant='filled' label='' size='small' />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle2' sx={{ m: 4 }}>
            Inspection Required before Delivery
          </Typography>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography>Add a comment</Typography>
          <TextField variant='filled' label='' multiline rows={6} fullWidth />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Button>Comment</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Quality_item
