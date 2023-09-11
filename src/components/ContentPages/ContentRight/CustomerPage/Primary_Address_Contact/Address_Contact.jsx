// ** MUI Imports
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import {
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField
} from '@mui/material'

import DorpdownButton from 'src/components/Button/Dropdown_Button/Dropdown_Button'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'

const Address_Contact = ({ dataRow }) => {
  const [isOpenAddress, setIsOpenAddress] = useState(false)
  const [address_title, setAddressTitle] = useState('')
  const [email_address, setEmailAddress] = useState('')
  const [address_type, setAddressType] = useState('')
  const [phone, setPhone] = useState('')
  const [address_l1, setAddress_L1] = useState('')
  const [address_l2, setAddress_L2] = useState('')
  const [fax, setFax] = useState('')
  const [tax_category, setTaxCategory] = useState('')
  const [city_town, setCityTown] = useState('')
  const [county, setCounty] = useState('')
  const [county_E, setCounty_E] = useState('')
  const [state_province, setStateProvince] = useState('')
  const [postal_code, setPostalCode] = useState('')

  const [isOpenContact, setIsOpenContact] = useState(false)
  const [first_name, setFirstName] = useState('')
  const [middle_name, setMiddleName] = useState('')
  const [lsst_name, setLastName] = useState('')
  const [user_id, setUserId] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')
  const [salutation, setSalutation] = useState('')
  const [designation, setDesignation] = useState('')
  const [gender, setGender] = useState('')
  const [company_name, setCompanyName] = useState('')

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [isShowGoogle, setIsShowGoogle] = useState([])
  const [collapseContact, setCollapseCotact] = useState([])

  const handleShowGoogle = event => {
    setIsShowGoogle(event.target.checked)
  }

  const handleEditClickContact = () => {
    setIsOpenContact(true)
  }

  const handleSaveClickContact = () => {
    // เพิ่มโค้ดที่จะทำเมื่อคลิกปุ่ม "บันทึก"
    // เช่นการอัปเดตข้อมูลหรือทำการแก้ไขข้อความ
    // setEditedText(editedText); หรืออื่น ๆ
    setIsOpenContact(false)
  }

  const handleEditClickAddress = () => {
    setIsOpenAddress(true)
  }

  const handleSaveClickAddress = () => {
    // เพิ่มโค้ดที่จะทำเมื่อคลิกปุ่ม "บันทึก"
    // เช่นการอัปเดตข้อมูลหรือทำการแก้ไขข้อความ
    // setEditedText(editedText); หรืออื่น ๆ
    setIsOpenAddress(false)
  }

  const [state, setState] = useState({
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

  const [dataAddr, setDataAddr] = useState('')
  const [dataContact, setDataContact] = useState('')
  const [dataCustomer, setDataCustomer] = useState('')

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

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Address/${dataRow.customer_primary_address}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataAddr(res.data.data)
      })
      .catch(err => {
        console.log('address error', err)
      })
  }, [dataRow])

  const { Preferred_Billing_Address, Preferred_Shipping_Addressn, Disabled } = state

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Contact/${dataRow.customer_primary_contact}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataContact(res.data.data)
      })
      .catch(err => {
        console.log('contact error', err)
      })
  }, [dataRow])

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Customer/${dataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataCustomer(res.data.data)
      })
      .catch(err => {
        console.log('show Error', err)
      })
  }, [])

  if (dataCustomer.length === 0) {
    return 'waiting...'
  }

  return (
    <Grid>
      <CardHeader title='Address and Contacts' />
      <CardContent>
        <Grid container spacing={3}>
          <Grid sm={12} md={12} lg={12}>
            <Card>
              {/* sx={{ marginBottom: 3.25 }} */}
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataAddr.address_title || ''}</Typography>
                <Typography variant='body2'>{dataAddr.address_line1 || ''}</Typography>
                <Typography variant='body2'>{dataAddr.city || ''}</Typography>
                <Typography variant='body2'>{dataAddr.state || ''}</Typography>
                <Typography variant='body2'>{dataAddr.pincode || ''}</Typography>
                <Typography variant='body2'>Phone:{dataAddr.phone || ''}</Typography>
                <Typography variant='body2'>Fax: {dataAddr.Fax || ''}</Typography>
                <Typography variant='body2'>Email: {dataAddr.email_id || ''}</Typography>
              </CardContent>
              <CardActions className='card-action-dense'>
                <Button onClick={handleEditClickAddress}>แก้ไข</Button>
                <Dialog
                  open={isOpenAddress}
                  onClose={() => setIsOpenAddress(false)}
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
                  <Card sx={{ width: '100%', p: 5 }}>
                    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Grid item sm={12} md={6} lg={6}>
                        <Typography sx={{ margin: 1 }}>Address Title</Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          fullWidth
                          value={dataAddr.address_title || ''}
                          onChange={e => setAddressTitle(e.target.value)}
                        />

                        <Typography sx={{ marginBottom: 2 }}>Address Type</Typography>
                        <DorpdownButton />

                        <Typography sx={{ margin: 1 }}>Address Line 1 </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.address_line1 || ''}
                          onChange={e => setAddress_L1(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Address Line 2 </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.address_line2 || ''}
                          onChange={e => setAddress_L2(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>City/Town </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.city || ''}
                          onChange={e => setCityTown(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>County </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.county || ''}
                          onChange={e => setCounty(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>State/Province </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.state || ''}
                          onChange={e => setStateProvince(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Country </Typography>
                        <TextField
                          fullWidth
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.country || ''}
                          onChange={e => setCounty_E(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Postal Code </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataAddr.pincode || ''}
                          onChange={e => setPostalCode(e.target.value)}
                        />
                      </Grid>

                      <Grid item sm={12} md={6} lg={6}>
                        <Typography sx={{ marginBottom: 2 }}>Email Address</Typography>
                        <TextField
                          size='small'
                          fullWidth
                          variant='filled'
                          type='text'
                          value={dataAddr.email_id || ''}
                          onChange={e => setEmailAddress(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Phone </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.phone || ''}
                          fullWidth
                          onChange={e => setPhone(e.target.value)}
                        />
                        <Typography sx={{ margin: 1 }}>Fax </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataAddr.fax || ''}
                          onChange={e => setFax(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Tax Category </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          value={dataAddr.tax_category || ''}
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
                      <Grid>
                        <Checkbox {...label} />
                      </Grid>
                      <Grid sm={12} md={12} lg={12}>
                        <DataGrid
                          sx={{ width: 'full', mt: 6, height: 'auto' }}
                          rows={dataCustomer}
                          columns={column}
                          getRowId={row => row.name}
                        />
                      </Grid>
                    </Grid>
                  </Card>
                  <DialogActions>
                    <Button onClick={() => setIsOpenAddress(false)}>ยกเลิก</Button>
                    <Button onClick={handleSaveClickAddress}>บันทึก</Button>
                  </DialogActions>
                </Dialog>
              </CardActions>
            </Card>
            {/* End Address Detail */}
          </Grid>
          <CardHeader title='Contacts' />
          <Grid sm={12} md={12} lg={12}>
            <Card>
              {/* sx={{ marginBottom: 3.25 }} */}
              <CardContent sx={{ width: '100%' }}>
                <Typography variant='body2'>{dataContact.first_name}</Typography>
                <Typography variant='body2'>{dataContact.email_id}</Typography>
                <Typography variant='body2'>{dataContact.phone}</Typography>
                <Typography variant='body2'>{dataContact.mobile_no}</Typography>
                <Typography variant='body2'>{dataContact.address}</Typography>
              </CardContent>
              <CardActions className='card-action-dense'>
                <Button onClick={handleEditClickContact}>แก้ไข</Button>
                <Dialog
                  open={isOpenContact}
                  onClose={() => setIsOpenContact(false)}
                  PaperProps={{
                    style: {
                      width: '80%',

                      margin: 0,
                      maxWidth: 'none',
                      maxHeight: 'none'
                    }
                  }}
                >
                  <DialogTitle>Edit</DialogTitle>
                  <Card sx={{ width: '100%', p: 5 }}>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Grid item sm={12} md={6} lg={6}>
                        <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          fullWidth
                          type='text'
                          value={dataContact.first_name}
                          onChange={e => setFirstName(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Middle Name </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataContact.middle_name}
                          onChange={e => setMiddleName(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Last Name </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataContact.last_name}
                          onChange={e => setLastName(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>User Id </Typography>
                        <TextField
                          size='small'
                          fullWidth
                          variant='filled'
                          type='text'
                          value={dataContact.user}
                          onChange={e => setUserId(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Address</Typography>
                        <TextField
                          size='small'
                          fullWidth
                          variant='filled'
                          type='text'
                          value={dataContact.address}
                          onChange={e => setAddress(e.target.value)}
                        />

                        <Box sx={{ display: 'flex' }}>
                          <Checkbox />
                          <Typography sx={{ mt: 2 }}>Sync with Google Contacts</Typography>
                        </Box>
                      </Grid>
                      <Grid item sm={12} md={6} lg={6}>
                        <Typography sx={{ margin: 1 }}>Status </Typography>

                        <Box sx={{ width: '100%' }}>
                          <DorpdownButton />
                        </Box>

                        <Typography sx={{ margin: 1 }}>Salutation </Typography>
                        <TextField
                          size='small'
                          fullWidth
                          variant='filled'
                          type='text'
                          value={dataContact.salutation}
                          onChange={e => setSalutation(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Designation </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataContact.designation}
                          onChange={e => setDesignation(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Gender </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataContact.gender}
                          onChange={e => setGender(e.target.value)}
                        />

                        <Typography sx={{ margin: 1 }}>Company Name </Typography>
                        <TextField
                          size='small'
                          variant='filled'
                          type='text'
                          fullWidth
                          value={dataContact.company_name}
                          onChange={e => setCompanyName(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Card>
                  <DialogActions>
                    <Button onClick={() => setIsOpenContact(false)}>ยกเลิก</Button>
                    <Button onClick={handleSaveClickContact}>บันทึก</Button>
                  </DialogActions>
                </Dialog>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <CardHeader title='Primary Address and Contact' />
        <Grid>
          <Grid>
            {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
            <Grid container spacing={2} sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
              <Grid item>
                <Grid>
                  <Typography sx={{ margin: 1 }}>Customer Primary Contact</Typography>
                  <TextField
                    size='small'
                    variant='filled'
                    value={dataRow.customer_primary_contact}
                    fullWidth
                    multiline
                  />
                  <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen contact is edited after save</Typography>
                </Grid>
              </Grid>
              <Grid item>
                {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
                <Grid sx={{ mt: 4 }}>
                  <Typography sx={{ marginBottom: 2 }}>Customer Primary Address</Typography>
                  <TextField
                    size='small'
                    variant='filled'
                    label=''
                    value={dataRow.customer_primary_address}
                    fullWidth
                    multiline
                  />
                  <Typography sx={{ marginBottom: 2 }}>Reselect, if the chosen address is edited after save</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className='card-action-dense'></CardActions>
    </Grid>
  )
}

export default Address_Contact
