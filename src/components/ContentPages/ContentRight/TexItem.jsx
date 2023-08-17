// ** React Imports
import React from 'react'

// MUI imports
import { Box, Typography, TextField } from '@mui/material'

const TexItem = () => {
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

export default TexItem
