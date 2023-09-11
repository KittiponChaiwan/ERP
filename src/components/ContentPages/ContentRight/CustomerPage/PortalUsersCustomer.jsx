import { Box, TextField, Typography, Checkbox, Button, Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const PotalUserCustomer = () => {
  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'User', headerName: 'User', width: 150 }
  ]

  const rows = [
    { id: 1, User: 'Sidw' },
    {
      id: 2,
      User: 'Lannister'
    }
  ]

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography>Customer Portal Users</Typography>
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

export default PotalUserCustomer
