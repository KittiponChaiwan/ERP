// ** react Imports
import React, { useState, useEffect } from 'react'

// ** Mui Components
import { useTheme } from '@mui/material/styles'
import { Card, CardContent, Box, Typography, Grid, Button } from '@mui/material'

function CardGuideVue({ MenuButton, RightSideContent }) {
  // ** Hooks
  const theme = useTheme()

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
        backgroundColor: 'theme.palette.grey[200]',
        padding: theme => `${theme.spacing(3, 5, 0.5)} !important`
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', mb: 4 }}>
        <Typography variant='h6' fontWeight={'bold'} color={'secondary.F'}>
          Let's begin your journey with ERPNext
        </Typography>
        <Typography variant='body1' color={'secondary.F'}>
          Item, Customer, Supplier and Quotation
        </Typography>
      </Box>
      <Card style={{ background: theme.palette.secondary.E }} sx={{ mb: 5, width: '100%', height: 'auto' }}>
        <CardContent>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            <Grid item sm={12} xs={12} md={4}>
              {MenuButton.map(item => (
                <Box sx={{ width: 'auto', marginBlock: 2 }} key={item.id}>
                  <Button
                    sx={{
                      border: '1px solid black',
                      fontWeight: 'bold',
                      width: '100%',
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
            <Grid item sm={12} xs={12} md={8}>
              <Box>
                <Card
                  sx={{
                    padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`,
                    background: theme.palette.grey[200]
                  }}
                >
                  {rightSideContent.head && (
                    <Box sx={{ mb: 5, mt: -6 }}>
                      <Typography variant='body1' sx={{ color: theme.palette.secondary.F }}>
                        {rightSideContent.head}
                      </Typography>
                    </Box>
                  )}

                  {rightSideContent.body && (
                    <Box sx={{ mb: 5 }}>
                      <Typography variant='body2' sx={{ fornSize: 19, color: theme.palette.secondary.F }}>
                        {rightSideContent.body}
                      </Typography>
                    </Box>
                  )}

                  {rightSideContent.footer && (
                    <Box>
                      <Typography style={{ fontSize: '13px', color: theme.palette.secondary.F }} variant='body2'>
                        {rightSideContent.footer.split('\n').map((item, index) => (
                          <div key={index} style={{ marginBottom: '5px' }}>
                            {item}
                          </div>
                        ))}
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  )
}

export default CardGuideVue
