// ** React Import
import React from 'react'

// ** Mui Import

import { useState } from 'react'
import { Grid, Card, TextField, Box, Typography, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { useEffect } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit'

const Contact_Address = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  const handleChanges = event => {
    setAge(event.target.value)
  }

  const [isOpenDetailAddress, setIsOpenDetailAddress] = useState(false)
  const [isOpenDetaiContact, setIsOpenDetailContact] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [address, setAddress] = useState('')

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

  const [isHovered, setIsHovered] = useState(false)

  const handleIconClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const [state, setState] = React.useState({
    Preferred_Billing_Address: true,
    Preferred_Shipping_Addressn: false,
    Disabled: false
  })

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }
  const { Preferred_Billing_Address, Preferred_Shipping_Addressn, Disabled } = state

  const [dataAddress, setDataAddress] = useState('')
  const [dataContact, setDataContact] = useState('')
  const [dataDetailAddress, setDataDetailAddress] = useState('')

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}Address?filters=[["Dynamic Link","link_name", "=", "${getDataRow.name}"]]&fields=["*"]`,
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
        `${process.env.NEXT_PUBLIC_API_URL}Contact?filters=[["Dynamic Link","link_name", "=", "${getDataRow.name}"]]&fields=["*"]`,
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
  }, [getDataRow])

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}Address?filters=[["name", "=", "123 ถนนเพชรบุรีตัดใหม่ แขวงสีลม เขตบางรัก กรุงเทพฯ 10120-Permanent-1"]]&fields=["*"]`,
        {
          headers: {
            Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
          }
        }
      )
      .then(res => {
        setDataDetailAddress(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log('Supplier', getDataRow)
  })
  useEffect(() => {
    console.log('Address', dataAddress)
  })
  useEffect(() => {
    console.log('Contact', dataContact)
  })
  useEffect(() => {
    console.log('DetailAddress', dataDetailAddress)
  })

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container>
        <Grid item sx={{ width: '100%', height: '100%' }}>
          <CardHeader title='Address and Contacts' />
          <CardContent>
            <Card sx={{ mb: 5 }}>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddress[0]?.name}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.address_line1}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.city}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.state}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.pincode}</Typography>
                <Typography variant='body2'>{dataAddress[0]?.country}</Typography>
                <Typography variant='body2'>Phone: {dataAddress[0]?.phone} </Typography>
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
                            value={dataAddress[0]?.address_title}
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
                            value={dataAddress[0]?.address_line1}
                            onChange={e => setAddress_L1(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Address Line 2 </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.address_line2}
                            onChange={e => setAddress_L2(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>City/Town </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.city}
                            onChange={e => setCityTown(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>County </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.county}
                            onChange={e => setCounty(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>State/Province </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.state}
                            onChange={e => setStateProvince(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>County </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.country}
                            onChange={e => setCounty_E(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Postal Code </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.pincode}
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
                            value={dataAddress[0]?.email_id}
                            onChange={e => setEmailAddress(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Phone </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.phone}
                            onChange={e => setPhone(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Fax </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.fax}
                            onChange={e => setFax(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Tax Category </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataAddress[0]?.tax_category}
                            onChange={e => setTaxCategory(e.target.value)}
                          />

                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={Preferred_Billing_Address}
                                  onChange={handleChange}
                                  name='Preferred_Billing_Address'
                                />
                              }
                              label='Preferred Billing Address'
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={Preferred_Shipping_Addressn}
                                  onChange={handleChange}
                                  name='Preferred_Shipping_Addressn'
                                />
                              }
                              label='Preferred Shipping Addressn'
                            />

                            <FormControlLabel
                              control={<Checkbox checked={Disabled} onChange={handleChange} name='Disabled' />}
                              label='Disabled'
                            />
                          </FormGroup>
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

            <Card>
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataContact[0]?.address}</Typography>
                <Typography variant='body2'>{dataContact[0]?.address}</Typography>
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
                  <DialogTitle>Edit Contect</DialogTitle>
                  <DialogContent>
                    <Card sx={{ width: '100%', p: 5 }}>
                      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ margin: 1 }}>First Name</Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.first_name}
                            onChange={e => setFirstName(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Middle Name </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.middle_name}
                            onChange={e => setMiddleName(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Last Name </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.last_name}
                            onChange={e => setLastName(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>User Id </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.user_id}
                            onChange={e => setUserId(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Address </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.address}
                            onChange={e => setAddress(e.target.value)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            InputProps={{
                              endAdornment: isHovered && (
                                <IconButton onClick={handleIconClick} edge='end'>
                                  <EditIcon />
                                </IconButton>
                              )
                            }}
                          />

                          <Dialog open={isPopupOpen} onClose={handleClosePopup}>
                            <DialogTitle>Edit Address</DialogTitle>
                            <DialogContent>
                              <TextField
                                size='small'
                                variant='filled'
                                type='text'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                fullWidth
                              />
                            </DialogContent>
                          </Dialog>

                          <Dialog
                            open={isPopupOpen}
                            onClose={handleClosePopup}
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
                                      value={dataDetailAddress[0]?.name}
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
                                      value={dataDetailAddress[0]?.address_line1}
                                      onChange={e => setAddress_L1(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>Address Line 2 </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.address_line2}
                                      onChange={e => setAddress_L2(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>City/Town </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.city}
                                      onChange={e => setCityTown(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>County </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.county}
                                      onChange={e => setCounty(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>State/Province </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.state}
                                      onChange={e => setStateProvince(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>County </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.country}
                                      onChange={e => setCounty_E(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>Postal Code </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.pincode}
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
                                      value={dataDetailAddress[0]?.email_id}
                                      onChange={e => setEmailAddress(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>Phone </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.phone}
                                      onChange={e => setPhone(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>Fax </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.fax}
                                      onChange={e => setFax(e.target.value)}
                                    />

                                    <Typography sx={{ margin: 1 }}>Tax Category </Typography>
                                    <TextField
                                      fullWidth
                                      size='small'
                                      variant='filled'
                                      type='text'
                                      value={dataDetailAddress[0]?.tax_category}
                                      onChange={e => setTaxCategory(e.target.value)}
                                    />

                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={Preferred_Billing_Address}
                                            onChange={handleChange}
                                            name='Preferred_Billing_Address'
                                          />
                                        }
                                        label='Preferred Billing Address'
                                      />
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={Preferred_Shipping_Addressn}
                                            onChange={handleChange}
                                            name='Preferred_Shipping_Addressn'
                                          />
                                        }
                                        label='Preferred Shipping Addressn'
                                      />

                                      <FormControlLabel
                                        control={
                                          <Checkbox checked={Disabled} onChange={handleChange} name='Disabled' />
                                        }
                                        label='Disabled'
                                      />
                                    </FormGroup>
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
                        </Grid>

                        <Grid item sm={12} md={6} lg={6}>
                          <Typography sx={{ marginBottom: 2 }}>Status</Typography>
                          <Box fullWidth>
                            <DorpdownButton />
                          </Box>

                          <Typography sx={{ margin: 1 }}>Salutation </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.salutation}
                            onChange={e => setSalutation(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Designation </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.designation}
                            onChange={e => setDesignation(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Gender </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.gender}
                            onChange={e => setGender(e.target.value)}
                          />

                          <Typography sx={{ margin: 1 }}>Company Name </Typography>
                          <TextField
                            fullWidth
                            size='small'
                            variant='filled'
                            type='text'
                            value={dataContact[0]?.companyName}
                            onChange={e => setCompanyName(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Card>
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

            <CardHeader title='Primary Address and Contact' />

            {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}

            <Grid item sm={12} md={12} lg={12}>
              <Typography sx={{ margin: 1 }}>Supplier Primary Contact</Typography>
              <TextField size='small' variant='filled' value={''} fullWidth />
              <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen contact is edited after save</Typography>
            </Grid>
            <Grid item sm={12} md={12} lg={12}>
              <Typography sx={{ marginBottom: 2 }}>Supplier Primary Address</Typography>
              <TextField size='small' variant='filled' label='' value={''} fullWidth />
              <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen address is edited after save</Typography>
            </Grid>
          </CardContent>
          <CardActions className='card-action-dense'></CardActions>
          <Grid sx={{ mt: 5 }}>
            <Typography variant=''>Add a comment:</Typography>
            <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact_Address
