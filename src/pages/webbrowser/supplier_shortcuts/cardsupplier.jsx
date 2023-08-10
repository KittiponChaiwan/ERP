// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports

import { mdiAccountBoxOutline } from '@mdi/js'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useState } from 'react'

const Cardsupplier = props => {
  // ** Props
  const { toggleNavVisibility } = props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // ** Hook

  return (
    <Box sx={{ bgcolor: 'red' }}>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <div style={{ display: 'flex', height: '100vh' }}>
            <div
              style={{
                width: '40px',
                background: theme.palette.secondary.F,
                color: 'white',

                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <Box>
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
              </Box>
            </div>
          </div>
        </Box>
        <Grid container sx={{ bgcolor: 'blue', width: '100%' }}>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'yellow' }}>
            <Typography sx={{ bgcolor: 'black' }}>222</Typography>
            <Typography sx={{ bgcolor: 'beige' }}>333</Typography>
            <Typography sx={{ bgcolor: 'black', height: 500 }}>222</Typography>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ bgcolor: 'orange' }}>
            <Box>
              <Typography> หัวข้อ</Typography>
            </Box>

            <Card sx={{ bgcolor: 'white', height: '100vh' }}>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Item One' />
                  <Tab value='2' label='Item Two' />
                  <Tab value='3' label='Item Three' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                      Header One
                    </Typography>
                    <Typography variant='body2' sx={{ marginBottom: 4 }}>
                      Pudding tiramisu caramels. Gingerbread gummies danish chocolate bar toffee marzipan. Wafer wafer
                      cake powder danish oat cake.
                    </Typography>
                    <Button variant='contained'>Button One</Button>
                  </TabPanel>
                  <TabPanel value='2' sx={{ p: 0 }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                      Header Two
                    </Typography>
                    <Typography variant='body2' sx={{ marginBottom: 4 }}>
                      Dragée chupa chups soufflé cheesecake jelly tootsie roll cupcake marzipan. Carrot cake sweet roll
                      gummi bears caramels jelly beans.
                    </Typography>
                    <Button variant='contained'>Button Two</Button>
                  </TabPanel>
                  <TabPanel value='3' sx={{ p: 0 }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                      Header Three
                    </Typography>
                    <Typography variant='body2' sx={{ marginBottom: 4 }}>
                      Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate
                      bar jujubes gummi bears lollipop.
                    </Typography>
                    <Button variant='contained'>Button Three</Button>
                  </TabPanel>
                </CardContent>
              </TabContext>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Cardsupplier
