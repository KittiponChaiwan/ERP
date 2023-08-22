import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const SalesTeamCustomer = ({ getDataRow }) => {
  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'SalesPerson', headerName: 'Sales Person', width: 150 },
    { field: 'Contribution', headerName: 'Contribution (%)', width: 300 },
    {
      field: 'ContributionNext',
      headerName: 'Contribution to Net Total',
      width: 300
    },
    {
      field: 'Commission',
      headerName: 'Commission Rate',
      width: 300
    },
    {
      field: 'Incentives',
      headerName: 'Incentives',
      width: 300
    }
  ]

  const rows = [
    { id: 1, SalesPerson: 'Sidw', Contribution: 'Jon', ContributionNext: 'dasd', Commission: 's', Incentives: '1' },
    {
      id: 2,
      SalesPerson: 'Lannister',
      Contribution: 'Cersei',
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    {
      id: 3,
      SalesPerson: 'Lannister',
      Contribution: 'Jaime',
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    { id: 4, SalesPerson: 'Stark', Contribution: 'Arya', ContributionNext: 'dasd', Commission: 's', Incentives: '1' },
    {
      id: 5,
      SalesPerson: 'Targaryen',
      Contribution: 'Daenerys',
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    {
      id: 6,
      SalesPerson: 'Melisandre',
      Contribution: null,
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    {
      id: 7,
      SalesPerson: 'Clifford',
      Contribution: 'Ferrara',
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    {
      id: 8,
      SalesPerson: 'Frances',
      Contribution: 'Rossini',
      ContributionNext: 'dasd',
      Commission: 's',
      Incentives: '1'
    },
    { id: 9, SalesPerson: 'Roxie', Contribution: 'Harvey', ContributionNext: 'dasd', Commission: 's', Incentives: '1' }
  ]

  return (
    <Box>
      <Box>
        <Box>
          <Typography>Sales Team</Typography>
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
          <Box>
            <Button>Add row</Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', mt: 6 }}>
            <Box>
              <Typography sx={{ marginBottom: 2 }}>Sales Partner</Typography>
              <TextField size='small' variant='filled' label='' value={getDataRow.default_sales_partner} />
            </Box>
            <Box sx={{ ml: 20 }}>
              <Typography sx={{ marginBottom: 2 }}>Commission Rate</Typography>
              <TextField size='small' variant='filled' label='' value={getDataRow.default_commission_rate} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Box>
  )
}

export default SalesTeamCustomer
