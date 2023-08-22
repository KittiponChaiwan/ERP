import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Grid, Card, TextField, Box } from '@mui/material'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'

const Button_EditDetail = () => {
  const [isOpen, setIsOpen] = useState(false)
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

  const handleEditClick = () => {
    setIsOpen(true)
  }

  const handleSaveClick = () => {
    // เพิ่มโค้ดที่จะทำเมื่อคลิกปุ่ม "บันทึก"
    // เช่นการอัปเดตข้อมูลหรือทำการแก้ไขข้อความ
    // setEditedText(editedText); หรืออื่น ๆ
    setIsOpen(false)
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

  return (
    <>
      <Button onClick={handleEditClick}>แก้ไข</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>Edit</DialogTitle>
        <Card sx={{ minWidth: 600, width: '100%', height: '100%' }}>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={12} md={7.7} lg={6}>
              <Grid>
                <Typography sx={{ margin: 1 }}>Address Title</Typography>
                <TextField
                  size='small'
                  variant='filled'
                  value={address_title}
                  onChange={e => setAddressTitle(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ marginBottom: 2 }}>Address Type</Typography>
                <Box sx={{ width: 250 }}>
                  <DorpdownButton />
                </Box>
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Address Line 1 </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={address_l1}
                  onChange={e => setAddress_L1(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Address Line 2 </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={address_l2}
                  onChange={e => setAddress_L2(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>City/Town </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={city_town}
                  onChange={e => setCityTown(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>County </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={county}
                  onChange={e => setCounty(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>State/Province </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={state_province}
                  onChange={e => setStateProvince(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>County </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={county_E}
                  onChange={e => setCounty_E(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Postal Code </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={postal_code}
                  onChange={e => setPostalCode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid>
                <Typography sx={{ marginBottom: 2 }}>Email Address</Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={email_address}
                  onChange={e => setEmailAddress(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Phone </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Fax </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={fax}
                  onChange={e => setFax(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Tax Category </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={tax_category}
                  onChange={e => setTaxCategory(e.target.value)}
                />
              </Grid>
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
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>ยกเลิก</Button>
          <Button onClick={handleSaveClick}>บันทึก</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Button_EditDetail
