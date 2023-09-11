// ** React Imports
import React, { useState } from 'react'

// ** Mui Imports
import { DataGrid } from '@mui/x-data-grid'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Collapse,
  Divider,
  IconButton,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel
} from '@mui/material'

//Icon
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const PurchasingItem = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [collapseSupplier, setCollapseSupplier] = useState(false)
  const [collapseDeferred, setCollapseDeferred] = useState(false)
  const [collapseForeign, setCollapseForeign] = useState(false)
  const [IsDeferredCheck, setIsDeferredCheck] = useState(false)

  const handleSupplier = () => {
    setCollapseSupplier(!collapseSupplier)
  }

  const handleDeferred = () => {
    setCollapseDeferred(!collapseDeferred)
  }

  const handleForeign = () => {
    setCollapseForeign(!collapseForeign)
  }

  const handleDeferredCheck = event => {
    setIsDeferredCheck(event.target.checked)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  const Columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Barcodes', headerName: 'Barcodes', width: 150 },
    { field: 'BarcodeType', headerName: 'Barcode Type', width: 200 }
  ]

  const Rows = [
    {
      id: 1,
      Barcodes: 'Lannister',
      BarcodeType: 'Cersei'
    },
    {
      id: 2,
      Barcodes: 'Lannister',
      BarcodeType: 'Jaime',
      UOM: 'dasd'
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Purchase Unit of Measure:</Typography>
          <TextField variant='filled' value={dataRow.purchase_uom || ''} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Lead Time in days :</Typography>
          <TextField variant='filled' label='' value={dataRow.lead_time_days || ''} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }} variant='subtitle1'>
            Minimum Order Qty:
          </Typography>
          <TextField variant='filled' label='' value={dataRow.min_order_qty || ''} />
          <Typography sx={{ marginBottom: 2 }} variant='subtitle2'>
            Minimum quantity should be as per Stock UOM:
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ ml: 6 }}>
            <Typography sx={{ marginBottom: 2 }}>Last Purchase Rate:</Typography>
            <TextField variant='filled' label='' value={dataRow.last_purchase_rate || ''} />
          </Box>
          <Box sx={{ display: 'flex', ml: 3 }}>
            <Checkbox {...label} checked={dataRow.is_customer_provided_item} onChange={handleCheckboxChange} />
            <Typography sx={{ mt: 2 }}>Is Customer Provided Item</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Safety Stock:</Typography>
            <TextField variant='filled' label='' value={dataRow.safety_stock || ''} />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.is_customer_provided_item} onChange={handleCheckboxChange} />
            <Typography variant='subtitle1' sx={{ mt: 2 }}>
              Allow Purchase
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleSupplier}>
          <Typography variant='h6'>Supplier Details</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleSupplier}>
              {collapseSupplier ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseSupplier}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', width: '40%' }}>
                <Checkbox
                  {...label}
                  checked={dataRow.delivered_by_supplier}
                  onChange={handleCheckboxChange}
                  sx={{ height: 30 }}
                />
                <Typography variant='subtitle1'>Delivered by Supplier (Drop Ship)</Typography>
              </Box>
              <Box sx={{ width: '60%' }}>
                <DataGrid
                  rows={Rows}
                  columns={Columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 }
                    }
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
                <Button>Add Row</Button>
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Box>
      <Box sx={{ mt: 5, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleDeferred}>
          <Typography variant='h6'>Deferred Expense</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleDeferred}>
              {collapseDeferred ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseDeferred}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={IsDeferredCheck} onChange={handleDeferredCheck} />}
                  variant='body2'
                  label='Enable Deferred Expense'
                />
                {IsDeferredCheck && (
                  <Box>
                    <Box sx={{ mt: 4 }}>
                      <Typography>Deferred Expense Account</Typography>
                      <TextField label='' value={dataRow.deferred_expense_account || ''} variant='outlined' fullWidth />
                    </Box>
                    <Box sx={{ mt: 4 }}>
                      <Typography>No of Months (Expense)</Typography>
                      <TextField label='' value={dataRow.no_of_months_exp || ''} variant='outlined' fullWidth />
                    </Box>
                  </Box>
                )}
              </FormGroup>
            </Box>
          </CardContent>
        </Collapse>
      </Box>
      <Box sx={{ mt: 5, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleForeign}>
          <Typography variant='h6'>Foreign Trade Details</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleForeign}>
              {collapseForeign ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseForeign}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='subtitle1' sx={{ mt: 1.5 }}>
                  Country of Origin
                </Typography>
                <TextField variant='filled' label='' value={dataRow.country_of_origin || ''} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 20 }}>
                <Typography variant='subtitle1' sx={{ mt: 1.5 }}>
                  Customs Tariff Number
                </Typography>
                <TextField variant='filled' label='' value={dataRow.customs_tariff_number || ''} />
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

export default PurchasingItem
