import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Tex_item = () => {
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

export default Tex_item
