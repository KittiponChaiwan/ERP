//import MUI
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
  Checkbox
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

//Import Dummy Data
import {
  defaultMaterialRequestType,
  valuationMethod,
  ItemContentMenu,
  ItemGroup
} from 'src/dummy/contentPages/itemPage'

//Import Icon
import Magnify from 'mdi-material-ui/Magnify'

//Import Custom Components
import BlankLayout from 'src/@core/layouts/BlankLayout'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import StockItemGroup from 'src/components/ContentPages/ContentRight/ItemGroup/StockItemGroup'

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
                {ItemGroup?.map(item => (
                  <Tab value={item.id} label={item.name} key={item.id} />
                ))}
              </Tabs>
            </TabList>
            <CardContent>
              <TabPanel value={1} sx={{ p: 0 }}>
                <StockItemGroup getDataRow={getDataRow} />
              </TabPanel>
            </CardContent>
          </TabContext>
        </Card>
      </Grid>
    </Box>
  )
}

const Item_Group = ({ data }) => {
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
    { field: 'name', headerName: 'ID', width: 150 },
    { field: 'item_group_name', headerName: 'Item Group Name', width: 150 },
    { field: 'parent_item_group', headerName: 'parent item group', width: 250 },
    {
      field: 'IsGroup',
      headerName: 'Is Group',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox {...label} disabled />
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Item Group?fields=["*"]`, {
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

Item_Group.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Item_Group
