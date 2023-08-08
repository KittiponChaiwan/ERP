// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'
import { mdiAccountBoxOutline } from '@mdi/js'

// ** Components
import BlankLayout from 'src/@core/layouts/BlankLayout'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import Carditem_shortcuts from './carditem_shortcuts'

const Item_shortcuts = props => {
  // ** Props
  const { toggleNavVisibility } = props

  // ** Hook

  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: 'red' }}>
      <Box>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box>
            <IconButton color='inherit' onClick={toggleNavVisibility} sx={{ ml: -2.75 }}>
              <Menu />
            </IconButton>
          </Box>
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
            <NotificationDropdown />
            <UserDropdown />
          </Box>
        </Box>
      </Box>
      <Box>
        <Carditem_shortcuts />
      </Box>
    </Box>
  )
}

Item_shortcuts.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Item_shortcuts
