import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Btn from '../Button/Button'
import { useRouter } from 'next/router'

function CardShortcuts({ CardShortcutsName }) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Card
      style={{ background: theme.palette.grey[200] }}
      sx={{
        mx: 2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme => `${theme.spacing(3, 5, 0.5)} !important`,
        mb: 5
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'start', width: '100%' }}>
        <Typography variant='h6' fontWeight={'bold'}>
          {CardShortcutsName}
        </Typography>
      </Box>

      <Card style={{ background: theme.palette.primary.light }} sx={{ mb: 5, width: '100%', height: 'auto' }}>
        <CardContent
          sx={{
            mx: 2,
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
            minWidth: 100
          }}
        >
          <Grid container alignItems={'center'} justifyContent={'center'}>
            <Btn
              detailbutton=' Items'
              bgcolorbutton='secondary.C'
              numminwid={280}
              handleClick={() => router.push('/pages/webbrowser/item_shortcuts')}
            />

            <Btn detailbutton=' Customer' bgcolorbutton='secondary.D' numminwid={280} />

            <Btn detailbutton=' Supplier' bgcolorbutton='secondary.E' numminwid={280} />

            <Btn detailbutton=' Sales Invoice' bgcolorbutton='secondary.F' numminwid={280} />

            <Btn detailbutton=' Leaderbord' bgcolorbutton='secondary.G' numminwid={280} />
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardShortcuts
