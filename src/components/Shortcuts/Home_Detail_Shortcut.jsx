import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Btn from '../Button/Button'
import { useRouter } from 'next/router'
import { Home_Detail_Shortcut } from 'src/dummy/Homecontent'

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

      <Card style={{ background: theme.palette.secondary.E }} sx={{ mb: 5, width: '100%', height: 'auto' }}>
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
            {Home_Detail_Shortcut?.map((x, index) => (
              <React.Fragment key={x.id}>
                <Btn
                  detailbutton={x.detailbutton}
                  bgcolorbutton={x.bgcolorbutton}
                  numminwid={x.numminwid}
                  handleButtonClick={() => router.push(x.part)}
                />
              </React.Fragment>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardShortcuts
