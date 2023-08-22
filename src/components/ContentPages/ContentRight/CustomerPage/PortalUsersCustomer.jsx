import { Box, TextField, Typography, Checkbox, Button } from '@mui/material'
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
    },
    {
      id: 3,
      User: 'Lannister'
    },
    { id: 4, User: 'Stark' },
    {
      id: 5,
      User: 'Targaryen'
    },
    {
      id: 6,
      User: 'Melisandre'
    },
    {
      id: 7,
      User: 'Clifford'
    },
    {
      id: 8,
      User: 'Frances'
    },
    { id: 9, User: 'Roxie' }
  ]

  return (
    <Box>
      <Box>
        <Box>
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

export default PotalUserCustomer
