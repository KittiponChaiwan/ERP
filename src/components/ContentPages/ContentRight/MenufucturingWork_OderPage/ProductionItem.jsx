import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ProductionItemPage = ({ getDataRow }) => {
  const [getRequiredItem, setGetRequiredItem] = useState('')
  const [open, setOpen] = useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Work Order/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetRequiredItem(res.data.data)
      })
  }, [])

  const columnsApp = [
    { field: 'idx', headerName: 'No', width: 80 },
    { field: 'item_code', headerName: 'Item Code', width: 110 },
    { field: 'source_warehouse', headerName: 'Source Warehouse', width: 110 },
    { field: 'required_qty', headerName: 'Required Qty', width: 110 },
    { field: 'transferred_qty', headerName: 'Transferred Qty', width: 110 },
    { field: 'consumed_qty', headerName: 'Consumed Qty', width: 110 },
    { field: 'returned_qty', headerName: 'Returned Qty', width: 70 },
    {
      field: 'Edit',
      headerName: 'Edit',
      width: 50,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          variant='text'
          onClick={() => {
            handleClickOpen(true)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  if (getRequiredItem.length === 0) {
    return 'waiting...'
  }

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
            rows={getRequiredItem.required_items}
            columns={columnsApp}
            getRowId={row => row.name}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth={'lg'}
      >
        <DialogTitle id='Editing Row #1'>{'Editing Row #1'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Box>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <Typography variant='subtitle1'>Item Code</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.item_code || ''} />
                </Box>
                <Box sx={{ ml: 24 }}>
                  <Typography variant='subtitle1'>Item Name</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.item_name || ''} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 8 }}>
                <Box>
                  <Typography variant='subtitle1'>Source Warehouse</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.source_warehouse || ''} />
                </Box>
                <Box sx={{ ml: 24 }}>
                  <Typography variant='subtitle1'>Description</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.description || ''} />
                </Box>
              </Box>
              <Box sx={{ mt: 8, ml: 82, display: 'flex' }}>
                <Checkbox {...label} disabled />
                <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
              </Box>
              <Box sx={{ ml: 82, display: 'flex' }}>
                <Checkbox {...label} defaultChecked />
                <Typography sx={{ mt: 2 }}>Include Item In Manufacturing</Typography>
              </Box>
              <Box>
                <Typography variant='h6'>Qty</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ mt: 2 }}>
                  <Typography variant='subtitle1'>Required Qty</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.required_qty || ''} />
                </Box>
                <Box sx={{ ml: 24, mt: 2 }}>
                  <Typography variant='subtitle1'>Description</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.description || ''} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box sx={{ mt: 2 }}>
                  <Typography variant='subtitle1'>Rate</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.rate || ''} />
                </Box>
                <Box sx={{ ml: 24, mt: 2 }}>
                  <Typography variant='subtitle1'>Consumed Qty</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.consumed_qty || ''} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box sx={{ mt: 2 }}>
                  <Typography variant='subtitle1'>Amount</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.amount || ''} />
                </Box>
                <Box sx={{ ml: 24, mt: 2 }}>
                  <Typography variant='subtitle1'>Returned Qty</Typography>
                  <TextField size='small' variant='filled' value={getRequiredItem.returned_qty || ''} />
                </Box>
              </Box>
              <Box sx={{ ml: 86, mt: 4 }}>
                <Typography variant='subtitle1'>Available Qty at Source Warehouse</Typography>
                <TextField
                  size='small'
                  variant='filled'
                  value={getRequiredItem.available_qty_at_source_warehouse || ''}
                />
              </Box>
              <Box sx={{ ml: 86, mt: 4 }}>
                <Typography variant='subtitle1'>Available Qty at WIP Warehouse</Typography>
                <TextField size='small' variant='filled' value={getRequiredItem.available_qty_at_wip_warehouse || ''} />
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Insert Below
          </Button>
        </DialogActions>
      </Dialog>
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
