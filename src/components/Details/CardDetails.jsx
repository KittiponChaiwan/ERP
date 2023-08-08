import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

function CardDetails({ DetailsName, Details, Content, showCard, head, body, footer, footer_1, footer_2, footer_3 }) {
  const theme = useTheme()

  const handleOnClick = () => {
    alert('คุณคลิกที่ตัวหนังสือแล้ว!')
  }

  return (
    <Card
      style={{ background: theme.palette.grey[200] }}
      sx={{
        mx: 2,
        display: 'flex',
        textAlign: 'left', // Align the text to the left
        flexDirection: 'column', // Display icon and text in a row
        alignItems: 'center',
        padding: theme => `${theme.spacing(3, 5, 0.5)} !important`,
        mb: 5
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant='h6' fontWeight={'bold'}>
          {DetailsName}
        </Typography>
        <Typography variant='body1'>{Details}</Typography>
      </Box>
      <Card style={{ background: theme.palette.primary.light }} sx={{ mb: 5, width: '100%', height: 'auto' }}>
        <CardContent
          sx={{
            mx: 2,
            display: 'flex',
            textAlign: 'left', // Align the text to the left
            flexDirection: 'column', // Display icon and text in a row
            alignItems: 'center', // Center the items vertically in the row
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
            minWidth: 100
          }}
        >
          <Grid container spacing={2} sx={{ width: '100%' }}>
            {/* /////////////// ข้อมูลใน BOX ซ้าย /////////////////// */}
            <Grid
              item
              sm={12}
              xs={12}
              md={5.5}
              lg={4.5}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
                flexDirection: 'column'
              }}
            >
              {Content}
            </Grid>

            {/* /////////////// ข้อมูลใน BOX ขวา /////////////////// */}
            <Grid item sm={12} xs={12} md={6} lg={7.5} sx={{ display: 'flex' }}>
              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                {showCard && (
                  <Card
                    sx={{
                      display: 'flex',
                      textAlign: 'left',
                      flexDirection: 'column',
                      padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                    }}
                  >
                    <Card sx={{ mb: 5 }}>
                      <Typography variant='body1' sx={{ color: theme.palette.grey[300] }}>
                        {head}
                      </Typography>
                    </Card>
                    <Card sx={{ mb: 5 }}>
                      <Typography variant='body2' sx={{ fornSize: 19, color: theme.palette.grey[300] }}>
                        {body}
                      </Typography>
                    </Card>
                    <Card>
                      <Typography style={{ fontSize: '13px', color: theme.palette.grey[300] }} variant='body2'>
                        {footer}
                      </Typography>
                    </Card>
                    <Card>
                      <Typography
                        style={{ fontSize: '13px' }}
                        variant='body2'
                        sx={{ ml: 11.5, color: theme.palette.grey[300] }}
                      >
                        {footer_1}
                      </Typography>
                    </Card>
                    <Card>
                      <Typography
                        style={{ fontSize: '13px' }}
                        variant='body2'
                        sx={{ ml: 11.5, color: theme.palette.grey[300] }}
                      >
                        {footer_2}
                      </Typography>
                    </Card>
                    <Card>
                      <Typography
                        style={{ fontSize: '13px' }}
                        variant='body2'
                        sx={{ ml: 11.5, color: theme.palette.grey[300] }}
                      >
                        {footer_3}
                      </Typography>
                    </Card>
                  </Card>
                )}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardDetails
