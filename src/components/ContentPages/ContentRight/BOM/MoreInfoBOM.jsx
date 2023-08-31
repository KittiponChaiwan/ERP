import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  CardActions,
  Divider,
  CardContent,
  FormGroup,
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const MoreInfoBOM = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'ItemCode', headerName: 'Item Code', width: 150 },
    { field: 'ItemName', headerName: 'Item Name', width: 150 },
    { field: 'Description', headerName: 'Description', width: 150 },
    { field: 'StockQty', headerName: 'Stock Qty', width: 150 },
    { field: 'Rate', headerName: 'Rate', width: 150 }
  ]

  const rows = [{ id: 1, ItemCode: 'Sidw', ItemName: '100', Description: 'Nos', StockQty: '50.00', Rate: '5,000' }]

  return (
    <Grid>
      <Box>
        <Box>
          <Typography>Item Name</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.item_name} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Item Description</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.description} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant='h6'>Quality Inspection</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} disabled />
          <Typography sx={{ mt: 2 }}>Quality Inspection Required</Typography>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant='h6'>Materials Required (Exploded)</Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Item Description</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default MoreInfoBOM
