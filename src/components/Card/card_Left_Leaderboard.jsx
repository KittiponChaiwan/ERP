// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useState } from 'react'
import EnhancedTable from 'src/components/Table/cardtable'
import Insertbutton from 'src/components/Button/InsertButton/insertbutton'
import PopupButton from '../Button/PopupButton/PopupButton'

const Card_Left_Leaderboard = props => {
  // ** Props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = newValue => {
    setValue(newValue)
  }

  // ** Hook

  return (
    <Box sx={{ p: 5 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Grid item>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Item
          </Typography>
        </Grid>
        <Grid sx={{ display: 'flex' }}>
          <Grid item>
            <PopupButton />
          </Grid>
          <Grid item>
            <Insertbutton />
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <EnhancedTable />
      </Box>
    </Box>
  )
}

export default Card_Left_Leaderboard
