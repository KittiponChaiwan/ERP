import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Btn from '../../Button/Button'

function CardShowAccounting({ Accounting, Stock, CRM, Data_import_and_Settings }) {
  const theme = useTheme()

  return (
    <Grid
      container
      spacing={8}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* //////////////////////////////////////////////////////////////////////// */}
      <Grid item xs={12} sm={8} md={5} lg={3} sx={{ minWidth: 400 }}>
        <Card
          style={{ background: theme.palette.grey[200] }}
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            padding: theme => `${theme.spacing(3, 2, 0.5)} !important`
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
          >
            <Box>
              <Typography>{Accounting}</Typography>
            </Box>
            <Grid item>
              <Btn detailbutton=' Accounting' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Chart of Accounts' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Company' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Customer' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Supplier' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <Grid item xs={12} sm={8} md={5} lg={3} sx={{ minWidth: 400 }}>
        <Card
          style={{ background: theme.palette.grey[200] }}
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            padding: theme => `${theme.spacing(3, 2, 0.5)} !important`
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
          >
            <Box>
              <Typography>{Stock}</Typography>
            </Box>
            <Grid item>
              <Btn detailbutton=' Accounting' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Chart of Accounts' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Company' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Customer' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Supplier' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
          </Grid>
        </Card>
      </Grid>

      {/* //////////////////////////////////////////////////////////////////////// */}
      <Grid item xs={12} sm={8} md={5} lg={3} sx={{ minWidth: 400 }}>
        <Card
          style={{ background: theme.palette.grey[200] }}
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            padding: theme => `${theme.spacing(3, 2, 0.5)} !important`
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
          >
            <Box>
              <Typography>{CRM}</Typography>
            </Box>
            <Grid item>
              <Btn detailbutton=' Accounting' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Chart of Accounts' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Company' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Customer' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Supplier' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <Grid item xs={12} sm={8} md={5} lg={3} sx={{ minWidth: 400 }}>
        <Card
          style={{ background: theme.palette.grey[200] }}
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            padding: theme => `${theme.spacing(3, 2, 0.5)} !important`
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
          >
            <Box>
              <Typography>{Data_import_and_Settings}</Typography>
            </Box>
            <Grid item>
              <Btn detailbutton=' Import Data' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Opening Lnvoice Creation Tool' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton='Chat of Accounts Importer' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Letter Head' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
            <Grid item>
              <Btn detailbutton=' Email Account' bgcolorbutton='secondary.C' numminwid={250} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardShowAccounting
