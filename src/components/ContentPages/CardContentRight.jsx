// ** React Imports
import { useState } from 'react'

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

// ** Dummy Data
import { ItemContentMenu } from '../../dummy/rightContentMenu'

// ** Custom Components

import DashboardItem from './ContentRight/DashboardItem'
import InventoryItem from './ContentRight/InventoryItem'
import AccountingItem from './ContentRight/ItemPage/AccountingItem'
import PurchasingItem from './ContentRight/ItemPage/PurchasingItem'
import Details_item from 'src/pages/app/leaderboard_shortcuts/details_item'
import SalesItem from './ContentRight/ItemPage/SalesItem'
import TexItem from './ContentRight/ItemPage/TexItem'
import QualityItem from './ContentRight/ItemPage/QualityItem'
import ManufacturingItem from './ContentRight/ItemPage/ManufacturingItem'

const CardContentRight = ({ getDataRow, dropDowns }) => {
  const theme = useTheme()

  const [value, setValue] = useState(1)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ display: 'flex', p: 2, width: '100%' }}>
      <Grid container sx={{ width: '100%' }}>
        <Box>
          <Typography>{getDataRow.name}</Typography>
        </Box>

        <Card sx={{ height: 'auto' }}>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label='card navigation example'>
              {ItemContentMenu?.map(item => (
                <Tab value={item.id} label={item.name} key={item.id} />
              ))}
            </TabList>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <Details_item getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <DashboardItem />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <InventoryItem getDataRow={getDataRow} dropDowns={dropDowns} />
              </TabPanel>
              <TabPanel value={4} sx={{ p: 0 }}>
                <AccountingItem />
              </TabPanel>
              <TabPanel value={5} sx={{ p: 0 }}>
                <PurchasingItem />
              </TabPanel>
              <TabPanel value={6} sx={{ p: 0 }}>
                <SalesItem />
              </TabPanel>
              <TabPanel value={7} sx={{ p: 0 }}>
                <TexItem />
              </TabPanel>
              <TabPanel value={8} sx={{ p: 0 }}>
                <QualityItem />
              </TabPanel>
              <TabPanel value={9} sx={{ p: 0 }}>
                <ManufacturingItem />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

export default CardContentRight
