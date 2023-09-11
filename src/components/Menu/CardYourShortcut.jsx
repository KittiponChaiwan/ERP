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
        padding: theme => `${theme.spacing(3, 5, 0.5)} !important`
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
            padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
            minWidth: 100
          }}
        >
          <Grid container spacing={3} direction='row' alignItems='center'>
            {menus?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} justifyContent={'center'}>
                <Button
                  sx={{
                    border: '1px solid black',
                    fontWeight: 'bold',
                    width: '100%',
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
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardYourShortcut
