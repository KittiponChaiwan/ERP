// ** React Import
import { useState, useEffect } from 'react'

// ** Mui Import
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  Collapse,
  IconButton,
  Card,
  CardMedia,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'

// ** Mdi Import
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import Icon from '@mdi/react'
import { mdiPencil } from '@mdi/js'
import useMediaQuery from '@mui/material/useMediaQuery'
import Btn from 'src/components/Button/Button'

const DetailSalesInvoice = ({ dataRow }) => {
  // ** State

  const [currencyPrice, setCurrencyPrice] = useState(false)
  const [additionalDiscount, setAdditionalDiscount] = useState(false)
  const [description, setDescription] = useState(false)
  const [image, setImage] = useState(false)
  const [discountMargin, setDiscountMargin] = useState(false)
  const [dropShip, setDropShip] = useState(false)
  const [accountingDetails, setAccountingDetails] = useState(false)
  const [deferredRevenue, setDeferredRevenue] = useState(false)
  const [itemWeightDetails, setItemWeightDetails] = useState(false)
  const [stockDetails, setStockDetails] = useState(false)
  const [references, setReferences] = useState(false)
  const [accountingDimensions, setAccountingDimensions] = useState(false)

  const handleClickAdditionalDiscount = () => {
    setAdditionalDiscount(!additionalDiscount)
  }

  const handleClickCurrencyPrice = () => {
    setCurrencyPrice(!currencyPrice)
  }

  const handleClickDescription = () => {
    setDescription(!description)
  }

  const handleClickImage = () => {
    setImage(!image)
  }

  const handleClickDropShip = () => {
    setDropShip(!dropShip)
  }

  const handleClickAccountingDetails = () => {
    setAccountingDetails(!accountingDetails)
  }

  const handleClickDeferredRevenue = () => {
    setDeferredRevenue(!deferredRevenue)
  }

  const handleClickItemWeightDetails = () => {
    setItemWeightDetails(!itemWeightDetails)
  }

  const handleClickReferences = () => {
    setReferences(!references)
  }

  const handleClickStockDetails = () => {
    setStockDetails(!stockDetails)
  }

  const handleClickAccountingDimensions = () => {
    setAccountingDimensions(!accountingDimensions)
  }

  const handleClickDiscountMargin = () => {
    setDiscountMargin(!discountMargin)
  }

  /*  checkbox */
  const handleCheckboxChange = event => {
    // เมื่อ Checkbox ถูกเปลี่ยนแปลงสถานะ
    // คุณสามารถทำสิ่งที่คุณต้องการเมื่อ Checkbox ถูกเปิดหรือปิดที่นี่
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  const [selectedRow, setSelectedRow] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [openDialogs, setOpenDialogs] = useState(false)

  const handleRowClick = (params, event) => {
    event.preventDefault()
    setSelectedRow(params.row)
    setOpenDialog(true)
  }

  const handleRowClickDtb2 = (params, event) => {
    event.preventDefault()
    setSelectedRow(params.row)
    setOpenDialogs(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleCloseDialogs = () => {
    setOpenDialogs(false)
  }
  const [selectedRowData, setSelectedRowData] = useState({})

  const handleRowClicks = params => {
    setSelectedRowData(params.row)
    setOpenDialog(true) // เปิด Dialog เมื่อคลิกแถว
  }

  function formatDate(dateString) {
    const dateObject = new Date(dateString)
    const day = dateObject.getDate().toString().padStart(2, '0')
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    const year = dateObject.getFullYear()

    return `${day}-${month}-${year}`
  }
  const formattedDate = formatDate(dataRow.posting_date)
  const formattedDateEnd = formatDate(dataRow.due_date)

  function formatTime(timeString) {
    const timeParts = timeString.split(':')
    const hours = timeParts[0]
    const minutes = timeParts[1]

    return `${hours}:${minutes}`
  }
  const formattedTime = formatTime(dataRow.posting_time)

  function formatCurrency(params) {
    const formattedValue = new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 2
    }).format(params.value)

    return formattedValue
  }
  const isLGScreen = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const [quotation, setQuotation] = useState([])
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Sales%20Invoice/${dataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setQuotation(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [dataRow])

  useEffect(() => {
    console.log('quotation', quotation)
  }, [quotation])

  const columns = [
    { field: 'item_name', headerName: 'Item', width: 150 },
    { field: 'stock_qty', headerName: 'Quantity', width: 150 },
    { field: 'rate', headerName: 'Rate (THB) *', width: 150, valueFormatter: formatCurrency },
    { field: 'amount', headerName: 'Amount (THB) *', width: 150, valueFormatter: formatCurrency },
    {
      field: 'icon',
      headerName: 'Icon',
      width: 150,
      renderCell: params => (
        <Typography sx={{ display: 'flex' }}>
          <Icon path={mdiPencil} size={1} />
          &nbsp; Edit
        </Typography>
      )
    }
  ]

  const column = [
    { field: 'charge_type', headerName: 'Type *', width: 150 },
    { field: 'account_head', headerName: 'Account Head *', width: 150 },
    { field: 'rate', headerName: 'Rate', width: 150 },
    { field: 'base_tax_amount', headerName: 'Amount (THB)', width: 150, valueFormatter: formatCurrency },
    { field: 'base_total', headerName: 'Total (THB)', width: 150, valueFormatter: formatCurrency },
    {
      field: 'icon',
      headerName: 'Icon',
      width: 150,
      renderCell: params => (
        <Typography sx={{ display: 'flex' }}>
          <Icon path={mdiPencil} size={1} />
          &nbsp; Edit
        </Typography>
      )
    }
  ]

  if (quotation.length === 0) {
    return 'waiting...'
  }

  return (
    <Box>
      {/* /                   แสดงข่อมูลชุด แรก ของ Detail                               / */}
      <Grid container spacing={2} width={'100%'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>Customer</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={dataRow.customer} />
          <Typography>Date * :</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth label='' value={formattedDate} />
          <Typography>Posting Time :</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth label='' value={formattedTime} />
          <Typography>Payment Due Date *</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={formattedDateEnd}
            formatDate
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mb: 5, display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            control={<Checkbox checked={dataRow?.is_pos === 1} onChange={handleCheckboxChange} />}
            label='Include Payment (POS)'
          />
          <FormControlLabel
            control={<Checkbox checked={dataRow?.is_return === 1} onChange={handleCheckboxChange} />}
            label='Is Return (Credit Note)'
          />
          <FormControlLabel
            control={<Checkbox checked={dataRow?.is_debit_note === 1} onChange={handleCheckboxChange} />}
            label='Is Rate Adjustment Entry (Debit Note)Issue a debit note with 0 qty against an existing Sales Invoice'
          />
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />

      {/* /                   แสดงข่อมูลชุด dopdown                               / */}

      <Grid container sx={{ mb: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Button variant='filled' onClick={handleClickCurrencyPrice} sx={{ fontWeight: 'bold', p: 0 }}>
            Currency and Price List
          </Button>
          <IconButton size='small' onClick={handleClickCurrencyPrice}>
            {currencyPrice ? (
              <ChevronUp sx={{ fontSize: '1.875rem' }} />
            ) : (
              <ChevronDown sx={{ fontSize: '1.875rem' }} />
            )}
          </IconButton>
        </Box>

        {/* /                   แสดงข่อมูลชุด ที่อยู่ในdopdown                               / */}
        <Grid container>
          <Collapse in={currencyPrice} width={'100%'} style={{ width: '100%' }}>
            <Divider sx={{ margin: 0, width: '100%' }} />
            <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography>Currency *</Typography>
                <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={dataRow.currency} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography>Price List *</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  value={dataRow.selling_price_list}
                />
                <FormControlLabel
                  control={<Checkbox checked={dataRow?.ignore_pricing_rule === 1} onChange={handleCheckboxChange} />}
                  label='Ignore Pricing Rule'
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />

      {/* /                   แสดงข่อมูลชุด Item ที่เป็น DataGit                               / */}
      <Typography size='small' sx={{ fontWeight: 'bold' }}>
        Item
      </Typography>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <FormControlLabel
          control={<Checkbox checked={dataRow?.update_stock === 1} onChange={handleCheckboxChange} />}
          label='Update Stock'
        />
      </Grid>
      <div>
        <DataGrid
          sx={{ width: 'full', mt: 6 }}
          rows={quotation.items}
          columns={columns}
          getRowId={row => row.name}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          omRowClick={handleRowClicks}
          onRowClick={handleRowClick}
        />

        {/* Popup Dialog */}
        <Dialog
          fullScreen
          PaperProps={{
            style: {
              width: '80%',
              height: '80%',
              margin: 0,
              maxWidth: 'none',
              maxHeight: 'none'
            }
          }}
          open={openDialog}
          onClose={handleCloseDialog}
        >
          {/* /                   แสดงข่อมูลชุด ที่อยู่ใน popup เมื่อคลิกข้อมูลในตลาง                               / */}
          <DialogTitle>Row Details</DialogTitle>
          <DialogContent>
            <Card sx={{ width: '100%', p: 5 }}>
              <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* {Object.values(quotation.items)?.map(item => ( */}
                {/* ))} */}

                <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Item</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.item_code || ''}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Item Name</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.item_name || ''}
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickDescription} sx={{ fontWeight: 'bold' }}>
                      Description
                    </Button>
                    <IconButton size='small' onClick={handleClickDescription}>
                      {description ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={description} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Description *</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.description || ''}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5, width: '100%' }} />

                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickImage} sx={{ fontWeight: 'bold' }}>
                      Image
                    </Button>
                    <IconButton size='small' onClick={handleClickImage}>
                      {image ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>
                  <Grid container>
                    <Collapse in={image} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, mb: 5, width: '100%' }} />
                      <Grid container spacing={2} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <CardMedia
                            sx={{
                              border: '1px solid gray',
                              borderRadius: '10px',
                              width: '50%', // เพิ่มข้อมูลเพื่อทำให้รูปภาพเต็มพื้นที่
                              height: '250px' // กำหนดความสูงเป็น 0 เพื่อให้เกิดเป็นสี่เหลี่ยมจัตุรัส
                            }}
                            component='img'
                            alt='Sample Image'
                            image={selectedRow?.image}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5, width: '100%' }} />
                <Grid container spacing={2} style={{ width: '100%' }}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Quantity</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.qty || ''}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>UOM *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.uom || ''}
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container spacing={2} style={{ width: '100%' }}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Price List Rate (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.price_list_rate === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.price_list_rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Price List Rate (Company Currency)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.price_list_rate === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_price_list_rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickDiscountMargin} sx={{ fontWeight: 'bold' }}>
                      Discount and Margin
                    </Button>
                    <IconButton size='small' onClick={handleClickDiscountMargin}>
                      {discountMargin ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={discountMargin} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Discount (%) on Price List Rate with Margin</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={
                              selectedRow?.base_amount === '0.0'
                                ? '฿ 0.0'
                                : `฿ ${parseFloat(selectedRow?.discount_percentage).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}`
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography>Discount Amount </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={
                              selectedRow?.base_rate === '0.0'
                                ? '฿ 0.0'
                                : `฿ ${parseFloat(selectedRow?.discount_amount).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                  })}`
                            }
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5, width: '100%' }} />
                <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Rate *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Amount * </Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>Rate (Conpany Currency) </Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_rate === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Amount (Currency)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox checked={selectedRow?.is_free_item === 1} onChange={handleCheckboxChange} />}
                      label='Is Free Iten'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={selectedRow?.grant_commission === 1} onChange={handleCheckboxChange} />
                      }
                      label='Grant Commission'
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5, width: '100%' }} />
                <Grid container spacing={2} style={{ width: '100%' }}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Net Rate (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.net_rate === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.net_rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Net Amount (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.net_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.net_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Net Rate (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_net_rate === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_net_rate).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Net Amount (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_net_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_net_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickDropShip} sx={{ fontWeight: 'bold' }}>
                      Drop Ship
                    </Button>
                    <IconButton size='small' onClick={handleClickDropShip}>
                      {dropShip ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={dropShip} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedRow?.delivered_by_supplier === 1}
                                onChange={handleCheckboxChange}
                              />
                            }
                            label='Delivered by Supplier'
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickAccountingDetails} sx={{ fontWeight: 'bold' }}>
                      Accounting Details
                    </Button>
                    <IconButton size='small' onClick={handleClickAccountingDetails}>
                      {accountingDetails ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={accountingDetails} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {' '}
                          <Typography>income Account *</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.income_account || ''}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Expense Account</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.expense_account || ''}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickDeferredRevenue} sx={{ fontWeight: 'bold' }}>
                      Deferred Revenue
                    </Button>
                    <IconButton size='small' onClick={handleClickDeferredRevenue}>
                      {deferredRevenue ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={deferredRevenue} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedRow?.enable_deferred_revenue === 1}
                                onChange={handleCheckboxChange}
                              />
                            }
                            label='Enable Deferred Revenue'
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickItemWeightDetails} sx={{ fontWeight: 'bold' }}>
                      Item Weight Details
                    </Button>
                    <IconButton size='small' onClick={handleClickItemWeightDetails}>
                      {itemWeightDetails ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={itemWeightDetails} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {' '}
                          <Typography>Weight Per Unit </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.weight_per_unit}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Total Weight</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.total_weight}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickReferences} sx={{ fontWeight: 'bold' }}>
                      Stock Details
                    </Button>
                    <IconButton size='small' onClick={handleClickReferences}>
                      {references ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={references} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {' '}
                          <Typography>Warehouse </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.warehouse}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Available Batch Qty at Warehouse</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.actual_batch_qty}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedRow?.allow_zero_valuation_rate === 1}
                                onChange={handleCheckboxChange}
                              />
                            }
                            label='Allow Zero Valuation Rate'
                          />
                          <Typography>Available Qty at Warehouse</Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.actual_qty}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickStockDetails} sx={{ fontWeight: 'bold' }}>
                      References
                    </Button>
                    <IconButton size='small' onClick={handleClickStockDetails}>
                      {stockDetails ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={stockDetails} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {' '}
                          <Typography>Sales Order </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.sales_order}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Deilvered Qty </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.delivered_qty}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container>
                  <Box sx={{ width: '100%' }}>
                    <Button variant='filled' onClick={handleClickAccountingDimensions} sx={{ fontWeight: 'bold' }}>
                      Accounting Dimensions
                    </Button>
                    <IconButton size='small' onClick={handleClickAccountingDimensions}>
                      {accountingDimensions ? (
                        <ChevronUp sx={{ fontSize: '1.875rem' }} />
                      ) : (
                        <ChevronDown sx={{ fontSize: '1.875rem' }} />
                      )}
                    </IconButton>
                  </Box>

                  <Grid container>
                    <Collapse in={accountingDimensions} width={'100%'} style={{ width: '100%' }}>
                      <Divider sx={{ margin: 0, width: '100%' }} />
                      <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          {' '}
                          <Typography>Cost Center * </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.cost_center}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography>Project </Typography>
                          <TextField
                            sx={{ marginBottom: 5 }}
                            size='small'
                            variant='filled'
                            fullWidth
                            value={selectedRow?.project}
                          />
                        </Grid>
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* /                   แสดงข่อมูลชุด Total Quantity                               / */}
      <Divider sx={{ margin: 0, my: 8 }} />
      <Grid container spacing={2} width={'100%'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>Total Quantity</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={quotation.currency} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={`฿ ${parseFloat(quotation.total).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
          <Typography>Total Taxes and Charges (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={`฿ ${parseFloat(quotation.total_taxes_and_charges).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
        </Grid>
      </Grid>

      {/* /                   แสดงข่อมูลชุด ที่ใน Datagit ตารางที่2 แสดงเมื่อมีข้อมูล                            / */}
      <Box>
        {quotation.taxes.length > 0 ? (
          <DataGrid
            sx={{ width: 'full', mt: 6 }}
            rows={quotation.taxes}
            columns={column}
            getRowId={row => row.name}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            onRowClick={handleRowClickDtb2}
          />
        ) : (
          <p></p>
        )}

        {/* Popup Dialog */}
        <Dialog
          fullScreen
          PaperProps={{
            style: {
              width: '80%',
              height: '80%',
              margin: 0,
              maxWidth: 'none',
              maxHeight: 'none'
            }
          }}
          open={openDialogs}
          onClose={handleCloseDialogs}
        >
          <DialogTitle>Row Details</DialogTitle>
          <DialogContent>
            <Card sx={{ width: '100%', p: 5 }}>
              <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} width={'100%'}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Type *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.charge_type || ''}
                    />
                    <Typography>Account Head *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      label=''
                      value={selectedRow?.account_head || ''}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mb: 5 }}>
                    <Typography>Description *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      label=''
                      value={selectedRow?.description || ''}
                    />
                    <FormControlLabel
                      sx={{ mt: -4 }}
                      control={
                        <Checkbox checked={selectedRow?.included_in_print_rate === 1} onChange={handleCheckboxChange} />
                      }
                      label='Is this Tax included in Basic Rate?'
                    />
                    <Typography>
                      If checked, the tax amount will be considered as already included in the Print Rate / Print Amount
                    </Typography>
                  </Grid>
                  <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                  <DialogTitle variant='h5'>Item</DialogTitle>
                </Grid>
                <Grid container spacing={2} width={'100%'}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Cost Center</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.cost_center || ''}
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container spacing={2} width={'100%'}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Rate</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={selectedRow?.rate}
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
                <Grid container spacing={2} width={'100%'}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Amount (THB) *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.tax_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.tax_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Total (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.total === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.total).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Tax Amount After Discount Amount</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.tax_amount_after_discount_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.tax_amount_after_discount_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography>Amount (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_tax_amount === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_tax_amount).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                    <Typography>Total (THB)</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      size='small'
                      variant='filled'
                      fullWidth
                      value={
                        selectedRow?.base_total === '0.0'
                          ? '฿ 0.0'
                          : `฿ ${parseFloat(selectedRow?.base_total).toLocaleString('en-US', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            })}`
                      }
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0, my: 5.5, width: '100%' }} />
              </Grid>
            </Card>
          </DialogContent>
        </Dialog>
      </Box>
      {/* /                   แสดงข่อมูลชุด Totals                            / */}
      <Divider sx={{ margin: 0, my: 5.5 }} />
      <Typography sx={{ fontWeight: 'bold' }}>Totals</Typography>
      <Grid container spacing={2} width={'100%'}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography>Grand Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={`฿ ${parseFloat(quotation.grand_total).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
          <Typography>Rounding Adjustment (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={`฿ ${parseFloat(quotation.rounding_adjustment).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
          <FormControlLabel
            sx={{ mt: -5 }}
            control={
              <Checkbox checked={dataRow?.use_company_roundoff_cost_center === 1} onChange={handleCheckboxChange} />
            }
            label='Use Company default Cost Center for Round off'
          />
          <Typography>Rounded Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={`฿ ${parseFloat(quotation.rounded_total).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography></Typography>
          <Typography>In Words (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={quotation.in_words}
          />

          <Typography>Total Advance</Typography>
          <TextField
            sx={{
              marginBottom: 5,
              ...(isLGScreen ? { marginBottom: 12 } : {}) // เพิ่ม mb5 ถ้าหน้าจอ LG (ความกว้าง >= 1280px)
            }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={`฿ ${parseFloat(quotation.total_advance).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />

          <Typography>Outstanding Amount (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={`฿ ${parseFloat(quotation.outstanding_amount).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`}
          />
          <FormControlLabel
            sx={{ mt: -5 }}
            control={<Checkbox checked={dataRow?.disable_rounded_total === 1} onChange={handleCheckboxChange} />}
            label='Disable Rounded Total'
          />
        </Grid>
      </Grid>
      {/* /                   แสดงข่อมูลชุด ที่อยู่ในdopdown                               / */}
      <Divider sx={{ margin: 0, my: 5.5 }} />
      <Grid container sx={{ mb: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Button size='small' sx={{ fontWeight: 'bold' }} variant='filled' onClick={handleClickAdditionalDiscount}>
            Additional Discount
          </Button>
          <IconButton size='small' onClick={handleClickAdditionalDiscount}>
            {additionalDiscount ? (
              <ChevronUp sx={{ fontSize: '1.875rem' }} />
            ) : (
              <ChevronDown sx={{ fontSize: '1.875rem' }} />
            )}
          </IconButton>
        </Box>
        <Collapse in={additionalDiscount} width={'100%'} style={{ width: '100%' }}>
          <Divider sx={{ margin: 0, width: '100%' }} />
          <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography>Apply Additional Discount On</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                fullWidth
                value={dataRow.apply_discount_on}
              />
              <FormControlLabel
                sx={{ mt: -2 }}
                control={
                  <Checkbox checked={dataRow?.is_cash_or_non_trade_discount === 1} onChange={handleCheckboxChange} />
                }
                label='Is Cash or Non Trade Discount'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography>Additional Discount Percentage</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                fullWidth
                label=''
                value={dataRow.additional_discount_percentage}
              />
              <Typography>Additional Discount Amount (THB)</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                fullWidth
                label=''
                value={`฿ ${parseFloat(quotation.discount_amount).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}`}
              />
            </Grid>
          </Grid>
        </Collapse>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Typography variant=''>Add a comment:</Typography>
      <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={dataRow.description} />
      <Box sx={{ width: 'auto', marginBlock: 2 }}>
        <Button
          sx={{
            border: '1px solid black',
            fontWeight: 'bold',
            width: 100,
            height: 40,
            justifyContent: 'flex-start',
            color: 'secondary.G',
            '&:hover': {
              bgcolor: 'primary.dark',
              color: 'common.white'
            }
          }}
          onClick={() => handleButtonClick('')}
        >
          Comment
        </Button>
      </Box>
    </Box>
  )
}

export default DetailSalesInvoice
