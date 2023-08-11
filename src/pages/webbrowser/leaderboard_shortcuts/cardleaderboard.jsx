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
import { DataGrid } from '@mui/x-data-grid'

// ** Icons Imports
import { mdiAccountBoxOutline } from '@mdi/js'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useState } from 'react'

const Cardleaderboard = props => {
  // ** Props
  const { toggleNavVisibility } = props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  ///////////////////////////////////////
  function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein
    }
  }

  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0)
  ]

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }

    return 0
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }

      return a[1] - b[1]
    })

    return stabilizedThis.map(el => el[0])
  }

  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)'
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories'
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)'
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)'
    },
    {
      id: 'protein',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)'
    }
  ]

  /////////////////////////////////////
  return (
    <Box sx={{}}>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <div style={{ display: 'flex', height: '100vh' }}>
            <div
              style={{
                width: '50px',
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
        <Grid container sx={{ width: '100%', ml: 2 }}>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ bgcolor: 'black', mt: 10 }}>222</Typography>
            <Typography sx={{}}>333</Typography>
            <Typography sx={{ height: 500 }}>222</Typography>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ mt: 10 }}>
            <Box>
              <Typography> หัวข้อ</Typography>
            </Box>

            <Card sx={{ height: '100vh' }}>
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

export default Cardleaderboard
