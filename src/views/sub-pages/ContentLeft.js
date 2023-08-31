// ** MUI Imports
import { Card, Chip, Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

// ** Components
import InsertButton from 'src/components/Button/InsertButton/InsertButton'
import PopupButton from 'src/components/Button/PopupButton/PopupButton'

const ContentLeft = ({ menuColumn, dataRow, handleRowClick }) => {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Item
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <PopupButton />
          <InsertButton />
        </Box>
      </Box>
      <Card>
        {dataRow.map((item, index) => (
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', border: 1 }}
            key={item.name}
            onClick={() => handleRowClick(item)}
          >
            <Button variant='outlined' fullWidth sx={{ justifyContent: 'space-between' }}>
              {item.name} <Chip label={'enable'} size='small' />
            </Button>
          </Box>
        ))}
      </Card>
    </Box>
  )
}

export default ContentLeft
