import React from 'react'
import { Button, Box } from '@mui/material'

function Btn(props) {
  const { detailbutton, bgcolorbutton, handleButtonClick, numminwid } = props

  return (
    <Box sx={{ width: 'auto' }}>
      <Button
        sx={{
          border: '1px solid black',
          fontWeight: 'bold',
          maxWidth: numminwid,
          minWidth: numminwid,
          textAlign: 'left',
          justifyContent: 'flex-start',
          bgcolor: `${bgcolorbutton}`,
          color: 'secondary.G',
          '&:hover': {
            bgcolor: 'primary.dark',
            color: 'common.white'
          }
        }}
        onClick={handleButtonClick}
      >
        {detailbutton}
      </Button>
    </Box>
  )
}

export default Btn
