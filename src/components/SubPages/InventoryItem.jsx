import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  IconButton,
  CardActions,
  Collapse,
  Divider,
  CardContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'

//Icon
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import Icon from '@mdi/react'
import { mdiDelete } from '@mdi/js'
import { mdiContentDuplicate } from '@mdi/js'
import { mdiChevronDown } from '@mdi/js'
import { mdiKeyboardOutline } from '@mdi/js'

//import Dummy and Components
import { ColumnPreOrder, RowsPreOrder, ColumnUnit, RowsUnit } from './DummyInventoryItem/DummyInventory'
import axios from 'axios'

const InventoryItem = ({ dataRow, dropDowns }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  console.log('1: ', dropDowns.defaultMaterialRequestType)
  const [collapsePreOder, setCollapsePreOder] = useState(false)
  const [collapseUnit, setCollapseUnit] = useState(false)
  const [collapseSerial, setCollapseSerial] = useState(false)
  const [isInventoryCheck, setIsInventoryCheck] = useState(false)
  const [isSerialCheck, setIsSerialCheck] = useState(false)
  const [isAutomatically, setIsAutomatically] = useState(false)
  const [isRetainCheck, setIsRetainCheck] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickPreOder = () => {
    setCollapsePreOder(!collapsePreOder)
  }

  const handleClickOrder = () => {
    setCollapseUnit(!collapseUnit)
  }

  const handleClickSerial = () => {
    setCollapseSerial(!collapseSerial)
  }

  const handleCheckBox = event => {
    setIsInventoryCheck(event.target.checked)
  }

  const handleCheckBoxSerial = event => {
    setIsSerialCheck(event.target.checked)
  }

  const handleCheckBoxAutomatically = event => {
    setIsAutomatically(event.target.checked)
  }

  const handleCheckRetain = event => {
    setIsRetainCheck(event.target.checked)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetRowBarcodes(params.row)
  }

  const Columns = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'barcode', headerName: 'Barcodes', width: 150 },
    { field: 'barcode_type', headerName: 'Barcode Type', width: 200 },
    { field: 'uom', headerName: 'UOM', width: 200 },
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
            setGetRowBarcodes(params.row)
            handleClickOpen()
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  const [getDataBarcodes, setGetDataBarcodes] = useState('')
  const [getRowBarcodes, setGetRowBarcodes] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Item/${dataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetDataBarcodes(res.data.data)
      })
  }, [dataRow])

  if (getDataBarcodes.length === 0) {
    return 'waiting...'
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}> Shelf Life In Days :</Typography>
          <TextField variant='filled' label='' value={dataRow.shelf_life_in_days} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Warranty Period (in days) :</Typography>
          <TextField variant='filled' label='' value={dataRow.warranty_period} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>End of Life:</Typography>
          <TextField variant='filled' label='' value={dataRow.end_of_life} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight Per Unit:</Typography>
          <TextField variant='filled' label='' value={dataRow.weight_per_unit} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>default material request type-label:</Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
            <InputLabel id='default material request type-label'>default material request type:</InputLabel>
            <Select
              required
              labelId='default material request type-label'
              id='default material request type'
              name='default material request type'
              label='default material request type'
            >
              {dropDowns.defaultMaterialRequestType?.map(row => (
                <MenuItem key={row.id} value={row.id}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ml: 14 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight UOM:</Typography>
          <TextField variant='filled' label='' value={dataRow.weight_uom} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Valuation method:</Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
            <InputLabel id='valuation_method-label'>Valuation method:</InputLabel>
            <Select
              required
              labelId='valuation_method-label'
              id='valuation_method'
              name='valuation_method'
              label='valuation_method'
              sx={{ width: 270 }}
            >
              {dropDowns.valuationMethod?.map(row => (
                <MenuItem key={row.id} value={row.id}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Barcodes
        </Typography>
        <Typography variant='subtitle2' sx={{ m: 2 }}>
          Barcodes
        </Typography>
        <DataGrid
          rows={getDataBarcodes.barcodes}
          columns={Columns}
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

            <Box sx={{ display: 'flex', width: 850 }}>
              <Box sx={{ width: '20%' }}>
                <Typography variant='h6'>{getRowBarcodes.idx}</Typography>
              </Box>
              <Box sx={{ width: '80%' }}>
                <Button
                  sx={{
                    ':hover': {
                      bgcolor: 'red',
                      color: 'white'
                    },
                    width: 10,
                    bgcolor: 'red'
                  }}
                >
                  <Icon path={mdiDelete} size={1} color='white' />
                </Button>
                <Button sx={{ width: 150, bgcolor: '#e0e0e0', ml: 2 }}>Insert Below</Button>
                <Button sx={{ width: 130, bgcolor: '#e0e0e0', ml: 2 }}>Insert Above</Button>
                <Button sx={{ width: 150, bgcolor: '#e0e0e0', ml: 2 }}>
                  <Icon path={mdiContentDuplicate} size={1} />
                  <Typography>Duplicate</Typography>
                </Button>
                <Button sx={{ width: 80, bgcolor: '#e0e0e0', ml: 2 }}>
                  <Typography>Move</Typography>
                </Button>
                <Button sx={{ width: 30, bgcolor: '#e0e0e0', ml: 2 }} onClick={() => handleClose()}>
                  <Icon path={mdiChevronDown} size={1} />
                </Button>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box sx={{ display: 'flex', width: 800 }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mt: 4 }}>
                    <Typography sx={{ marginBottom: 2 }}>Barcode*</Typography>
                    <TextField variant='filled' label='' value={getRowBarcodes.barcode} />
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography sx={{ marginBottom: 2 }}>Barcode Type</Typography>
                    <TextField variant='filled' label='' value={getRowBarcodes.barcode_type} />
                  </Box>
                  <Box sx={{ mt: 4 }}>
                    <Typography sx={{ marginBottom: 2 }}>UOM</Typography>
                    <TextField variant='filled' label='' value={getRowBarcodes.uom} />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ mt: 4, display: 'flex', width: '100%' }}>
                  <Icon path={mdiKeyboardOutline} size={1} />
                  <Typography>Shortcuts:</Typography>
                  <Button sx={{ width: 100, bgcolor: '#e0e0e0', ml: 2, height: 30 }}>
                    <Typography variant='subtitle2'>Ctrl + Up</Typography>
                  </Button>
                  <Button sx={{ width: 130, bgcolor: '#e0e0e0', ml: 2, height: 30 }}>
                    <Typography variant='subtitle2'>Ctrl + Down</Typography>
                  </Button>
                  <Button sx={{ width: 80, bgcolor: '#e0e0e0', ml: 2, height: 30 }}>
                    <Typography variant='subtitle2'>ESC</Typography>
                  </Button>
                  <Button sx={{ width: 150, bgcolor: '#e0e0e0', ml: 100, height: 30 }}>
                    <Typography variant='subtitle2'>Insert Below</Typography>
                  </Button>
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickPreOder}>
          <Typography variant='h6'>Auto Pre-Order</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickPreOder}>
              {collapsePreOder ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapsePreOder}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Typography variant='subtitle2'>Reorder level based on Warehouse</Typography>
            <Typography variant='subtitle2'>Will also apply for variants unless overrridden</Typography>
            <DataGrid
              rows={RowsPreOrder}
              columns={ColumnPreOrder}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </CardContent>
        </Collapse>
      </Box>

      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickOrder}>
          <Typography variant='h6'>Units of Measure</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickOrder}>
              {collapseUnit ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseUnit}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Typography variant='subtitle2'>UOMs</Typography>
            <Typography variant='subtitle2'>Will also apply for variants</Typography>
            <DataGrid
              rows={RowsUnit}
              columns={ColumnUnit}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </CardContent>
        </Collapse>
      </Box>

      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickSerial}>
          <Typography variant='h6'>Serial Nos and Batches</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickSerial}>
              {collapseSerial ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseSerial}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={isInventoryCheck} onChange={handleCheckBox} />}
                    variant='body2'
                    label='Has Batch No'
                    sx={{ ml: 0.5, width: 150 }}
                  />
                  {isInventoryCheck && (
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', width: 320 }}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={isAutomatically} onChange={handleCheckBoxAutomatically} />}
                            variant='body2'
                            label='Automatically Create New Batch'
                            sx={{ ml: 0.5 }}
                          />
                          {isAutomatically && (
                            <Box sx={{ width: '70%' }}>
                              <Typography>Batch Number Series</Typography>
                              <TextField variant='outlined' />
                              <Typography variant='subtitle2' sx={{ width: '100%' }}>
                                Example: ABCD.#####. If series is set and Batch No is not mentioned in transactions,
                                then automatic batch number will be created based on this series. If you always want to
                                explicitly mention Batch No for this item, leave this blank. Note: this setting will
                                take priority over the Naming Series Prefix in Stock Settings.
                              </Typography>
                            </Box>
                          )}
                        </FormGroup>
                      </Box>
                      <Box sx={{ display: 'flex', width: 300, ml: 0.5 }}>
                        <Checkbox {...label} defaultChecked />
                        <Typography sx={{ ml: 0.5, mt: 2 }}>Has Expiry Date</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', width: 300 }}>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={isRetainCheck} onChange={handleCheckRetain} />}
                            variant='body2'
                            label='Retain Sample'
                            sx={{ ml: 0.2 }}
                          />
                          {isRetainCheck && (
                            <Box sx={{ width: '70%' }}>
                              <Typography>Max Sample Quantity</Typography>
                              <TextField variant='outlined' />
                              <Typography variant='subtitle2' sx={{ width: '100%' }}>
                                Maximum sample quantity that can be retained
                              </Typography>
                            </Box>
                          )}
                        </FormGroup>
                      </Box>
                    </Box>
                  )}
                </FormGroup>
              </Box>
              <Box sx={{ display: 'flex', ml: 40 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={isSerialCheck} onChange={handleCheckBoxSerial} />}
                    variant='body2'
                    label='Has Serial No'
                  />
                  {isSerialCheck && (
                    <Box sx={{ width: '70%' }}>
                      <Typography>Serial Number Series</Typography>
                      <TextField variant='outlined' />
                      <Typography variant='subtitle2' sx={{ width: '100%' }}>
                        Example: ABCD.##### If series is set and Serial No is not mentioned in transactions, then
                        automatic serial number will be created based on this series. If you always want to explicitly
                        mention Serial Nos for this item. leave this blank.
                      </Typography>
                    </Box>
                  )}
                </FormGroup>
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Box>
  )
}

export default InventoryItem
