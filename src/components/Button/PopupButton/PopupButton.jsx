import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'

import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

const handleChange = event => {
  setAge(event.target.value)
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function PopupButton() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
        sx={{
          border: '1px solid black',
          fontWeight: 'bold',
          maxWidth: 30,
          minWidth: 120,
          textAlign: 'left',
          bgcolor: 'secondary.C',
          color: 'secondary.G',
          '&:hover': {
            bgcolor: 'primary.dark',
            color: 'common.white'
          }
        }}
      >
        Filter By
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <Grid container sx={{ p: 5, height: 500, minWidth: 400, display: 'flex', flexDirection: 'column' }}>
          <Grid item>
            <Box item> Filter By</Box>
            <FormControl required sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id='assigned-label'>Assigned To</InputLabel>
              <Select labelId='assigned-label' label='Assigned To'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl required sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id='created-label'>Created By</InputLabel>
              <Select labelId='created-label' label='Created By'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation='horizontal' />
          </Grid>
          <Grid item>
            <Box> Edit Filters</Box>
            <FormControl required sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id='created-label'>Created By</InputLabel>
              <Select labelId='created-label' label='Created By'>
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation='horizontal' />
          </Grid>
          <Box sx={{ mb: 10 }}>Show Tags</Box>
          <Box>Save Filter</Box>
          <Grid item>
            <TextField id='outlined-multiline-flexible' label='Multiline' multiline maxRows={4} />
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
