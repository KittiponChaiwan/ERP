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
import Details_item from './details_item'
import Dashboard_item from './dashboard_item'
import Inventory_item from './inventory_item'

// ** Icons Imports

import { mdiAccountBoxOutline } from '@mdi/js'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useState } from 'react'
import EnhancedTable from 'src/components/Table/cardtable'

const Card_Right_Leaderboard = props => {
  // ** Props
  const { getRow, dataItem } = props

  const { toggleNavVisibility } = props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // ** Hook

  return (
    <Box sx={{ display: 'flex', p: 2, width: '100%' }}>
      <Grid container sx={{ width: '100%' }}>
        <Box>
          <Typography>{getRow.name}</Typography>
        </Box>

        <Card sx={{ height: 'auto' }}>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label='card navigation example'>
              <Tab value='1' label='Details' />
              <Tab value='2' label='Dashboard' />
              <Tab value='3' label='Inventory' />
              <Tab value='4' label='Item Three' />
            </TabList>
            <CardContent>
              <TabPanel value='1' sx={{ p: 0 }}>
                <Details_item getRow={getRow} />
              </TabPanel>
              <TabPanel value='2' sx={{ p: 0 }}>
                <Dashboard_item />
              </TabPanel>
              <TabPanel value='3' sx={{ p: 0 }}>
                <Inventory_item getRow={getRow} dataItem={dataItem} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

export default Card_Right_Leaderboard
