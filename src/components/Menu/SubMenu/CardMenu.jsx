// ** React Imports
import React from 'react'

// ** Next imports
import Image from 'next/image'

// ** Mui imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

function CardMenu({ handleButtonClick, MenuName, MenuIcon }) {
  const theme = useTheme()

  return (
    <Button
      sx={{
        width: '100%',
        minHeight: 150,
        minWidth: 250
      }}
      style={{ background: theme.palette.grey[300] }}
      onClick={() => handleButtonClick()}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '72px',
              height: '72px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image src={`/images/icons/${MenuIcon}`} alt='Icons' layout='fill' objectFit='contain' />
          </Box>
          <Typography sx={{ fontSize: 11, fontWeight: 'bold', marginTop: 1 }}>{MenuName}</Typography>
        </Box>
      </CardContent>
    </Button>

    ////////////////////////////////////////////////////////////////////////////////
  )
}

export default CardMenu
