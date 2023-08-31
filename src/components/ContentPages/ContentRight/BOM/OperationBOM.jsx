import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const OperationBOM = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Operation', headerName: 'Operation', width: 150 },
    { field: 'WorkstationType', headerName: 'Workstation Type', width: 150 },
    { field: 'OperationTime ', headerName: 'Operation Time ', width: 150 },
    { field: 'FixedTime', headerName: 'Fixed Time', width: 150 },
    { field: 'OperatingCost ', headerName: 'Operating Cost (THB)', width: 150 }
  ]

  const rows = [
    {
      id: 1,
      Operation: 'Sidw',
      WorkstationType: '100',
      OperationTime: 'Nos',
      FixedTime: '50.00',
      OperatingCost: '5,000'
    }
  ]

  return (
    <Grid>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} />
            <Typography sx={{ mt: 2 }}>With Operations</Typography>
          </Box>
          <Box sx={{ display: 'flex', ml: 30 }}>
            <Checkbox {...label} />
            <Typography sx={{ mt: 2 }}>With Operations</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Manage cost of operations</Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', ml: 71 }}>
            <Checkbox {...label} disabled />
            <Typography sx={{ mt: 2 }}>WFG based Operating Cost</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Operations</Typography>
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
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default OperationBOM
