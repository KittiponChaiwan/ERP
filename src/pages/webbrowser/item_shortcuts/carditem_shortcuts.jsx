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
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Icon from '@mdi/react'
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'

// ** Import Table
import { DataGrid } from '@mui/x-data-grid'

// ** Icons Imports

import { mdiAccountBoxOutline } from '@mdi/js'
import { mdiMagnify } from '@mdi/js'

// ** Components

import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import Accounting_item from './accounting_item'
import Details_item from './details_item'
import Inventory_item from './inventory_item'
import Dashboard_item from './dashboard_item'
import Purchasing_item from './purchasing_item'
import Sales_item from './sales_item'
import Tex_item from './tex_item'
import Quality_item from './quality_item'
import Manufacturing_item from './manufacturing_item'

const Carditem_shortcuts = props => {
  // ** Props
  const { toggleNavVisibility } = props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [dataItem, setDataItem] = useState([])
  const [getRow, setGetRow] = useState('')
  const [filterData, setFilterData] = useState([])

  const columns = [
    { field: 'item_name', headerName: 'Item Name', width: 280 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          variant='text'
          onClick={() => {
            // setGetRow(params.row)
            console.log(params.row)
          }}
        >
          Status
        </Button>
      )
    },
    { field: 'item_group', headerName: 'Item Group', width: 150 },
    { field: 'description', headerName: 'ID', width: 250 },
    {
      field: 'Data',
      headerName: 'Data',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          sx={{ backgroundColor: '#ffff8d' }}
          variant='text'
          onClick={() => {
            setGetRow(params.row)
            console.log(params.row)
          }}
        >
          OPEN
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios
      .get('http://111.223.38.20/api/resource/Item?fields=["*"]', {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataItem(res.data.data)
        setFilterData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const HandleFilterName = value => {
    const res = filterData.filter(f => f.item_name.includes(value))
    setDataItem(res)
  }

  const HandleFilterGroup = value => {
    const res = filterData.filter(f => f.item_group.includes(value))
    setDataItem(res)
  }

  const HandleFilterID = value => {
    const res = filterData.filter(f => f.description.includes(value))
    setDataItem(res)
  }

  useEffect(() => {
    console.log(dataItem)
  }, [dataItem])

  // ** Hook

  return (
    <Box sx={{ bgcolor: 'white' }}>
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
        <Grid container sx={{ width: '100%' }}>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ bgcolor: 'white' }} variant='h5'>
              Manage Item
            </Typography>
            <Box
              sx={{
                bgcolor: 'beige',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex'
              }}
            >
              <Box>
                <TextField
                  // id='standard-basic'
                  label='Search Name'
                  variant='standard'
                  onChange={e => HandleFilterName(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 20 }}>
                <TextField
                  // id='standard-basic'
                  label='Search Group'
                  variant='standard'
                  onChange={e => HandleFilterGroup(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 20 }}>
                <TextField
                  // id='standard-basic'
                  label='Search ID'
                  variant='standard'
                  onChange={e => HandleFilterID(e.target.value)}
                />
              </Box>
              <Box sx={{ m: 4 }}>
                <Icon path={mdiMagnify} size={1.1} />
              </Box>
            </Box>
            <Box>
              <DataGrid rows={dataItem} columns={columns} getRowId={row => row.name} />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ bgcolor: 'orange' }}>
            <Box>
              <Typography variant='h5'>{getRow.item_name}</Typography>
            </Box>

            <Card sx={{ bgcolor: 'white', height: '100vh' }}>
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
        </Grid>
      </Box>
    </Box>
  )
}

export default Carditem_shortcuts
