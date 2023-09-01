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
import Collapse from '@mui/material/Collapse'
import { useEffect, useState } from 'react'

//Import Icon
import { ChevronUp } from 'mdi-material-ui'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import IconButton from '@mui/material/IconButton'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

const ProductItemBOM = ({ getDataRow, dropDowns }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [collapseConfig, setCollapseConfig] = useState([])
  const [getDataItem, setGetDataItem] = useState('')

  const handleChickConfig = () => {
    setCollapseConfig(!collapseConfig)
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}BOM/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetDataItem(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [getDataRow])

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'item_code', headerName: 'Item Code', width: 150 },
    { field: 'qty', headerName: 'Qty', width: 150 },
    { field: 'uom', headerName: 'UOM', width: 150 },
    { field: 'rate', headerName: 'Rate(THB)', width: 150 },
    { field: 'amount', headerName: 'Amount (THB)', width: 150 }
  ]

  if (getDataItem.length === 0) {
    return 'waiting...'
  }

  return (
    <Grid>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Typography>Item</Typography>
              <TextField size='small' variant='filled' label='' value={getDataRow.item} sx={{ width: 300 }} />
              <Typography variant='subtitle2'>Item to be manufactured or repacked</Typography>
            </Box>
            <Box sx={{ mt: 6 }}>
              <Typography>Item UOM</Typography>
              <TextField size='small' variant='filled' label='' value={getDataRow.uom} sx={{ width: 300 }} />
            </Box>
          </Box>
          <Box sx={{ ml: 30 }}>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} />
              <Typography sx={{ mt: 2 }}>Is Active</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} />
              <Typography sx={{ mt: 2 }}>Is Default</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} />
              <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} />
              <Typography sx={{ mt: 2 }}>Set rate of sub-assembly item based on BOM</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '40%', mt: 8 }}>
          <Typography>Quantity</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.quantity} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>
            Quantity of item obtained after manufacturing / repacking from given quantities of raw materials
          </Typography>
        </Box>
        <Box sx={{ mt: 10, display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleChickConfig}>
            <Typography variant='h6'> Cost Configuration</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleChickConfig}>
                {collapseConfig ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapseConfig}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <Typography>Rate Of Materials Based On</Typography>
                  <FormControl variant='outlined' sx={{ my: 4, width: 300 }}>
                    <InputLabel id='Rate Of Materials Based On'>Rate Of Materials Based On</InputLabel>
                    <Select
                      required
                      labelId='Rate Of Materials Based On'
                      id='Rate Of Materials Based On'
                      name='Rate Of Materials Based On'
                      label='Rate Of Materials Based On'
                    >
                      {dropDowns.RateOfMaterialsBasedOn?.map(row => (
                        <MenuItem key={row.id} value={row.id}>
                          {row.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Typography sx={{ mb: 5 }}>Currency</Typography>
                  <TextField size='small' variant='filled' label='' value={getDataRow.currency} sx={{ width: 300 }} />
                </Box>
              </Box>
            </CardContent>
          </Collapse>
        </Box>
        <Box>
          <Box sx={{ mt: 6 }}>
            <Typography variant='h6'>Raw Materials</Typography>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Typography>Item</Typography>
            <DataGrid
              rows={getDataItem.items}
              columns={columns}
              getRowId={row => row.name}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Box>
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

export default ProductItemBOM
