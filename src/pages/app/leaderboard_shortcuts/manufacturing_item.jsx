import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'

const Manufacturing_item = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Include Item In Manufacturing
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Supply Raw Materials for Purchase
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2'>If subcontracted to a vendor</Typography>
        </Box>
      </Box>
      <Box>
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

export default Manufacturing_item
