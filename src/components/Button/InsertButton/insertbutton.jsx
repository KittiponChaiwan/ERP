import React from 'react'
import { Button, Box } from '@mui/material'
import Typography from '@mui/material/Typography'

function Insertbutton(props) {
  const { handleButtonClick } = props

  return (
    <Box sx={{ width: 'auto' }}>
      <Button
        sx={{
          border: '1px solid black',
          fontWeight: 'bold',
          maxWidth: 20,
          minWidth: 120,
          textAlign: 'left',
          bgcolor: 'secondary.C',
          color: 'secondary.G',
          '&:hover': {
            bgcolor: 'primary.dark',
            color: 'common.white'
          }
        }}
        onClick={handleButtonClick}
      >
        <Typography> + Add Item</Typography>
      </Button>
    </Box>
  )
}

export default Insertbutton
