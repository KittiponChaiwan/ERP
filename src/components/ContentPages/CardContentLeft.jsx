// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useEffect, useState } from 'react'
import EnhancedTable from 'src/components/Table/cardtable'
import Insertbutton from 'src/components/Button/InsertButton/InsertButton'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import PopupButton from '../Button/PopupButton/PopupButton'

const CardContentLeft = ({ menuColumn, dataRow }) => {
  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = newValue => {
    setValue(newValue)
  }

  // ** Hook

  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Item
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <PopupButton />
          <Insertbutton />
        </Box>
      </Box>
      <Box>
        <DataGrid rows={dataRow} columns={menuColumn} getRowId={row => row.name} />
      </Box>
    </Box>
  )
}

export default CardContentLeft
