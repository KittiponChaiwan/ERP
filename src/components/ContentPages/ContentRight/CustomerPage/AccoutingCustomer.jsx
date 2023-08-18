import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const AccountingCustomer = ({ getDataRow }) => {
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
    { id: 2, Company: 'Lannister', CreditLimit: 'Cersei', Bypass: 'dasd' },
    { id: 3, Company: 'Lannister', CreditLimit: 'Jaime', Bypass: 'dasd' },
    { id: 4, Company: 'Stark', CreditLimit: 'Arya', Bypass: 'dasd' },
    { id: 5, Company: 'Targaryen', CreditLimit: 'Daenerys', Bypass: 'dasd' },
    { id: 6, Company: 'Melisandre', CreditLimit: null, Bypass: 'dasd' },
    { id: 7, Company: 'Clifford', CreditLimit: 'Ferrara', Bypass: 'dasd' },
    { id: 8, Company: 'Frances', CreditLimit: 'Rossini', Bypass: 'dasd' },
    { id: 9, Company: 'Roxie', CreditLimit: 'Harvey', Bypass: 'dasd' }
  ]

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Default Payment Terms Template</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.payment_terms} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box sx={{ width: '100%' }}>
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
          </Box>
        </Box>
        <Box>
          <Box sx={{ mt: 20 }}>
            <Typography variant='h5'>Default Accounts:</Typography>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subtitle1'>Accounts</Typography>
            <Typography variant='subtitle1'>Mention if non-standard Receivable account</Typography>
          </Box>
          <Box>
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
          </Box>
        </Box>
        <Box>
          <Box sx={{ mt: 20 }}>
            <Typography variant='h5'>Loyalty Points</Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ marginBottom: 2 }}>Loyalty Program</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.loyalty_program} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AccountingCustomer
