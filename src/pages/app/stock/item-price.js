//Import MUI
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  InputAdornment,
  TextField,
  useTheme,
  Tabs,
  Tab
} from '@mui/material'

//Import Menu
import { useEffect, useState } from 'react'
import axios from 'axios'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

//Import Custom Components
import {
  defaultMaterialRequestType,
  valuationMethod,
  ItemContentMenu,
  ItemPricePage
} from 'src/dummy/contentPages/itemPage'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import StockItemPricePage from 'src/components/ContentPages/ContentRight/ItemPricePage/StockItemPrice'

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
                {ItemPricePage?.map(itemPrice => (
                  <Tab value={itemPrice.id} label={itemPrice.name} key={itemPrice.id} />
                ))}
              </Tabs>
            </TabList>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <StockItemPricePage getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const ItemPrice = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState([])
  const [selectRowState, setSelectRowState] = useState(false)

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

  useEffect(() => {
    console.log(getDataRow)
  }, [getDataRow])

  // ** Menu Column
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
            console.log(params.row)
          }}
        >
          Status
        </Button>
      )
    },
    { field: 'item_code', headerName: 'Item Code', width: 150 },
    { field: 'Band', headerName: 'Band', width: 100 },
    { field: 'price_list', headerName: 'Price List', width: 200 },
    { field: 'price_list_rate', headerName: 'Rate', width: 150 },
    { field: 'Reference', headerName: 'Reference', width: 150 },
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
    <Grid>
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
    </Grid>
  )
}

export const getServerSideProps = async context => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Item Price?fields=["*"]`, {
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

ItemPrice.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ItemPrice
