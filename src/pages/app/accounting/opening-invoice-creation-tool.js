// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Box, Button, InputAdornment, TextField, useTheme } from '@mui/material'

// ** Axios Imports
import axios from 'axios'

// ** Icons Imports
import Magnify from 'mdi-material-ui/Magnify'

// ** Custom Components
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import CardContentRight from 'src/components/ContentPages/CardContentRight'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Dummy Data
import { defaultMaterialRequestType, valuationMethod } from 'src/dummy/contentPages/itemPage'

const ItemPage = ({ data }) => {
  // ** States
  const [getDataRow, setGetDataRow] = useState([])
  const [selectRowState, setSelectRowState] = useState(false)

  const dropDowns = {
    defaultMaterialRequestType: defaultMaterialRequestType,
    valuationMethod: valuationMethod
  }

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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Item?fields=["*"]`, {
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

ItemPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ItemPage
