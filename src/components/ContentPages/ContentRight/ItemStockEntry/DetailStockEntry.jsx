//Import React and MUI
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { useEffect, useState } from 'react'

//Icon mdi
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'

const DetailStockEntry = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [collapseBOM, setCollapseBOM] = useState(false)
  const [collapseWarehouse, setCollapseWarehouse] = useState(false)
  const [collapseDiscription, setCollapseDiscription] = useState(false)
  const [collapseAccouting, setCollapseAccouting] = useState(false)
  const [collapseMoreInfo, setCollpseMoreInfo] = useState(false)

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickBOM = () => {
    setCollapseBOM(!collapseBOM)
  }

  const handleClickWarehouse = () => {
    setCollapseWarehouse(!collapseWarehouse)
  }

  const handleClickDiscription = () => {
    setCollapseDiscription(!collapseDiscription)
  }

  const handleAccouting = () => {
    setCollapseAccouting(!collapseAccouting)
  }

  const handleClickMoreInfo = () => {
    setCollpseMoreInfo(!collapseMoreInfo)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetItem(params.row)
  }

  const [getDataItem, setGetDataItem] = useState('')
  const [getItem, setGetItem] = useState('')

  useEffect(() => {
    console.log(dataRow)
  }, [dataRow])

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Stock Entry/${dataRow.name}`, {
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
  }, [dataRow])

  if (Object.values(getDataItem)?.length === 0) {
    return 'waiting...'
  }

  const columns = [
    { field: 'idx', headerName: 'No', width: 150 },
    { field: 's_warehouse', headerName: 'Source Warehouse', width: 150 },
    { field: 't_warehouse', headerName: 'Target Warehouse', width: 150 },
    { field: 'item_code', headerName: 'Item Code*', width: 150 },
    { field: 'qty', headerName: 'Qty*', width: 150 },
    { field: 'basic_rate', headerName: 'Basic Rate(as per Stock UOM)', width: 150 },
    {
      field: 'Edit',
      headerName: 'Edit',
      width: 50,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          variant='text'
          onClick={() => {
            setGetItem(params.row)
            setOpen(true)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Stock Entry Type</Typography>
          <TextField size='small' variant='filled' value={dataRow.stock_entry_type} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ margin: 1 }}>Posting Date</Typography>
          <TextField size='small' variant='filled' value={dataRow.posting_date} />
        </Box>
        <Box sx={{ ml: 16, display: 'flex', mt: 6 }}>
          <Checkbox {...label} checked={dataRow.inspection_required} onChange={handleCheckboxChange} />
          <Typography sx={{ mt: 4 }}>Inspection Required</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ width: '33%' }}>
          <Typography sx={{ margin: 1 }}>Work Order</Typography>
          <TextField size='small' variant='filled' value={dataRow.work_order} />
        </Box>
        <Box sx={{ ml: 20, width: '33%' }}>
          <Typography sx={{ margin: 1 }}>Posting Time</Typography>
          <TextField size='small' variant='filled' value={dataRow.posting_time} />
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
                  <Checkbox {...label} checked={dataRow.from_bom} onChange={handleCheckboxChange} />
                  <Typography sx={{ mt: 2 }}>From BOM</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Checkbox {...label} checked={dataRow.use_multi_level_bom} onChange={handleCheckboxChange} />
                  <Typography sx={{ mt: 2 }}>Use Multi-Level BOM</Typography>
                </Box>
                <Typography variant='subtitle2'>Including items for sub assemblies</Typography>
              </Box>
              <Box>
                <Box sx={{ ml: 20 }}>
                  <Typography sx={{ margin: 1 }}>Finished Good Quantity</Typography>
                  <TextField size='small' variant='filled' value={dataRow.fg_completed_qty} />
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
                <TextField size='small' variant='filled' value={dataRow.bom_no} />
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
                  <TextField size='small' variant='filled' value={dataRow.to_warehouse} />
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
            rows={getDataItem.items}
            columns={columns}
            getRowId={row => row.name}
            onRowClick={handleRowClick}
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
            <TextField size='small' variant='filled' value={dataRow.total_outgoing_value} />
          </Box>
          <Box sx={{ mt: 6, ml: 20 }}>
            <Typography sx={{ margin: 1 }}>Total Incoming Value (Receipt)</Typography>
            <TextField size='small' variant='filled' value={dataRow.total_incoming_value} />
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex' }}>
          <Box sx={{ width: '43%' }}></Box>
          <Box sx={{ width: '57%', mt: 6 }}>
            <Typography sx={{ margin: 1 }}>otal Value Difference (Incoming - Outgoing)</Typography>
            <TextField size='small' variant='filled' value={dataRow.value_difference} />
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
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth={'lg'}
        >
          <DialogTitle id='Editing Row #1'>{'Editing Row #1'}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <Typography variant='subtitle1'>Source Warehouse</Typography>
                  <TextField size='small' variant='filled' value={getItem.s_warehouse} />
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Typography variant='subtitle1'>Target Warehouse</Typography>
                  <TextField size='small' variant='filled' value={getItem.t_warehouse} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 8 }}>
                <Box>
                  <Typography variant='subtitle1'>Item Code</Typography>
                  <TextField size='small' variant='filled' value={getItem.item_code} />
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Box sx={{ display: 'flex' }}>
                    <Checkbox {...label} checked={getItem.is_finished_item} onChange={handleCheckboxChange} />
                    <Typography sx={{ mt: 2 }}>Is Finished Item</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Checkbox {...label} checked={getItem.is_scrap_item} onChange={handleCheckboxChange} />
                    <Typography sx={{ mt: 2 }}>Is Scrap Item</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography variant='subtitle1'>Item Name</Typography>
                  <TextField size='small' variant='filled' value={getItem.item_name} />
                </Box>
              </Box>
              <Box>
                <Box sx={{ mt: 5, display: 'flex' }}>
                  <Button size='small' variant='filled' label='' onClick={handleClickDiscription}>
                    <Typography variant='h6'>Default Warehouse</Typography>
                  </Button>

                  <CardActions className='card-action-dense'>
                    <IconButton size='small' onClick={handleClickDiscription}>
                      {collapseDiscription ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </CardActions>
                </Box>
              </Box>
              <Box>
                <Collapse in={collapseDiscription}>
                  <Divider sx={{ margin: 0 }} />
                  <CardContent>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <Typography variant='subtitle1'>Description</Typography>
                        <TextField size='small' variant='filled' value={getItem.t_warehouse} />
                      </Box>
                      <Box sx={{ ml: 30 }}>
                        <Typography variant='subtitle1'>Description</Typography>
                        <TextField size='small' variant='filled' value={getItem.t_warehouse} />
                      </Box>
                    </Box>
                    <Box sx={{ ml: 92, mt: 6 }}>
                      <Box sx={{ width: 100, height: 100, backgroundColor: '#e0e0e0' }}></Box>
                    </Box>
                  </CardContent>
                </Collapse>
              </Box>
              <Box sx={{ mt: 6 }}>
                <Typography variant='h6'>Quantity</Typography>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box>
                  <Typography variant='subtitle1'>Qty*</Typography>
                  <TextField size='small' variant='filled' value={getItem.qty} />
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Typography variant='subtitle1'>UOM*</Typography>
                  <TextField size='small' variant='filled' value={getItem.uom} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={getItem.retain_sample} onChange={handleCheckboxChange} />
                <Typography sx={{ mt: 2 }}>Retain Sample</Typography>
              </Box>
              <Box sx={{ mt: 6 }}>
                <Typography variant='h6'>Rates</Typography>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box>
                  <Typography variant='subtitle1'>Basic Rate (as per Stock UOM)</Typography>
                  <TextField size='small' variant='filled' value={getItem.basic_rate} />
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Typography variant='subtitle1'>Basic Amount</Typography>
                  <TextField size='small' variant='filled' value={getItem.basic_amount} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box>
                  <Typography variant='subtitle1'>Additional Cost</Typography>
                  <TextField size='small' variant='filled' value={getItem.additional_cost} />
                </Box>
                <Box sx={{ ml: 30 }}>
                  <Typography variant='subtitle1'>Amount</Typography>
                  <TextField size='small' variant='filled' value={getItem.amount} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box>
                  <Typography variant='subtitle1'>Valuation Rate</Typography>
                  <TextField size='small' variant='filled' value={getItem.valuation_rate} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={getItem.allow_zero_valuation_rate} onChange={handleCheckboxChange} />
                <Typography variant='subtitle1' sx={{ mt: 2 }}>
                  Allow Zero Valuation Rate
                </Typography>
              </Box>
              <Box>
                <Typography variant='h6' sx={{ mt: 6 }}>
                  Serial No / Batch
                </Typography>
              </Box>
              <Box>
                <Chip label='Add Serial / Batch No' />
              </Box>
              <Box>
                <Typography variant='h6' sx={{ mt: 6 }}>
                  Accounting
                </Typography>
                <Typography variant='subtitle1' sx={{ mt: 2 }}>
                  Difference Account
                </Typography>
                <TextField size='small' variant='filled' value={getItem.expense_account} />
              </Box>
              <Box>
                <Box sx={{ mt: 5, display: 'flex' }}>
                  <Button size='small' variant='filled' label='' onClick={handleAccouting}>
                    <Typography variant='h6'>Accounting</Typography>
                  </Button>
                  <CardActions className='card-action-dense'>
                    <IconButton size='small' onClick={handleAccouting}>
                      {collapseAccouting ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </CardActions>
                </Box>
              </Box>
              <Box>
                <Collapse in={collapseAccouting}>
                  <Divider sx={{ margin: 0 }} />
                  <CardContent>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <Typography variant='subtitle1'>Cost Center</Typography>
                        <TextField size='small' variant='filled' value={getItem.cost_center} />
                      </Box>
                    </Box>
                  </CardContent>
                </Collapse>
              </Box>
              <Box>
                <Box sx={{ mt: 5, display: 'flex' }}>
                  <Button size='small' variant='filled' label='' onClick={handleClickMoreInfo}>
                    <Typography variant='h6'>More Information</Typography>
                  </Button>
                  <CardActions className='card-action-dense'>
                    <IconButton size='small' onClick={handleClickMoreInfo}>
                      {collapseMoreInfo ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </CardActions>
                </Box>
              </Box>
              <Box>
                <Collapse in={collapseMoreInfo}>
                  <Divider sx={{ margin: 0 }} />
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box>
                        <Typography variant='subtitle1'>Actual Qty (at source/target)</Typography>
                        <TextField size='small' variant='filled' value={getItem.actual_qty} />
                      </Box>
                      <Box>
                        <Typography variant='subtitle1'>Transferred Qty</Typography>
                        <TextField size='small' variant='filled' value={getItem.transferred_qty} />
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Checkbox {...label} disabled />
                        <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Collapse>
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Insert Below</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  )
}

export default DetailStockEntry
