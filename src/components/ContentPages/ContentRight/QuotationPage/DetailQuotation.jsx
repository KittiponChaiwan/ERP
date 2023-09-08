//Import React
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Collapse
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { ChevronDown, ChevronUp } from 'mdi-material-ui'
import { useEffect, useState } from 'react'

const DetailQuotation = ({ dataRow }) => {
  const [collapseCurrency, setCollapseCurrency] = useState()
  const [collapseDescription, setCollapseDescription] = useState()
  const [collapseImage, setCollapseImage] = useState()
  const [collapseDiscount, setCollapseDiscount] = useState()

  const handleChickDiscount = () => {
    setCollapseDiscount(!collapseDiscount)
  }

  const handleChickImage = () => {
    setCollapseImage(!collapseImage)
  }

  const handleChickCurrency = () => {
    setCollapseCurrency(!collapseCurrency)
  }

  const handleChickDescription = () => {
    setCollapseDescription(!collapseDescription)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetOpenQuotation(params.row)
  }

  const [getQuotationItem, setGetQuotationItem] = useState('')
  const [getOpenQuotation, setGetOpenQuotation] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Quotation/${dataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetQuotationItem(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [dataRow])

  if (getQuotationItem.length === 0) {
    return 'waiting...'
  }

  const columns = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'item_code', headerName: 'Item Code', width: 150 },
    { field: 'qty', headerName: 'Quantity', width: 150 },
    { field: 'rate', headerName: 'Rate (THB)', width: 150 },
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
            setGetOpenQuotation(params.row)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  return (
    <Grid>
      <Grid>
        <Grid sx={{ width: '100%', display: 'flex' }}>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Quotation To</Typography>
              <TextField size='small' variant='filled' value={dataRow.quotation_to} />
            </Grid>
          </Grid>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Date</Typography>
              <TextField size='small' variant='filled' value={dataRow.transaction_date} />
            </Grid>
          </Grid>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Order Type</Typography>
              <TextField size='small' variant='filled' value={dataRow.order_type} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid sx={{ width: '100%', display: 'flex', mt: 4 }}>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Customer</Typography>
              <TextField size='small' variant='filled' value={dataRow.party_name} />
            </Grid>
          </Grid>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Valid Till</Typography>
              <TextField size='small' variant='filled' value={dataRow.valid_till} />
            </Grid>
          </Grid>
          <Grid sx={{ width: '33%' }}></Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid sx={{ width: '100%', display: 'flex', mt: 4 }}>
          <Grid sx={{ width: '33%' }}>
            <Grid>
              <Typography>Customer Name</Typography>
              <TextField size='small' variant='filled' value={dataRow.customer_name} />
            </Grid>
          </Grid>
          <Grid sx={{ width: '33%' }}></Grid>
          <Grid sx={{ width: '33%' }}></Grid>
        </Grid>
      </Grid>
      <Grid>
        <Grid sx={{ display: 'flex', mt: 6 }}>
          <Button size='small' variant='filled' label='' onClick={handleChickCurrency}>
            <Typography variant='h6'>Currency and Price List</Typography>
          </Button>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleChickCurrency}>
              {collapseCurrency ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Grid>
        <Grid>
          <Collapse in={collapseCurrency}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Grid sx={{ display: 'flex', width: '100%' }}>
                <Grid sx={{ width: '50%' }} item sm={12} md={6} lg={6}>
                  <Typography>Currency</Typography>
                  <TextField size='small' variant='filled' value={dataRow.currency} />
                </Grid>
                <Grid sx={{ width: '50%' }} item sm={12} md={6} lg={6}>
                  <Typography>Price List</Typography>
                  <TextField size='small' variant='filled' value={dataRow.selling_price_list} />
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', width: '100%' }}>
                <Grid sx={{ width: '50%' }}></Grid>
                <Grid sx={{ width: '50%', mt: 4, display: 'flex' }} item sm={12} md={6} lg={6}>
                  <Checkbox checked={dataRow.ignore_pricing_rule} onChange={handleCheckboxChange} />
                  <Typography sx={{ mt: 2 }}>Ignore Pricing Rule</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </Grid>
        <Grid>
          <Typography>Items</Typography>
          <DataGrid
            rows={getQuotationItem.items}
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
        </Grid>
        <Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            maxWidth={'lg'}
          >
            <DialogTitle id='Editing Row #' sx={{ display: 'flex' }}>
              {'Editing Row #'}
              <Typography variant='h6'>{getOpenQuotation.idx}</Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                <Grid>
                  <Grid sx={{ display: 'flex', width: 800 }}>
                    <Grid sx={{ width: '50%' }}>
                      <Typography>Item Code</Typography>
                      <TextField size='small' variant='filled' value={getOpenQuotation.item_code || ''} />
                    </Grid>
                    <Grid sx={{ width: '50%' }}>
                      <Typography>Item Name</Typography>
                      <TextField size='small' variant='filled' value={getOpenQuotation.item_name || ''} />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid sx={{ display: 'flex', mt: 6 }}>
                      <Button size='small' variant='filled' label='' onClick={handleChickDescription}>
                        <Typography variant='h6'>Description</Typography>
                      </Button>
                      <CardActions className='card-action-dense'>
                        <IconButton size='small' onClick={handleChickDescription}>
                          {collapseDescription ? (
                            <ChevronUp sx={{ fontSize: '1.875rem' }} />
                          ) : (
                            <ChevronDown sx={{ fontSize: '1.875rem' }} />
                          )}
                        </IconButton>
                      </CardActions>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Collapse in={collapseDescription}>
                      <Divider sx={{ margin: 0 }} />
                      <CardContent>
                        <Grid sx={{ display: 'flex', width: '100%' }}>
                          <Grid sx={{ width: '100%' }} item sm={12} md={12} lg={12}>
                            <Typography>description</Typography>
                            <TextField size='small' variant='filled' value={dataRow.currency} fullWidth />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Collapse>
                  </Grid>
                  <Grid>
                    <Grid sx={{ display: 'flex', mt: 6 }}>
                      <Button size='small' variant='filled' label='' onClick={handleChickImage}>
                        <Typography variant='h6'>Image</Typography>
                      </Button>
                      <CardActions className='card-action-dense'>
                        <IconButton size='small' onClick={handleChickImage}>
                          {collapseImage ? (
                            <ChevronUp sx={{ fontSize: '1.875rem' }} />
                          ) : (
                            <ChevronDown sx={{ fontSize: '1.875rem' }} />
                          )}
                        </IconButton>
                      </CardActions>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Collapse in={collapseImage}>
                      <Divider sx={{ margin: 0 }} />
                      <CardContent>
                        <Grid sx={{ display: 'flex', width: '100%' }}>
                          <Grid sx={{ width: '100%' }} item sm={12} md={12} lg={12}>
                            <Box sx={{ width: 100, height: 100, bgcolor: '#e0e0e0' }}></Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Collapse>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid sx={{ mt: 4 }}>
                    <Typography variant='h6'>Quantity and Rate</Typography>
                  </Grid>
                  <Grid>
                    <Grid sx={{ display: 'flex', mt: 4 }}>
                      <Grid sx={{ width: '50%' }}>
                        <Typography>Quantity</Typography>
                        <TextField size='small' variant='filled' value={getOpenQuotation.qty || ''} />
                      </Grid>
                      <Grid sx={{ width: '50%' }}>
                        <Typography>UOM</Typography>
                        <TextField size='small' variant='filled' value={getOpenQuotation.uom || ''} />
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', mt: 4 }}>
                      <Grid sx={{ width: '50%' }}>
                        <Typography>Stock UOM</Typography>
                        <TextField size='small' variant='filled' value={getOpenQuotation.stock_uom || ''} />
                      </Grid>
                      <Grid sx={{ width: '50%' }}>
                        <Typography>UOM Conversion Factor</Typography>
                        <TextField size='small' variant='filled' value={getOpenQuotation.conversion_factor || ''} />
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', mt: 4 }}>
                      <Grid sx={{ width: '50%' }}></Grid>
                      <Grid sx={{ width: '50%' }}>
                        <Typography>Qty as per Stock UOM</Typography>
                        <TextField size='small' variant='filled' value={getOpenQuotation.stock_qty || ''} />
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', mt: 4 }}>
                      <Grid sx={{ width: '50%' }}>
                        <Grid>
                          <Typography>Price List Rate (THB)</Typography>
                          <TextField size='small' variant='filled' value={getOpenQuotation.price_list_rate || ''} />
                        </Grid>
                        <Grid sx={{ mt: 4 }}>
                          <Typography>Price List Rate (THB)</Typography>
                          <TextField
                            size='small'
                            variant='filled'
                            value={getOpenQuotation.base_price_list_rate || ''}
                          />
                        </Grid>
                      </Grid>
                      <Grid sx={{ width: '50%' }}></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>
                    <Grid sx={{ display: 'flex', mt: 6 }}>
                      <Button size='small' variant='filled' label='' onClick={handleChickDiscount}>
                        <Typography variant='h6'>Description</Typography>
                      </Button>
                      <CardActions className='card-action-dense'>
                        <IconButton size='small' onClick={handleChickDiscount}>
                          {collapseDiscount ? (
                            <ChevronUp sx={{ fontSize: '1.875rem' }} />
                          ) : (
                            <ChevronDown sx={{ fontSize: '1.875rem' }} />
                          )}
                        </IconButton>
                      </CardActions>
                    </Grid>
                    <Grid>
                      <Collapse in={collapseDiscount}>
                        <Divider sx={{ margin: 0 }} />
                        <CardContent>
                          <Grid sx={{ display: 'flex', width: '100%' }}>
                            <Grid sx={{ width: '100%' }}>
                              <Grid sx={{ width: '50%', bgcolor: 'red' }}></Grid>
                              <Grid sx={{ width: '50%' }}>
                                <Grid>
                                  <Typography>Discount (%) on Price List Rate with Margin</Typography>
                                  <TextField
                                    size='small'
                                    variant='filled'
                                    value={getOpenQuotation.discount_percentage || ''}
                                  />
                                </Grid>
                                <Grid>
                                  <Typography>Discount Amount</Typography>
                                  <TextField
                                    size='small'
                                    variant='filled'
                                    value={getOpenQuotation.discount_amount || ''}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Collapse>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DetailQuotation
