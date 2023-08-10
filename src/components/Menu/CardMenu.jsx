import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import Icon from '@mdi/react'
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
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Icon path={MenuIcon} size={2} />
        </Box>
        <Typography sx={{ fontSize: 11 }} variant='body1' fontWeight={'bold'}>
          {MenuName}
        </Typography>
      </CardContent>
    </Button>

    ////////////////////////////////////////////////////////////////////////////////
  )
}

export default CardMenu
