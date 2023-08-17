// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import BlankLayout from 'src/@core/layouts/BlankLayout'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import { useTheme } from '@mui/material/styles'
import Cardleaderboard from './card_Left_Leaderboard'
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import Card_Left_Leaderboard from './card_Left_Leaderboard'
import Card_Right_Leaderboard from './card_Right_Leaderboard'
import Dawer_item from './dawer_item'

const Leaderboard_shortcuts = props => {
  // ** Props
  const { toggleNavVisibility } = props

  // ** Hook

  const theme = useTheme()

  const [dataItem, setDataItem] = useState('')
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
            setGetRow(params.row)
          }}
        >
          OPEN
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Item?fields=["*"]`, {
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

  const HandleFilterId = value => {
    const res = filterData.filter(f => f.item_name.includes(value))
    setDataItem(res)
  }

  const HandleFilterDis = value => {
    const res = filterData.filter(f => f.description.includes(value))
    setDataItem(res)
  }

  const HandleFilterGroup = value => {
    const res = filterData.filter(f => f.item_group.includes(value))
    setDataItem(res)
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
          contentLeft={
            <Card_Left_Leaderboard
              columns={columns}
              dataItem={dataItem}
              HandleFilterId={HandleFilterId}
              HandleFilterDis={HandleFilterDis}
              HandleFilterGroup={HandleFilterGroup}
            />
          }
          contentRight={<Card_Right_Leaderboard getRow={getRow} dataItem={dataItem} />}
        />
      </Box>
    </Box>
  )
}

Leaderboard_shortcuts.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Leaderboard_shortcuts
