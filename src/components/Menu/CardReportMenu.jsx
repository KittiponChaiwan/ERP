// ** React Imports
import React from 'react'

// ** Next Router
import { useRouter } from 'next/router'

// ** Mui Components
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Box, Typography, Grid } from '@mui/material'

// ** Custom Components
import { OnHover, Visible } from '../Motion'
import CardMenu from './SubMenu/CardMenu'

function CardReportMenu({ menus }) {
  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  if (menus && menus.length === 0)
    return (
      <Card>
        <CardContent>
          <Typography variant='h6' fontWeight={'bold'}>
            No Reports & Masters Found
          </Typography>
        </CardContent>
      </Card>
    )

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
          Reports & Masters
        </Typography>
      </Box>
      <Card style={{ background: theme.palette.secondary.E }} sx={{ width: '100%', height: 'auto' }}>
        <CardContent
          sx={{
            textAlign: 'left',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {menus.map(menu => (
                <Box key={menu.id}>
                  <Grid container>
                    <Grid item>
                      <Typography variant='h6' fontWeight={'bold'} sx={{ mt: 4, mb: 4, color: '#FFF' }}>
                        {menu.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={5}>
                    {menu.submenus.map(item => (
                      <Grid item key={item.id}>
                        <Visible>
                          <OnHover>
                            <CardMenu
                              MenuName={item.name}
                              MenuIcon={item.imgIcon}
                              handleButtonClick={() => router.push(item.route)}
                            />
                          </OnHover>
                        </Visible>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardReportMenu
