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
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
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
  const [getItemTable, setGetItemTable] = useState('')
  const [collapseDiscription, setCollapseDiscription] = useState([])
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleChickConfig = () => {
    setCollapseConfig(!collapseConfig)
  }

  const handleChickDiscription = () => {
    setCollapseDiscription(!collapseDiscription)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetItemTable(params.row)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
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
    { field: 'amount', headerName: 'Amount (THB)', width: 150 },
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
            setGetItemTable(params.row)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
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
              <Checkbox {...label} checked={getDataRow.is_active} onChange={handleCheckboxChange} />
              <Typography sx={{ mt: 2 }}>Is Active</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} checked={getDataRow.is_default} onChange={handleCheckboxChange} />
              <Typography sx={{ mt: 2 }}>Is Default</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox {...label} checked={getDataRow.allow_alternative_item} onChange={handleCheckboxChange} />
              <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Checkbox
                {...label}
                checked={getDataRow.set_rate_of_sub_assembly_item_based_on_bom}
                onChange={handleCheckboxChange}
              />
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
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth={'lg'}
        >
          <DialogTitle id='Editing Row #' sx={{ display: 'flex' }}>
            {'Editing Row #'}
            <Typography variant='h6'>{getItemTable.idx}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography>Item Code</Typography>
                    <TextField size='small' variant='filled' value={getItemTable.item_code || ''} sx={{ width: 300 }} />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Box sx={{ display: 'flex' }}>
                      <Checkbox {...label} checked={getItemTable.do_not_explode} onChange={handleCheckboxChange} />
                      <Typography sx={{ mt: 2 }}>Do Not Explode</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Checkbox
                        {...label}
                        checked={getItemTable.allow_alternative_item}
                        onChange={handleCheckboxChange}
                      />
                      <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography>Item Name</Typography>
                    <TextField size='small' variant='filled' value={getItemTable.item_name || ''} sx={{ width: 300 }} />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ mt: 10, display: 'flex' }}>
                    <Button size='small' variant='filled' label='' onClick={handleChickDiscription}>
                      <Typography variant='h6'> Discription</Typography>
                    </Button>
                    <CardActions className='card-action-dense'>
                      <IconButton size='small' onClick={handleChickDiscription}>
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
                      <Box>
                        <Box sx={{ display: 'flex' }}>
                          <Box>
                            <Typography>Item Description</Typography>
                            <TextField
                              size='small'
                              variant='filled'
                              value={getItemTable.description || ''}
                              sx={{ width: 300 }}
                            />
                          </Box>
                          <Box sx={{ ml: 30 }}>
                            <Box sx={{ height: 100, width: 100, backgroundColor: '#e0e0e0' }}></Box>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Collapse>
                </Box>
                <Box>
                  <Box sx={{ ml: 2, mt: 6 }}>
                    <Typography variant='h6'>Quantity and Rate</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Qty</Typography>
                      <TextField size='small' variant='filled' value={getItemTable.qty || ''} sx={{ width: 300 }} />
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Stock Qty</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getItemTable.stock_qty || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>UOM</Typography>
                      <TextField size='small' variant='filled' value={getItemTable.uom || ''} sx={{ width: 300 }} />
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Stock UOM</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getItemTable.stock_uom || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ ml: 104, mt: 4 }}>
                      <Typography>Conversion Factor</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getItemTable.conversion_factor || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ ml: 2, mt: 6 }}>
                    <Typography variant='h6'>Rate & Amount</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Rate (THB)</Typography>
                      <TextField size='small' variant='filled' value={getItemTable.rate || ''} sx={{ width: 300 }} />
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Amount (THB)</Typography>
                      <TextField size='small' variant='filled' value={getItemTable.amount || ''} sx={{ width: 300 }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Basic Rate (THB)</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getItemTable.base_rate || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Amount (THB)</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getItemTable.base_amount || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mt: 16, display: 'flex' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Checkbox {...label} checked={getItemTable.has_variants} onChange={handleCheckboxChange} />
                      <Typography sx={{ mt: 2 }}>Has Variants</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', ml: 68 }}>
                      <Checkbox {...label} checked={getItemTable.sourced_by_supplier} onChange={handleCheckboxChange} />
                      <Typography sx={{ mt: 2 }}>Sourced by Supplier</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex' }}>
                      <Checkbox
                        {...label}
                        checked={getItemTable.include_item_in_manufacturing}
                        onChange={handleCheckboxChange}
                      />
                      <Typography sx={{ mt: 2 }}>Include Item In Manufacturing</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Insert Below
                </Button>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Grid>
  )
}

export default ProductItemBOM
