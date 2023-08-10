// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Components
import BlankLayout from 'src/@core/layouts/BlankLayout'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import { useTheme } from '@mui/material/styles'
import Cardleaderboard from './cardleaderboard'

const Leaderboard_shortcuts = props => {
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
        <Cardleaderboard />
      </Box>
    </Box>
  )
}

Leaderboard_shortcuts.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Leaderboard_shortcuts
