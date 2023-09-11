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
  Chip,
  Checkbox
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
import { BomMenu } from 'src/dummy/contentPages/menufacturingPage'
import OperationBOM from 'src/components/ContentPages/ContentRight/BOM/OperationBOM'
import ProductItemBOM from 'src/components/ContentPages/ContentRight/BOM/ProductItemBOM'
import ScapAndProcessLoss from 'src/components/ContentPages/ContentRight/BOM/ScapAndProcessLoss'
import Costing from 'src/components/ContentPages/ContentRight/BOM/Costing'
import MoreInfoBOM from 'src/components/ContentPages/ContentRight/BOM/MoreInfoBOM'
import WebsiteBOM from 'src/components/ContentPages/ContentRight/BOM/WebsiteBOM'
import ConnectionsBOM from 'src/components/ContentPages/ContentRight/BOM/ConnectionBOM'
import { defaultMaterialRequestType, valuationMethod, RateOfMaterialsBasedOn } from 'src/dummy/contentPages/itemPage'

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
                {BomMenu?.map(work => (
                  <Tab value={work.id} label={work.name} key={work.id} />
                ))}
              </Tabs>
            </TabList>

            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <ProductItemBOM getDataRow={getDataRow} dropDowns={dropDowns} />
              </TabPanel>
              <TabPanel value={2} sx={{ p: 0 }}>
                <OperationBOM getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={3} sx={{ p: 0 }}>
                <ScapAndProcessLoss getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={4} sx={{ p: 0 }}>
                <Costing getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={5} sx={{ p: 0 }}>
                <MoreInfoBOM getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={6} sx={{ p: 0 }}>
                <WebsiteBOM getDataRow={getDataRow} />
              </TabPanel>
              <TabPanel value={7} sx={{ p: 0 }}>
                <ConnectionsBOM getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const BomPage = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState([])
  const [selectRowState, setSelectRowState] = useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod,
    RateOfMaterialsBasedOn: RateOfMaterialsBasedOn
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  // ** Menu Column
  const columns = [
    { field: 'name', headerName: 'ID', width: 280 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Chip label={params.row.status} />
    },
    { field: 'item', headerName: 'Item', width: 300 },
    {
      field: 'Is active',
      headerName: 'Is Active',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox {...label} checked={getDataRow.is_active} onChange={handleCheckboxChange} />
    },
    {
      field: 'Is Default',
      headerName: 'Is Default',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox {...label} checked={getDataRow.is_default} onChange={handleCheckboxChange} />
    },
    { field: 'total_cost', headerName: 'Total Cost', width: 300 },
    {
      field: 'Has Variants',
      headerName: 'Has Variants',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox {...label} checked={getDataRow.has_variants} onChange={handleCheckboxChange} />
    },
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}BOM?fields=["*"]`, {
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

BomPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default BomPage
