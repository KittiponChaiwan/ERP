// ** react Imports
import React, { useState, useEffect } from 'react'

// ** Mui Components
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Box, Typography, Grid, Button } from '@mui/material'

function CardGuideVue({ MenuButton, RightSideContent }) {
  // ** Hooks
  const theme = useTheme()

  // ** initial State
  const initialState = { head: '', body: '', footer: '' }

  // ** Vars
  const [buttonId, setButtonId] = useState(1)
  const [rightSideContent, setRightSideContent] = useState(RightSideContent[0])

  const handleButtonClick = id => {
    setButtonId(id)
    const array = id - 1
    setRightSideContent(RightSideContent[array])
  }

  useEffect(() => {
    console.log('buttonId', buttonId)
  }, [buttonId])

  return (
    <Card
      sx={{
        mx: 2,
        display: 'flex',
        textAlign: 'left', // Align the text to the left
        flexDirection: 'column', // Display icon and text in a row
        alignItems: 'center',
        backgroundColor: 'theme.palette.grey[200]',
        padding: theme => `${theme.spacing(3, 5, 0.5)} !important`,
        mb: 5
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant='h6' fontWeight={'bold'} color={'secondary.F'}>
          Let's begin your journey with ERPNext
        </Typography>
        <Typography variant='body1' color={'secondary.F'}>
          Item, Customer, Supplier and Quotation
        </Typography>
      </Box>
      <Card style={{ background: theme.palette.secondary.E }} sx={{ mb: 5, width: '100%', height: 'auto' }}>
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
              {MenuButton.map(item => (
                <Box sx={{ width: 'auto' }} key={item.id}>
                  <Button
                    sx={{
                      border: '1px solid black',
                      fontWeight: 'bold',
                      width: '100%',
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      bgcolor: theme => (buttonId === item.id ? theme.palette.secondary.D : theme.palette.secondary.C),
                      color: 'secondary.G',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        color: 'common.white'
                      }
                    }}
                    onClick={() => handleButtonClick(item.id)}
                  >
                    {item.buttonName}
                  </Button>
                </Box>
              ))}
            </Grid>

            {/* /////////////// ข้อมูลใน BOX ขวา /////////////////// */}
            <Grid item sm={12} xs={12} md={6} lg={7.5} sx={{ display: 'flex' }}>
              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                <Card
                  sx={{
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: 'column',
                    padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
                    background: theme.palette.grey[200]
                  }}
                >
                  {rightSideContent.head && (
                    <Grid sx={{ mb: 5, mt: -6 }}>
                      <Typography variant='body1' sx={{ color: theme.palette.secondary.F }}>
                        {rightSideContent.head}
                      </Typography>
                    </Grid>
                  )}

                  {rightSideContent.body && (
                    <Grid sx={{ mb: 5 }}>
                      <Typography variant='body2' sx={{ fornSize: 19, color: theme.palette.secondary.F }}>
                        {rightSideContent.body}
                      </Typography>
                    </Grid>
                  )}

                  {rightSideContent.footer && (
                    <Grid>
                      <Typography style={{ fontSize: '13px', color: theme.palette.secondary.F }} variant='body2'>
                        {rightSideContent.footer.split('\n').map((item, index) => (
                          <div key={index} style={{ marginBottom: '5px' }}>
                            {item}
                          </div>
                        ))}
                      </Typography>
                    </Grid>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardGuideVue
