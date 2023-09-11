import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  CardActions,
  Divider,
  CardContent,
  FormGroup,
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { BorderBottom } from 'mdi-material-ui'
import { useEffect, useState } from 'react'

const MoreInfoBOM = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [getMoreInfoTable, setGetMoreInfoTable] = useState('')

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetMoreInfoTable(params.row)
  }

  const columns = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'item_code', headerName: 'Item Code', width: 150 },
    { field: 'item_name', headerName: 'Item Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'stock_qty', headerName: 'Stock Qty', width: 150 },
    { field: 'rate', headerName: 'Rate', width: 150 },
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
            setGetMoreInfoTable(params.row)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  const [getDataMoreInfo, setGetDataMoreInfo] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}BOM/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetDataMoreInfo(res.data.data)
      })
  }, [getDataRow])

  if (getDataMoreInfo.length === 0) {
    return 'waiting...'
  }

  return (
    <Grid>
      <Box>
        <Box>
          <Typography>Item Name</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.item_name} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Item Description</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.description} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant='h6'>Quality Inspection</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={getDataRow.inspection_required} onChange={handleCheckboxChange} />
          <Typography sx={{ mt: 2 }}>Quality Inspection Required</Typography>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant='h6'>Materials Required (Exploded)</Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography>Item Description</Typography>
          <DataGrid
            rows={getDataMoreInfo.exploded_items}
            columns={columns}
            getRowId={row => row.name}
            onRowClick={handleRowClick}
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
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth={'lg'}
        >
          <DialogTitle id='Editing Row #' sx={{ display: 'flex' }}>
            {'Editing Row #'}
            <Typography variant='h6'>{getMoreInfoTable.idx}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box>
                    <Typography>Item Code</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.item_code || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                  <Box sx={{ mt: 6 }}>
                    <Typography>Item Name</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.item_name || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 10 }}>
                  <Box>
                    <Typography>Description</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.description || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                  <Box sx={{ mt: 4, ml: 30, width: 100, height: 100, backgroundColor: '#e0e0e0' }}></Box>
                </Box>
                <Box sx={{ mt: 10, display: 'flex' }}>
                  <Box>
                    <Typography>Stock Qty</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.stock_qty || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography>Stock UOM</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.stock_uom || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: 4, display: 'flex' }}>
                  <Box>
                    <Typography>Rate</Typography>
                    <TextField size='small' variant='filled' value={getMoreInfoTable.rate || ''} sx={{ width: 300 }} />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography>Amount</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.amount || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: 4, display: 'flex' }}>
                  <Box>
                    <Typography>Qty Consumed Per Unit</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getMoreInfoTable.qty_consumed_per_unit || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Box sx={{ display: 'flex0', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Checkbox
                          {...label}
                          checked={getMoreInfoTable.include_item_in_manufacturing}
                          onChange={handleCheckboxChange}
                        />
                        <Typography sx={{ mt: 2 }}>Include Item In Manufacturing</Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Checkbox
                          {...label}
                          checked={getMoreInfoTable.sourced_by_supplier}
                          onChange={handleCheckboxChange}
                        />
                        <Typography sx={{ mt: 2 }}>Sourced by Supplier</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Insert Below
                </Button>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </Grid>
  )
}

export default MoreInfoBOM
