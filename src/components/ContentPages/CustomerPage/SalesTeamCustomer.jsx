import { Box, TextField, Typography, Checkbox, Button, Grid } from '@mui/material'
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
    }
  ]

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
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
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 20 }}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Sales Partner</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.default_sales_partner} fullWidth />
        </Grid>
        <Grid item sx={12} md={12} lg={6}>
          <Typography sx={{ marginBottom: 2 }}>Commission Rate</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.default_commission_rate} fullWidth />
        </Grid>
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

export default SalesTeamCustomer
