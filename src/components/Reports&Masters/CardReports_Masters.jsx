import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Btn from '../Button/Button'
import CardShowAccounting from './Details_Reports&Masters/CardShowAccounting'

function CardReports_Masters({ Reports_MastersName }) {
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
          {Reports_MastersName}
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
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
          }}
        >
          <Grid container spacing={1} sx={{ display: 'flex' }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <CardShowAccounting
                Accounting={'Accounting'}
                Stock={'Stock'}
                CRM={'Crm'}
                Data_import_and_Settings={'Data import and Settings'}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardReports_Masters
