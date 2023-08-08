import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { mdiFolderOpenOutline } from '@mdi/js'
import CardShowAccounting from './Details_Reports&Masters/CardShowAccounting_1'

function CardReports_Masters({ Reports_MastersName_1 }) {
  const theme = useTheme()

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
          {Reports_MastersName_1}
        </Typography>
      </Box>

      <Card style={{ background: theme.palette.primary.light }} sx={{ width: '100%', height: 'auto' }}>
        <CardContent
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CardShowAccounting
                Title={'Accounting'}
                MenuName_1={'Chart of Accounts'}
                MenuIcon_1={mdiFolderOpenOutline}
                MenuName_2={'Company'}
                MenuIcon_2={mdiFolderOpenOutline}
                MenuName_3={'Customer'}
                MenuIcon_3={mdiFolderOpenOutline}
                MenuName_4={'Supplier'}
                MenuIcon_4={mdiFolderOpenOutline}
                MenuName_5={'Supplier'}
                MenuIcon_5={mdiFolderOpenOutline}
              />
              <CardShowAccounting
                Title={'Stock'}
                MenuName_1={'Item'}
                MenuIcon_1={mdiFolderOpenOutline}
                MenuName_2={'Warehome'}
                MenuIcon_2={mdiFolderOpenOutline}
                MenuName_3={'Brand'}
                MenuIcon_3={mdiFolderOpenOutline}
                MenuName_4={'Unit of Measure (UOM)'}
                MenuIcon_4={mdiFolderOpenOutline}
                MenuName_5={'Stock Reconciliation'}
                MenuIcon_5={mdiFolderOpenOutline}
              />
              <CardShowAccounting
                Title={'CRM'}
                MenuName_1={'Lead'}
                MenuIcon_1={mdiFolderOpenOutline}
                MenuName_2={'Customer Group'}
                MenuIcon_2={mdiFolderOpenOutline}
                MenuName_3={'Territory'}
                MenuIcon_3={mdiFolderOpenOutline}
              />
              <CardShowAccounting
                Title={'Data import and Settings'}
                MenuName_1={'Import Data'}
                MenuIcon_1={mdiFolderOpenOutline}
                MenuName_2={'Opening Invoice Creation Tool'}
                MenuIcon_2={mdiFolderOpenOutline}
                MenuName_3={'Chart Accounts Immporter'}
                MenuIcon_3={mdiFolderOpenOutline}
                MenuName_4={'Letter Head'}
                MenuIcon_4={mdiFolderOpenOutline}
                MenuName_5={'Email Account'}
                MenuIcon_5={mdiFolderOpenOutline}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardReports_Masters
