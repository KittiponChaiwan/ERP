import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import { Grid, Card, TextField, Box } from '@mui/material'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'

const Button_EditContact = () => {
  const [isOpen, setIsOpen] = useState(false)
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

  const handleEditClick = () => {
    setIsOpen(true)
  }

  const handleSaveClick = () => {
    // เพิ่มโค้ดที่จะทำเมื่อคลิกปุ่ม "บันทึก"
    // เช่นการอัปเดตข้อมูลหรือทำการแก้ไขข้อความ
    // setEditedText(editedText); หรืออื่น ๆ
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={handleEditClick}>แก้ไข</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>Edit</DialogTitle>
        <Card sx={{ minWidth: 600, width: '100%', height: '100%' }}>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item sm={12} md={7.7} lg={6}>
              <Grid>
                <Typography sx={{ marginBottom: 2 }}>First Name</Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={first_name}
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Middle Name </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={middle_name}
                  onChange={e => setMiddleName(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Last Name </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={lsst_name}
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>

              <Grid>
                <Typography sx={{ margin: 1 }}>User Id </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={user_id}
                  onChange={e => setUserId(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Address</Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid>
                <Typography sx={{ marginBottom: 2 }}>Status</Typography>
                <Box sx={{ width: 250 }}>
                  <DorpdownButton />
                </Box>
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Salutation </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={salutation}
                  onChange={e => setSalutation(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Designation </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={designation}
                  onChange={e => setDesignation(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Gender </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography sx={{ margin: 1 }}>Company Name </Typography>
                <TextField
                  size='small'
                  variant='filled'
                  type='text'
                  value={company_name}
                  onChange={e => setCompanyName(e.target.value)}
                />
              </Grid>
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

export default Button_EditContact
