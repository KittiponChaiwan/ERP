import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const OperationBOM = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [getOperationsBOM, setGetOperationsBOM] = useState('')
  const [getTableOperation, setGetTableOperation] = useState('')
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetTableOperation(params.row)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
    const newValue = getOperationsBOM.fixed_time === 0 ? 1 : 0
    setGetOperationsBOM({ ...getOperationsBOM, fixed_time: newValue })
  }

  const columns = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'operation', headerName: 'Operation', width: 150 },
    { field: '', headerName: 'Workstation Type', width: 150 },
    { field: 'time_in_mins', headerName: 'Operation Time ', width: 150 },
    {
      field: 'Fixed Time',
      headerName: 'Fixed Time',
      width: 50,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => <Checkbox checked={getTableOperation.fixed_time === 1} onChange={handleCheckboxChange} disabled />
    },
    { field: 'operating_cost', headerName: 'Operating Cost (THB)', width: 150 },
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
            setGetTableOperation(params.row)
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}BOM/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetOperationsBOM(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [getDataRow])

  if (getOperationsBOM.length === 0) {
    return 'waiting...'
  }

  return (
    <Grid>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={getOperationsBOM.with_operations} onChange={handleCheckboxChange} />
            <Typography sx={{ mt: 6 }}>With Operations</Typography>
          </Box>
          <Box sx={{ ml: 30 }}>
            <Typography sx={{ margin: 1 }}>Transfer Material Against</Typography>
            <TextField size='small' variant='filled' value={getOperationsBOM.transfer_material_against || ''} />
          </Box>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Manage cost of operations</Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', ml: 71 }}>
            <Checkbox {...label} checked={getOperationsBOM.fg_based_operating_cost} onChange={handleCheckboxChange} />
            <Typography sx={{ mt: 2 }}>FG based Operating Cost</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Operations</Typography>
          <DataGrid
            rows={getOperationsBOM.operations}
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth={'lg'}
        >
          <DialogTitle id='Editing Row #' sx={{ display: 'flex' }}>
            {'Editing Row #'}
            <Typography variant='h6'>{getTableOperation.idx}</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box sx={{ width: 900 }}>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography sx={{ margin: 1 }}>Operation</Typography>
                    <TextField size='small' variant='filled' value={getTableOperation.operation || ''} />
                  </Box>
                  <Box sx={{ ml: 40 }}>
                    <Typography sx={{ margin: 1 }}>Workstation</Typography>
                    <TextField size='small' variant='filled' value={getTableOperation.workstation || ''} />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 4 }}>
                  <Box sx={{ ml: 102 }}>
                    <Typography sx={{ margin: 1 }}>Operation Time </Typography>
                    <TextField size='small' variant='filled' value={getTableOperation.time_in_mins || ''} />
                  </Box>
                </Box>
                <Box sx={{ mt: 10 }}>
                  <Typography variant='h6'>Costing</Typography>
                </Box>
                <Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: '33%' }}>
                      <Typography sx={{ margin: 1 }}>Hour Rate (THB)</Typography>
                      <TextField size='small' variant='filled' value={getTableOperation.hour_rate || ''} />
                    </Box>
                    <Box sx={{ width: '33%' }}>
                      <Typography sx={{ margin: 1 }}>Operating Cost (THB)</Typography>
                      <TextField size='small' variant='filled' value={getTableOperation.operating_cost || ''} />
                    </Box>
                    <Box sx={{ width: '33%' }}>
                      <Typography sx={{ margin: 1 }}>Batch Size</Typography>
                      <TextField size='small' variant='filled' value={getTableOperation.batch_size || ''} />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Box sx={{ width: '33%' }}>
                      <Typography sx={{ margin: 1 }}>Base Hour Rate (THB)</Typography>
                      <TextField size='small' variant='filled' value={getTableOperation.base_hour_rate || ''} />
                    </Box>
                    <Box sx={{ width: '33%' }}>
                      <Typography sx={{ margin: 1 }}>Operating Cost (THB)</Typography>
                      <TextField size='small' variant='filled' value={getTableOperation.base_operating_cost || ''} />
                    </Box>
                    <Box sx={{ width: '33%', display: 'flex' }}>
                      <Checkbox
                        {...label}
                        checked={getTableOperation.set_cost_based_on_bom_qty}
                        onChange={handleCheckboxChange}
                      />
                      <Typography sx={{ mt: 6 }}>Set Operating Cost Based On BOM Quantity</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 10 }}>
                  <Typography variant='h6'>More Information</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ margin: 1 }}>Description</Typography>
                  <TextField size='small' variant='filled' value={getTableOperation.description || ''} />
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

export default OperationBOM
