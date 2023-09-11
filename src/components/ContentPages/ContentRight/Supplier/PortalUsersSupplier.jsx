import { Box, Grid, TextField, Typography, Checkbox, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const PortalUserSupplier = () => {
  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'User', headerName: 'User', width: 150 }
  ]

  const rows = [
    {
      id: 1,
      User: 'Sidw'
    }
  ]

  return (
    <Box>
      <Grid item sm={12} md={12} lg={12}>
        <Typography>Supplier Portal Users</Typography>
        <DataGrid
          sx={{ width: '50%', mt: 6 }}
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
      <Box sx={{ mt: 10 }}>
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

export default PortalUserSupplier
