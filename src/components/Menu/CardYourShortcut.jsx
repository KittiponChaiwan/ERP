// ** react Imports
import React from 'react'

// ** next Imports
import router, { useRouter } from 'next/router'

// ** mui Imports
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Box, Typography, Grid, Button } from '@mui/material'

function CardYourShortcut({ menus }) {
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
          Quick Access
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
            {menus?.map((item, index) => (
              <Box sx={{ width: 'auto' }} key={index}>
                <Button
                  sx={{
                    border: '1px solid black',
                    fontWeight: 'bold',
                    width: 280,
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    bgcolor: theme => (index % 2 === 0 ? theme.palette.secondary.D : theme.palette.secondary.C),
                    color: 'secondary.G',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      color: 'common.white'
                    }
                  }}
                  onClick={() => router.push(item.route)}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardYourShortcut
