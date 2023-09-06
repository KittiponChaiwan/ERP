import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  Tab,
  TextField,
  Typography,
  useTheme,
  Tabs,
  Checkbox,
  Chip
} from '@mui/material'
import axios from 'axios'

//Import Icon
import Magnify from 'mdi-material-ui/Magnify'

//import Custom components
import BlankLayout from 'src/@core/layouts/BlankLayout'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import DetailStockEntry from 'src/components/ContentPages/ContentRight/ItemStockEntry/DetailStockEntry'
import AdditionalCosts from 'src/components/ContentPages/ContentRight/ItemStockEntry/AdditionalCosts'
import OtherStockEntry from 'src/components/ContentPages/ContentRight/ItemStockEntry/OtherStockEntry'

import { defaultMaterialRequestType, valuationMethod, pricelist, itemStockEntry } from 'src/dummy/contentPages/itemPage'

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
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                allowScrollButtonsMobile
                aria-label='scrollable force tabs example'
              >
                {itemStockEntry?.map(item => (
                  <Tab value={item.id} label={item.name} key={item.id} />
                ))}
              </Tabs>
            </TabList>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <DetailStockEntry getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <AdditionalCosts getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <OtherStockEntry getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const StockEntry = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState([])
  const [selectRowState, setSelectRowState] = useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

  // ** Menu Column
  const columns = [
    { field: 'stock_entry_type', headerName: 'stock entry type', width: 280 },
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
            console.log(params.row)
          }}
        >
          ● Submitted
        </Button>
      )
    },
    {
      field: 'purpose',
      headerName: 'purpose',
      width: 180,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Chip label={params.row.purpose} />
    },
    { field: 'source_warehouse_address', headerName: 'Default Source Warehouse', width: 150 },
    { field: 'to_warehouse', headerName: 'Default Target Warehouse', width: 150 },
    { field: 'per_transferred', headerName: 'Per Transferred', width: 150 },
    {
      field: 'Is Return',
      headerName: 'Is Return',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox {...label} disabled />
    },
    { field: 'name', headerName: 'ID', width: 200 },
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
            console.log(params.row)
            setGetDataRow(params.row)
            setSelectRowState(true)
          }}
        >
          OPEN
        </Button>
      )
    }
  ]

  if (!data) {
    return <Box>Loading...</Box>
  }

  return (
    <Box>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', justifyContent: 'end', width: '100%' }}>
          <TextField
            size='small'
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Magnify fontSize='small' />
                </InputAdornment>
              )
            }}
          />
        </Box>

        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          <UserDropdown />
        </Box>
      </Box>
      <Box>
        <CardDividerContent
          contentLeft={<CardContentLeft menuColumn={columns} dataRow={data} />}
          contentRight={<CardContentRight getDataRow={getDataRow} dropDowns={dropDowns} />}
          selectRowState={selectRowState}
        />
      </Box>
    </Box>
  )
}

export const getServerSideProps = async context => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Stock Entry?fields=["*"]`, {
      headers: {
        Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
      }
    })

    const data = res.data.data // No need to await here

    if (res.status !== 200) {
      return {
        props: { data: null }
      }
    }

    return {
      props: { data }
    }
  } catch (error) {
    return {
      props: { data: null }
    }
  }
}

StockEntry.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default StockEntry
