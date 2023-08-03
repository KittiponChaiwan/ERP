import React from 'react'
import { Button } from '@mui/material'

function Btn(props) {
  return (
    <Button
      {...props}
      sx={{
        bgcolor: 'primary.main',
        color: 'grey.50',
        '&:hover': {
          bgcolor: 'primary.dark',
          color: 'common.white'
        }
      }}
      onClick={props.handleClick}
    >
      Add New
    </Button>
  )
}

export default Btn
