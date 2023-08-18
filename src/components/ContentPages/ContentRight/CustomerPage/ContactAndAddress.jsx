// ** React Import
import React from 'react'

// ** Mui Import
import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'

const ContactAndAddress = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Box>
      <Box>
        <Typography variant='h5'>More Information</Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 4 }}>
        <Box sx={{ width: '30%', flexDirection: 'column', display: 'flex' }}>
          <Typography sx={{ marginBottom: 2 }}> address</Typography>
          <TextField
            size='small'
            variant='filled'
            label=''
            multiline
            rows={14}
            fullWidth
            value={getDataRow.customer_details}
          />
          <Button>New Address</Button>
        </Box>
        <Box sx={{ ml: 20, width: '60%' }}>
          <Typography sx={{ marginBottom: 2 }}>contacts added</Typography>
          <TextField
            size='small'
            variant='filled'
            label=''
            multiline
            rows={5}
            fullWidth
            value={getDataRow.customer_details}
          />
          <Button>New Contact</Button>
        </Box>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Typography variant='h5'>Primary Address and Contact</Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant='subtitle2'>Select, to make the customer searchable with these fields</Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Customer Primary Contact</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.customer_primary_contact} />
          <Typography variant='subtitle2'>Reselect, if the chosen contact is edited after save</Typography>
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Customer Primary Address</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.customer_primary_address} />
          <Typography variant='subtitle2'>Reselect, if the chosen address is edited after save</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Mobile No</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.mobile_no} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ marginBottom: 2 }}>Email Id</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.email_id} />
          </Box>
        </Box>
        <Box sx={{ ml: 43, width: '50%' }}>
          <Typography sx={{ marginBottom: 2 }}>Primary Address</Typography>
          <TextField
            size='small'
            variant='filled'
            label=''
            value={getDataRow.primary_address}
            multiline
            rows={5}
            fullWidth
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ContactAndAddress
