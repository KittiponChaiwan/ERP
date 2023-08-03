import React from 'react'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

function DataGridTable({ rows, columns, uniqueKey }) {
  return (
    <Box style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 }
          }
        }}
        pageSizeOptions={[20, 50, 100]}
        disableRowSelectionOnClick
        getRowId={row => row[uniqueKey]}
      />
    </Box>
  )
}

export default DataGridTable
