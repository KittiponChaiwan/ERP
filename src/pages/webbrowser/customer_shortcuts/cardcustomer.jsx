import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { homecontent, objectData } from 'src/dummy/Homecontent'

function CardShortcuts({ CardShortcutsName, detailbutton }) {
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
                  {objectData?.map((x, index) => (
                    <React.Fragment key={x.id}>
                      <Grid container alignItems={'center'} justifyContent={'center'}>
                        <Box sx={{ width: 'auto' }}>
                          <Button
                            sx={{
                              maxWidth: 280,
                              minWidth: 280,
                              textAlign: 'left',
                              justifyContent: 'flex-start',
                              background: index % 2 ? theme.palette.secondary.G : theme.palette.secondary.D,
                              color: 'grey.50',
                              '&:hover': {
                                bgcolor: 'primary.dark',
                                color: 'common.white'
                              }
                            }}
                          >
                            <Typography> {x.name} </Typography>
                          </Button>
                        </Box>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Card>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardShortcuts
