// ** React Import
import React from 'react'

// ** Mui Import

import { useState } from 'react'
import {
  Grid,
  Card,
  TextField,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  CardMedia,
  Divider,
  IconButton,
  Collapse,
  FormGroup
} from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useEffect } from 'react'
import axios from 'axios'
import Btn from 'src/components/Button/Button'
import { DataGrid } from '@mui/x-data-grid'
import { ChevronDown, ChevronUp } from 'mdi-material-ui'

const ContactAddressSalesinvoice = ({ dataRow }) => {
  const [isOpenDetailAddress, setIsOpenDetailAddress] = useState(false)
  const [isOpenDetaiContact, setIsOpenDetailContact] = useState(false)
  const [internalCustomer, setInternalSupplier] = useState(false)
  const [moreInformation, setCurrencyPrice] = useState(false)

  const handleEditClickDetailAddress = () => {
    setIsOpenDetailAddress(true)
  }

  const handleSaveClickDetailAddress = () => {
    setIsOpenDetailAddress(false)
  }

  const handleEditClickDetailContact = () => {
    setIsOpenDetailContact(true)
  }

  const handleSaveClickDetailContact = () => {
    setIsOpenDetailContact(false)
  }

  const handleClickInternalCustomer = () => {
    setInternalSupplier(!internalCustomer)
  }

  const handleClickMoreInformation = () => {
    setCurrencyPrice(!moreInformation)
  }

  const handleCheckboxChange = event => {
    setIsInternalSupplier(event.target.checked)
  }

  const [state, setState] = React.useState({
    Preferred_Billing_Address: true,
    Preferred_Shipping_Addressn: false,
    Disabled: false
  })

  // const handleCheckboxChange = event => {
  //   console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  // }

  const column = [
    { field: 'doctype', headerName: 'Link Document Typee *', width: 200 },
    {
      field: 'name',
      headerName: 'Link Name *',
      width: 250,
      renderCell: params => (
        <Button sx={{ color: 'black' }} onClick={() => handleEditLinkName(params.row)}>
          {dataCustomer[0]?.name}
        </Button>
      )
    },

    { field: 'customer_name', headerName: 'Link Title', width: 250 }
  ]

  const [isOpenEditLinkName, setIsOpenEditLinkName] = useState(false)
  const [linkName, setLinkName] = useState(null)

  const handleEditLinkName = row => {
    setLinkName(row)
    setIsOpenEditLinkName(true)
  }

  const styles = {
    lineBreakText: {
      whiteSpace: 'pre-line'
    }
  }

  const [dataAddress, setDataAddress] = useState('')
  const [dataContact, setDataContact] = useState('')
  const [dataCustomer, setDataCustomer] = useState([])
  const [isInternalCustomer, setIsInternalSupplier] = useState(false)

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}Address?filters=[["Dynamic Link","link_name", "=", "${dataRow.customer}"]]&fields=["*"]`,
        {
          headers: {
            Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
          }
        }
      )
      .then(res => {
        setDataAddress(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}Contact?filters=[["Dynamic Link","link_name", "=", "${dataRow.customer}"]]&fields=["*"]`,
        {
          headers: {
            Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
          }
        }
      )
      .then(res => {
        setDataContact(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Customer/${dataRow.customer}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        const formattedData = [res.data.data]

        // กำหนดค่าให้ dataCustomer เป็น formattedData
        setDataCustomer(formattedData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [dataRow])

  useEffect(() => {
    console.log('Supplier', dataRow)
  })
  useEffect(() => {
    console.log('Address', dataAddress)
  })
  useEffect(() => {
    console.log('Contact', dataContact)
  })
  useEffect(() => {
    console.log('Customer', dataCustomer)
  }, [dataCustomer])

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container>
        <Grid item sx={{ width: '100%', height: '100%' }}>
          <CardHeader title='Billing Address' />
          <CardContent>
            <Typography>Customer Address</Typography>
            <Card sx={{ mb: 5 }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddress[0]?.name}</Typography>
              </CardContent>
              <CardActions className='card-action-dense'>
                <Button onClick={handleEditClickDetailContact}>แก้ไข</Button>
                <Dialog
                  open={isOpenDetaiContact}
                  onClose={() => setIsOpenDetailContact(false)}
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
                >
                  <DialogTitle>Edit Address</DialogTitle>
                  <DialogContent>
                    <Card sx={{ width: '100%', p: 5 }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ margin: 1 }}>Address Title</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_title || ''}
                            onChange={e => setFirstName(e.target.value)}
                          />
                          <Typography sx={{ marginBottom: 2 }}>Address Type *</Typography>
                          <Box fullWidth>
                            <DorpdownButton />
                          </Box>

                          <Typography sx={{ margin: 1 }}>Address Line 1 * </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_line1 || ''}
                            onChange={e => setLastName(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Address Line 2</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_line2 || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                          <Typography sx={{ margin: 1 }}>City / Town</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.city || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                          <Typography sx={{ margin: 1 }}>County</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.county || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                          <Typography sx={{ margin: 1 }}>State / Province</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.state || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                          <Typography sx={{ margin: 1 }}>Country</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.country || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                          <Typography sx={{ margin: 1 }}>Postal Code</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.pincode || ''}
                            onChange={e => setUserId(e.target.value)}
                          />
                        </Grid>

                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ margin: 1 }}>Email Address</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.email_id || ''}
                            onChange={e => setSalutation(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Phone</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.phone || ''}
                            onChange={e => setDesignation(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Fax </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.fax || ''}
                            onChange={e => setGender(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Tax Category</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.tax_category || ''}
                            onChange={e => setCompanyName(e.target.value)}
                          />

                          <Grid item sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>
                            <FormControlLabel
                              sx={{ mt: 2 }}
                              control={<Checkbox checked={Boolean(dataAddress[0]?.is_primary_address) || false} />}
                              label='Preferred Billing Address'
                            />
                            <FormControlLabel
                              sx={{ mt: 2 }}
                              control={<Checkbox checked={Boolean(dataAddress[0]?.is_shipping_address) || false} />}
                              label='Preferred Shipping Address'
                            />
                            <FormControlLabel
                              sx={{ mt: 2 }}
                              control={<Checkbox checked={Boolean(dataAddress[0]?.disabled) || false} />}
                              label='Disabled'
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                    <Grid></Grid>
                    <DataGrid
                      sx={{ width: 'full', mt: 6, height: 'auto' }}
                      rows={dataCustomer}
                      columns={column}
                      getRowId={row => row.name}
                    />

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
                      open={isOpenEditLinkName}
                      onClose={() => setIsOpenEditLinkName(false)}
                    >
                      <DialogTitle>Edit Data</DialogTitle>
                      <DialogContent>
                        {linkName && (
                          <Card sx={{ width: '100%', p: 5 }}>
                            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                              <CardMedia
                                sx={{ height: '11.5rem', width: '11.5rem' }}
                                image='/images/img/logo_stk.png'
                              />
                              <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Typography>Customer Name *</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.customer_name || ''}
                                  />
                                  <Typography>Customer Type *</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.customer_type || ''}
                                  />
                                  <Typography>Customer Grop *</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.customer_group || ''}
                                  />
                                  <Typography>Territory *</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.territory || ''}
                                  />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Typography>From Lead</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.lead_name || ''}
                                  />
                                  <Typography>From Opportunity</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.opportunity_name || ''}
                                  />
                                  <Typography>Account Manager</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.account_manager || ''}
                                  />
                                </Grid>
                              </Grid>
                              <Divider sx={{ margin: 0, my: 5, width: '100%', ml: 3 }} />

                              <Grid container>
                                <Typography size='small' sx={{ fontWeight: 'bold' }}>
                                  Defaults
                                </Typography>
                              </Grid>

                              <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Typography>Billing Currency </Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.default_currency || ''}
                                  />
                                  <Typography>Default Company Bank Account</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.default_bank_account || ''}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <Typography>Default Price List</Typography>
                                  <TextField
                                    sx={{ marginBottom: 5 }}
                                    size='small'
                                    variant='filled'
                                    fullWidth
                                    value={linkName?.default_price_list || ''}
                                  />
                                </Grid>
                              </Grid>
                              <Divider sx={{ margin: 0, my: 5, width: '100%', ml: 3 }} />
                              <Grid container>
                                <Box sx={{ width: '100%' }}>
                                  <Button
                                    sx={{ fontWeight: 'bold', p: 0 }}
                                    variant='filled'
                                    onClick={handleClickInternalCustomer}
                                  >
                                    Internal Customer
                                  </Button>
                                  <IconButton size='small' onClick={handleClickInternalCustomer}>
                                    {internalCustomer ? (
                                      <ChevronUp sx={{ fontSize: '1.875rem' }} />
                                    ) : (
                                      <ChevronDown sx={{ fontSize: '1.875rem' }} />
                                    )}
                                  </IconButton>
                                </Box>

                                <Collapse in={internalCustomer}>
                                  <Divider sx={{ margin: 0 }} />
                                  <CardContent>
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <Checkbox checked={isInternalCustomer} onChange={handleCheckboxChange} />
                                        }
                                        variant='body2'
                                        label='Is Internal Customer'
                                      />
                                      {isInternalCustomer && (
                                        <TextField label='Represents Company *' variant='outlined' />
                                      )}
                                    </FormGroup>
                                  </CardContent>
                                </Collapse>
                              </Grid>
                              <Grid container sx={{ mb: 5 }}>
                                <Box sx={{ width: '100%' }}>
                                  <Button
                                    variant='filled'
                                    onClick={handleClickMoreInformation}
                                    sx={{ fontWeight: 'bold', p: 0 }}
                                  >
                                    More Information
                                  </Button>
                                  <IconButton size='small' onClick={handleClickMoreInformation}>
                                    {moreInformation ? (
                                      <ChevronUp sx={{ fontSize: '1.875rem' }} />
                                    ) : (
                                      <ChevronDown sx={{ fontSize: '1.875rem' }} />
                                    )}
                                  </IconButton>
                                </Box>

                                {/* /                   แสดงข่อมูลชุด ที่อยู่ในdopdown                               / */}
                                <Grid container>
                                  <Collapse in={moreInformation} width={'100%'} style={{ width: '100%' }}>
                                    <Divider sx={{ margin: 0, width: '100%' }} />
                                    <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                                      <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <Typography>Market Segment</Typography>
                                        <TextField
                                          sx={{ marginBottom: 5 }}
                                          size='small'
                                          variant='filled'
                                          fullWidth
                                          value={linkName?.market_segment || ''}
                                        />
                                        <Typography>Industry</Typography>
                                        <TextField
                                          sx={{ marginBottom: 5 }}
                                          size='small'
                                          variant='filled'
                                          fullWidth
                                          value={linkName?.industry || ''}
                                        />
                                        <Typography>Website</Typography>
                                        <TextField
                                          sx={{ marginBottom: 5 }}
                                          size='small'
                                          variant='filled'
                                          fullWidth
                                          value={linkName?.website || ''}
                                        />
                                        <Typography>Print Language</Typography>
                                        <TextField
                                          sx={{ marginBottom: 5 }}
                                          size='small'
                                          variant='filled'
                                          fullWidth
                                          value={linkName?.language || ''}
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <CardContent sx={{ width: '100%' }}>
                                          <Card sx={{ p: 5 }}>
                                            <Typography style={styles.lineBreakText} variant='body2'>
                                              {dataCustomer[0]?.customer_details}
                                            </Typography>
                                          </Card>
                                        </CardContent>
                                      </Grid>
                                    </Grid>
                                  </Collapse>
                                </Grid>
                              </Grid>
                              <Divider sx={{ margin: 0, mb: 5 }} />
                            </Grid>
                          </Card>
                        )}
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setIsOpenEditLinkName(false)}>Close</Button>
                        {/* เพิ่มปุ่ม "Save" เพื่อบันทึกการแก้ไข */}
                      </DialogActions>
                    </Dialog>

                    <Card sx={{ width: '100%', p: 5 }}>
                      <Typography variant=''>Add a comment:</Typography>
                      <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
                    </Card>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setIsOpenDetailContact(false)}>ยกเลิก</Button>
                    <Button onClick={handleSaveClickDetailContact}>บันทึก</Button>
                  </DialogActions>
                </Dialog>
              </CardActions>
            </Card>
            <Typography>Address</Typography>
            <Card sx={{ mb: 5 }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddress[0]?.address_line1}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.city}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.state}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.country}</Typography>
                <Typography variant='body2'>Phone: {dataAddress[0]?.phone} </Typography>
                <Typography variant='body2'>Fax: {dataAddress[0]?.fax} </Typography>
                <Typography variant='body2'>Email: {dataAddress[0]?.email_id}</Typography>
              </CardContent>
              <CardActions className='card-action-dense'>
                <Button onClick={handleEditClickDetailAddress}>แก้ไข</Button>
                <Dialog
                  open={isOpenDetailAddress}
                  onClose={handleSaveClickDetailAddress}
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
                >
                  <DialogTitle>Edit Address</DialogTitle>
                  <DialogContent>
                    <Card sx={{ width: '100%', p: 5 }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ margin: 1 }}>Address Title</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            value={dataAddress[0]?.address_title || ''}
                            onChange={e => setAddressTitle(e.target.value)}
                          />

                          <Typography sx={{ marginBottom: 2 }}>Address Type</Typography>
                          <Box fullWidth>
                            <DorpdownButton />
                          </Box>

                          <Typography sx={{ margin: 1 }}>Address Line 1 </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_line1 || ''}
                            onChange={e => setAddress_L1(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Address Line 2 </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_line2 || ''}
                            onChange={e => setAddress_L2(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>City/Town </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.city || ''}
                            onChange={e => setCityTown(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>County </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.county || ''}
                            onChange={e => setCounty(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>State/Province </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.state || ''}
                            onChange={e => setStateProvince(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>County </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.country || ''}
                            onChange={e => setCounty_E(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Postal Code </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.pincode || ''}
                            onChange={e => setPostalCode(e.target.value)}
                          />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ marginBottom: 2 }}>Email Address</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.email_id || ''}
                            onChange={e => setEmailAddress(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Phone </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.phone || ''}
                            onChange={e => setPhone(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Fax </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.fax || ''}
                            onChange={e => setFax(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Tax Category </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.tax_category || ''}
                            onChange={e => setTaxCategory(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Card>

                    <Card sx={{ width: '100%', p: 5 }}>
                      <Typography variant=''>Add a comment:</Typography>
                      <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
                    </Card>

                    <DialogActions sx={{ m: 2, display: 'flex', justifyContent: 'end' }}>
                      <Button onClick={() => setIsOpenDetailContact(false)}>ยกเลิก</Button>
                      <Button onClick={handleSaveClickDetailContact}>บันทึก</Button>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
              </CardActions>
            </Card>

            <Grid container spacing={3} sx={{ display: 'flex' }}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography sx={{ margin: 1 }}>Contact Person</Typography>
                <TextField
                  fullWidth
                  size='small'
                  variant='filled'
                  value={dataRow?.contact_person}
                  onChange={e => setAddressTitle(e.target.value || '')}
                />
                <Typography sx={{ margin: 1 }}>Contact</Typography>
                <TextField
                  fullWidth
                  size='small'
                  variant='filled'
                  value={dataRow?.contact_display}
                  onChange={e => setAddressTitle(e.target.value || '')}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Typography sx={{ margin: 1 }}>Territory</Typography>
                <TextField
                  fullWidth
                  size='small'
                  variant='filled'
                  value={dataRow?.territory}
                  onChange={e => setAddressTitle(e.target.value || '')}
                />
              </Grid>
            </Grid>

            {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
          </CardContent>
          <CardHeader sx={{ my: 4 }} title='Shipping Address' />
          <CardContent>
            <Grid item sx={{ mr: -5 }}></Grid>

            <Typography>Customer Address</Typography>
            <Card sx={{ mb: 5 }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddress[0]?.name}</Typography>
              </CardContent>
            </Card>
            <Typography>Address</Typography>
            <Card sx={{ mb: 5 }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddress[0]?.address_line1 || ''}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode || ''}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.city || ''}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.state || ''}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode || ''}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.country || ''}</Typography>
                <Typography variant='body2'>Phone: {dataAddress[0]?.phone || ''} </Typography>
                <Typography variant='body2'>Fax: {dataAddress[0]?.fax || ''} </Typography>
                <Typography variant='body2'>Email: {dataAddress[0]?.email_id || ''}</Typography>
              </CardContent>
            </Card>

            <Grid item sm={12} md={6} lg={6}>
              <Typography sx={{ margin: 1 }}>Dispatch Address Name</Typography>
              <TextField
                fullWidth
                size='small'
                variant='filled'

                // onChange={e => setAddressTitle(e.target.value)}
              />
            </Grid>
          </CardContent>

          <Grid sx={{ my: 5 }}>
            <Typography variant=''>Add a comment:</Typography>
            <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
          </Grid>
        </Grid>
      </Grid>
      <Btn
        detailbutton={' Comment'}
        bgcolorbutton={'white'}
        numminwid={'auto'}
        handleButtonClick={() => router.push()}
      />
    </Box>
  )
}

export default ContactAddressSalesinvoice
