import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import TextField from '@mui/material/TextField'

const Accounting_item = () => {
  const columnsAcc = [
    { field: '', headerName: 'No.', width: 90, editable: true },
    { field: '', headerName: 'Company', width: 280 },
    { field: '', headerName: 'Default Warehouse', width: 280 },
    { field: '', headerName: 'Default Price List', width: 280 }
  ]

  return (
    <Box>
      <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
        Item Defaults
      </Typography>
      <Box>
        {/* <DataGrid
          // rows={dataItem}
          columns={columnsAcc}
          // getRowId={row => row.name}
          checkboxSelection
          disableRowSelectionOnClick
        /> */}
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography>Add a comment</Typography>
        <TextField variant='filled' label='' multiline rows={6} fullWidth />
      </Box>
      <Box></Box>
    </Box>
  )
}

export default Accounting_item
