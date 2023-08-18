// ** React Imports
import React, { useEffect, useState } from 'react'

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
import DetailCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/DetailCustomer'
import DashboardCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/DashboardCustomer'
import ContactAndAddress from 'src/components/ContentPages/ContentRight/CustomerPage/ContactAndAddress'

// ** Dummy Data
import { CustomerContentMenu, defaultMaterialRequestType, valuationMethod } from 'src/dummy/contentPages/itemPage'

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
              {CustomerContentMenu?.map(cus => (
                <Tab value={cus.id} label={cus.name} key={cus.id} />
              ))}
            </TabList>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <DetailCustomer getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <DashboardCustomer />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <ContactAndAddress getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const CustomerPage = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState(data)
  const [selectRowState, setSelectRowState] = useState(false)

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

  // ** Menu Column
  const columns = [
    { field: 'customer_name', headerName: 'Customer Name', width: 280 },
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
    { field: 'customer_group', headerName: 'customer Group', width: 150 },
    { field: 'territory', headerName: 'territory', width: 150 },
    { field: 'name', headerName: 'ID', width: 150 },
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Customer?fields=["*"]`, {
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

CustomerPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default CustomerPage
