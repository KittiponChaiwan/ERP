import React, { useState } from 'react'
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Button,
  CardActions,
  IconButton,
  Collapse,
  Divider,
  CardContent,
  Grid
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const AccountingCustomer = ({ getDataRow }) => {
  const [collapseInformation, setCollapseInformation] = useState()

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Company', headerName: 'Company', width: 150 },
    { field: 'CreditLimit', headerName: 'Credit Limit', width: 300 },
    {
      field: 'Bypass',
      headerName: 'Bypass Credit Limit Check at Sales Or',
      width: 300
    }
  ]

  const rows = [
    { id: 1, Company: 'Sidw', CreditLimit: 'Jon', Bypass: 'dasd' },
    { id: 2, Company: 'Lannister', CreditLimit: 'Cersei', Bypass: 'dasd' }
  ]

  const handleClickInformation = () => {
    setCollapseInformation(!collapseInformation)
  }

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Default Payment Terms Template</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.payment_terms} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography>Credit Limit</Typography>
          <DataGrid
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
        </Grid>
      </Grid>

      <Grid sx={{ mt: 20 }}>
        <Typography variant='h6'>Default Accounts:</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography variant='subtitle1'>Accounts</Typography>
          <Typography variant='subtitle1'>Mention if non-standard Receivable account</Typography>
          <DataGrid
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
        </Grid>
      </Grid>

      <Grid container sx={{ mb: 5 }}>
        <Grid sx={{ width: '100%', display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleClickInformation}>
            <Typography variant='h6'> More Infomation</Typography>
          </Button>

          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickInformation}>
              {collapseInformation ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>

      <Grid container>
        <Collapse in={collapseInformation} width={'100%'} style={{ width: '100%' }}>
          <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography sx={{ marginBottom: 2 }}>Loyalty Program</Typography>
              <TextField size='small' variant='filled' label='' value={getDataRow.loyalty_program} fullWidth />
            </Grid>
          </Grid>
        </Collapse>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: '100%' }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AccountingCustomer
