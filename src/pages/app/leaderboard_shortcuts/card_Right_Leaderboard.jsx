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
import EnhancedTable from 'src/components/Table/cardtable'
import Details_item from './details_item'
import Dashboard_item from './dashboard_item'
import Inventory_item from './inventory_item'
import Accounting_item from './accounting_item'
import Purchasing_item from './purchasing_item'
import Sales_item from './sales_item'
import Tex_item from './tex_item'
import Quality_item from './quality_item'
import Manufacturing_item from './manufacturing_item'

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
              <Tab value='4' label='Accounting' />
              <Tab value='5' label='Purchasing' />
              <Tab value='6' label='Sales' />
              <Tab value='7' label='Tax' />
              <Tab value='8' label='Quality' />
              <Tab value='9' label='Manufacturing' />
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
              <TabPanel value='4' sx={{ p: 0 }}>
                <Accounting_item />
              </TabPanel>
              <TabPanel value='5' sx={{ p: 0 }}>
                <Purchasing_item />
              </TabPanel>
              <TabPanel value='6' sx={{ p: 0 }}>
                <Sales_item />
              </TabPanel>
              <TabPanel value='7' sx={{ p: 0 }}>
                <Tex_item />
              </TabPanel>
              <TabPanel value='8' sx={{ p: 0 }}>
                <Quality_item />
              </TabPanel>
              <TabPanel value='9' sx={{ p: 0 }}>
                <Manufacturing_item />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

export default Card_Right_Leaderboard
