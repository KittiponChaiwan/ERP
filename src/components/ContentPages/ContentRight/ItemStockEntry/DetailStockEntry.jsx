//Import React and MUI
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Collapse,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'

//Icon mdi
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { DataGrid } from '@mui/x-data-grid'

const DetailStockEntry = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [collapseBOM, setCollapseBOM] = useState(false)
  const [collapseWarehouse, setCollapseWarehouse] = useState(false)

  const handleClickBOM = () => {
    setCollapseBOM(!collapseBOM)
  }

  const handleClickWarehouse = () => {
    setCollapseWarehouse(!collapseWarehouse)
  }

  const columns = [
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'SourceWarehouse', headerName: 'Source Warehouse', width: 150 },
    { field: 'TargetWarehouse', headerName: 'Target Warehouse', width: 150 },
    { field: 'ItemCode', headerName: 'Item Code*', width: 150 },
    { field: 'Qty', headerName: 'Qty*', width: 150 },
    { field: 'BasicRate', headerName: 'Basic Rate(as per Stock UOM)', width: 150 }
  ]

  const row = [
    {
      id: 1,
      SourceWarehouse: 'Stores - VCL',
      TargetWarehouse: 'Stores - VCL',
      ItemCode: 'M42 HSS-001',
      Qty: '10',
      BasicRate: '$50.00'
    }
  ]

  return (
    <Grid>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Stock Entry Type</Typography>
          <TextField size='small' variant='filled' value={getDataRow.stock_entry_type} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ margin: 1 }}>Posting Date</Typography>
          <TextField size='small' variant='filled' value={getDataRow.posting_date} />
        </Box>
        <Box sx={{ ml: 16, display: 'flex', mt: 6 }}>
          <Checkbox {...label} />
          <Typography sx={{ mt: 4 }}>Inspection Required</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ width: '33%' }}>
          <Typography sx={{ margin: 1 }}>Work Order</Typography>
          <TextField size='small' variant='filled' value={getDataRow.work_order} />
        </Box>
        <Box sx={{ ml: 20, width: '33%' }}>
          <Typography sx={{ margin: 1 }}>Posting Time</Typography>
          <TextField size='small' variant='filled' value={getDataRow.posting_time} />
          <Typography sx={{ margin: 1 }}>Asia/Kolkata</Typography>
        </Box>
        <Box sx={{ width: '33%' }}></Box>
      </Box>
      <Box>
        <Box sx={{ mt: 10, display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleClickBOM}>
            <Typography variant='h6'>BOM Info</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleClickBOM}>
                {collapseBOM ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Collapse in={collapseBOM}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox {...label} disabled checked />
                  <Typography sx={{ mt: 2 }}>From BOM</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox {...label} disabled checked />
                  <Typography sx={{ mt: 2 }}>Use Multi-Level BOM</Typography>
                </Box>
                <Typography variant='subtitle2'>Including items for sub assemblies</Typography>
              </Box>
              <Box>
                <Box sx={{ ml: 20 }}>
                  <Typography sx={{ margin: 1 }}>Finished Good Quantity</Typography>
                  <TextField size='small' variant='filled' value={getDataRow.fg_completed_qty} />
                </Box>
                <Box sx={{ ml: 20 }}>
                  <Typography>As per Stock UOM</Typography>
                  <Button>Get Item</Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography sx={{ margin: 1 }}>BOM No</Typography>
                <TextField size='small' variant='filled' value={getDataRow.bom_no} />
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Box>
      <Box>
        <Box sx={{ mt: 5, display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleClickWarehouse}>
            <Typography variant='h6'>Default Warehouse</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleClickWarehouse}>
                {collapseWarehouse ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapseWarehouse}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex' }}>
                <Box sx={{ width: '40%' }}></Box>
                <Box sx={{ width: '60%' }}>
                  <Typography sx={{ margin: 1 }}>Default Target Warehouse</Typography>
                  <TextField size='small' variant='filled' value={getDataRow.to_warehouse} />
                  <Typography variant='subtitle2' sx={{ margin: 1 }}>
                    Sets 'Target Warehouse' in each row of the items table.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Collapse>
        </Box>
        <Box>
          <Typography variant='h6' sx={{ ml: 2 }}>
            Items
          </Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant='subtitle1' sx={{ ml: 2 }}>
            Items
          </Typography>
        </Box>
        <Box>
          <DataGrid
            rows={row}
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
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Button>Download</Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button>Update Rate and Availability</Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mt: 6 }}>
            <Typography sx={{ margin: 1 }}>Total Outgoing Value (Consumption)</Typography>
            <TextField size='small' variant='filled' value={getDataRow.total_outgoing_value} />
          </Box>
          <Box sx={{ mt: 6, ml: 20 }}>
            <Typography sx={{ margin: 1 }}>Total Incoming Value (Receipt)</Typography>
            <TextField size='small' variant='filled' value={getDataRow.total_incoming_value} />
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex' }}>
          <Box sx={{ width: '43%' }}></Box>
          <Box sx={{ width: '57%', mt: 6 }}>
            <Typography sx={{ margin: 1 }}>otal Value Difference (Incoming - Outgoing)</Typography>
            <TextField size='small' variant='filled' value={getDataRow.value_difference} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Grid>
  )
}

export default DetailStockEntry
