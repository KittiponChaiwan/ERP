import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import Icon from '@mdi/react'
import { useTheme } from '@mui/material/styles'

function CardMenu({ handleClick, MenuName, Content, MenuIcon }) {
  const theme = useTheme()

  return (
    <Card style={{ background: theme.palette.primary.light }}>
      <Button onClick={() => handleClick()}>
        <CardContent
          sx={{
            mx: 2,
            display: 'flex',
            textAlign: 'left', // Align the text to the left
            flexDirection: 'row', // Display icon and text in a row
            alignItems: 'center', // Center the items vertically in the row
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
            minWidth: 100
          }}
        >
          <Box sx={{ m: 6 }}>
            <Icon path={MenuIcon} size={2.5} />
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography variant='body1' fontWeight={'bold'}>
              {MenuName}
            </Typography>
            <Box>{Content}</Box>
          </Box>
        </CardContent>
      </Button>
    </Card>
  )
}

export default CardMenu
