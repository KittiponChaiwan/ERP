import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const ProductionItemPage = ({ getDataRow }) => {
  const columns = [
    { field: 'id', headerName: 'No', width: 50 },
    { field: 'ItemCode', headerName: 'Item Code', width: 150 },
    { field: 'SourceWarehouse', headerName: 'Source Warehouse', width: 150 },
    { field: 'RequiredQty', headerName: 'Required Qty', width: 150 },
    { field: 'TransferredQty', headerName: 'Transferred Qty', width: 150 },
    { field: 'ConsumedQty', headerName: 'Consumed Qty', width: 150 },
    { field: 'ReturnedQty', headerName: 'Returned Qty', width: 150 }
  ]

  const rows = [
    {
      id: 1,
      ItemCode: 'Stores - VCL',
      SourceWarehouse: 'Stores - VCL',
      RequiredQty: 'M42 HSS-001',
      TransferredQty: '10',
      ConsumedQty: '$50.00',
      ReturnedQty: '0'
    }
  ]

  return (
    <Grid>
      <Box sx={{ display: 'flex', width: 1080 }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Status*</Typography>
          <TextField size='small' variant='filled' value={getDataRow.status || ''} />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography sx={{ margin: 1 }}>Company*</Typography>
          <TextField size='small' variant='filled' value={getDataRow.company || ''} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Item To Manufacture*</Typography>
          <TextField size='small' variant='filled' value={getDataRow.production_item || ''} />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography sx={{ margin: 1 }}>Qty To Manufacture*</Typography>
          <TextField size='small' variant='filled' value={getDataRow.qty || ''} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Item Name</Typography>
          <TextField size='small' variant='filled' value={getDataRow.item_name || ''} />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography sx={{ margin: 1 }}>Material Transferred for Manufacturing</Typography>
          <TextField size='small' variant='filled' value={getDataRow.material_transferred_for_manufacturing || ''} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ margin: 1 }}>BOM No</Typography>
          <TextField size='small' variant='filled' value={getDataRow.bom_no || ''} />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography sx={{ margin: 1 }}>Manufactured Qty</Typography>
          <TextField size='small' variant='filled' value={getDataRow.produced_qty || ''} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Sales Order</Typography>
          <TextField size='small' variant='filled' value={getDataRow.sales_order || ''} />
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Box>
          <Typography>Required Items</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
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
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Grid>
  )
}

export default ProductionItemPage
