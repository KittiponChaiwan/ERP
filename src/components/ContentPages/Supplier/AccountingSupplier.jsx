// ** React Import
import React from 'react'

// ** Mui Import
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'
import { DataGrid } from '@mui/x-data-grid'

const Accounting = () => {
  const [age, setAge] = useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Company', headerName: 'Company', width: 150 },
    { field: 'DefaultAccount', headerName: 'Default Account', width: 150 }
  ]

  const rows = [
    {
      id: 1,
      User: '',
      DefaultAccount: ''
    }
  ]

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography sx={{ marginBottom: 1 }}>Default Payment Terms Template</Typography>
          <TextField size='small' variant='filled' fullWidth multiline />
          <Box sx={{ borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)', m: 8 }}></Box>

          <Typography sx={{ marginBottom: 1, mb: 5 }}>Default Accounts</Typography>
          <Typography variant='body2' sx={{ marginBottom: 1 }}>
            Accounts
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 1 }}>
            Mention if non-standard payable account
          </Typography>
          <Box>
            <DataGrid
              sx={{ mt: 6 }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Accounting
