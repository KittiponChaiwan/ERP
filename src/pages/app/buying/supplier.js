// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
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
  useTheme
} from '@mui/material'

// ** Axios Imports
import axios from 'axios'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// ** Custom Components
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Dummy Data
import { defaultMaterialRequestType, valuationMethod } from 'src/dummy/contentPages/itemPage'
import { SupplierContentMenu } from 'src/dummy/contentPages/supplierPage'
import DetailSupplier from 'src/components/ContentPages/ContentRight/Supplier/DetailSupplier'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Dashboard_sup from 'src/components/ContentPages/ContentRight/Supplier/DashboardSupplier'
import TaxSupplier from 'src/components/ContentPages/ContentRight/Supplier/TaxSupplier'
import Contact_Address from 'src/components/ContentPages/ContentRight/Supplier/Contact_Address'
import Accounting from 'src/components/ContentPages/ContentRight/Supplier/AccountingSupplier'
import SettingsSupplier from 'src/components/ContentPages/ContentRight/Supplier/SettingsSupplier'
import CustomMonthLayout from 'src/components/ContentPages/ContentRight/Supplier/SettingsSupplier'

// ** Custom Components

const CardContentRight = ({ getDataRow }) => {
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
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons
            aria-label='visible arrows tabs example'
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 }
              }
            }}
          >
            {SupplierContentMenu?.map(sup => (
              <Tab value={sup.id} label={sup.name} key={sup.id} />
            ))}
          </Tabs>
          <TabContext value={value}>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <DetailSupplier getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <Dashboard_sup getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <TaxSupplier />
              </TabPanel>
              <TabPanel value={4} sx={{ p: 0 }}>
                <Contact_Address getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={5} sx={{ p: 0 }}>
                <Accounting />
              </TabPanel>
              <TabPanel value={6} sx={{ p: 0 }}>
                <SettingsSupplier />
              </TabPanel>
              <TabPanel value={7} sx={{ p: 0 }}>
                <CustomMonthLayout />
              </TabPanel>
              <TabPanel value={8} sx={{ p: 0 }}></TabPanel>
              <TabPanel value={9} sx={{ p: 0 }}></TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const SupplierPage = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState(data)
  const [selectRowState, setSelectRowState] = useState(false)

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

  // ** Menu Column
  const columns = [
    { field: 'supplier_name', headerName: 'Item Name', width: 280 },
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
          Status
        </Button>
      )
    },
    { field: 'supplier_group', headerName: 'Item Group', width: 150 },
    { field: 'supplier_type', headerName: 'ID', width: 250 },
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Supplier?fields=["*"]`, {
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

SupplierPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default SupplierPage
