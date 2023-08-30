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
  Tabs,
  TextField,
  Typography,
  useTheme,
  Chip
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
import { MenuWorkOrder } from 'src/dummy/contentPages/menufacturingPage'
import { defaultMaterialRequestType, valuationMethod } from 'src/dummy/contentPages/itemPage'
import ProductionItemPage from 'src/components/ContentPages/ContentRight/MenufucturingWork_OderPage/ProductionItem'
import ConfigulationPage from 'src/components/ContentPages/ContentRight/MenufucturingWork_OderPage/Configulation'
import Operation from 'src/components/ContentPages/ContentRight/MenufucturingWork_OderPage/Operation'
import MoreInfo from 'src/components/ContentPages/ContentRight/MenufucturingWork_OderPage/MoreInfo'

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
                {MenuWorkOrder?.map(work => (
                  <Tab value={work.id} label={work.name} key={work.id} />
                ))}
              </Tabs>
            </TabList>

            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <ProductionItemPage getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <ConfigulationPage getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <Operation getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={4} sx={{ p: 0 }}>
                <MoreInfo getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const WorkOderPage = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState([])
  const [selectRowState, setSelectRowState] = useState(false)

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

  // ** Menu Column
  const columns = [
    { field: 'item_name', headerName: 'Item To Manufacture', width: 280 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Chip label={params.row.status} />
    },
    { field: 'name', headerName: 'ID', width: 300 },
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Work Order?fields=["*"]`, {
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

WorkOderPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default WorkOderPage
