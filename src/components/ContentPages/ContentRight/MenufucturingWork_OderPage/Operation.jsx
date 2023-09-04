//Import React
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Operation = ({ getDataRow }) => {
  const [getDataOperation, setGetDataOperation] = useState('')
  const [getRowOperation, setGetRowOperation] = useState('')
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRowClick = params => {
    setOpen(true)
    setGetRowOperation(params.row)
  }

  const column = [
    { field: 'idx', headerName: 'No', width: 150 },
    { field: 'operation', headerName: 'Operation', width: 150 },
    { field: 'completed_qty', headerName: 'Completed Qty', width: 150 },
    { field: 'process_loss_qty', headerName: 'Process Loss Qty', width: 150 },
    { field: 'bom', headerName: 'BOM', width: 150 },
    { field: 'workstation', headerName: 'Workstation', width: 150 },
    { field: 'time_in_mins', headerName: 'Time', width: 150 },
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
            setGetRowOperation(params.row)
            handleClickOpen(true)
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
      .get(`${process.env.NEXT_PUBLIC_API_URL}Work Order/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setGetDataOperation(res.data.data)
      })
  }, [getDataRow])

  if (getDataOperation.length === 0) {
    return 'waiting...'
  }

  return (
    <Grid>
      <Box>
        <Typography variant='h6'>Operations</Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography>Transfer Material Against</Typography>
        <TextField
          size='small'
          variant='filled'
          value={getDataRow.transfer_material_against || ''}
          sx={{ width: 300 }}
        />
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography>Operations</Typography>
        <DataGrid
          rows={getDataOperation.operations}
          columns={column}
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
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6'>Time</Typography>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Planned Start Date</Typography>
          <TextField size='small' variant='filled' value={getDataRow.planned_start_date || ''} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>Asia/Kolkata</Typography>
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography>Actual Start Date</Typography>
          <TextField size='small' variant='filled' value={getDataRow.actual_start_date || ''} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>Asia/Kolkata</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Planned End Date</Typography>
          <TextField size='small' variant='filled' value={getDataRow.planned_end_date || ''} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>Asia/Kolkata</Typography>
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography>Actual End Date</Typography>
          <TextField size='small' variant='filled' value={getDataRow.actual_end_date || ''} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>Asia/Kolkata</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Expected Delivery Date</Typography>
          <TextField
            size='small'
            variant='filled'
            value={getDataRow.expected_delivery_date || ''}
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography>Lead Time</Typography>
          <TextField size='small' variant='filled' value={getDataRow.lead_time || ''} sx={{ width: 300 }} />
          <Typography variant='subtitle2'>In Mins</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant='h6'>Operation Cost</Typography>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Planned Operating Cost</Typography>
          <TextField
            size='small'
            variant='filled'
            value={getDataRow.planned_operating_cost || ''}
            sx={{ width: 300 }}
          />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography>Corrective Operation Cost</Typography>
          <TextField
            size='small'
            variant='filled'
            value={getDataRow.corrective_operation_cost || ''}
            sx={{ width: 300 }}
          />
          <Typography variant='subtitle2'>From Corrective Job Card</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Actual Operating Cost</Typography>
          <TextField size='small' variant='filled' value={getDataRow.actual_operating_cost || ''} sx={{ width: 300 }} />
        </Box>
        <Box sx={{ ml: 30 }}>
          <Typography>Total Operating Cost</Typography>
          <TextField size='small' variant='filled' value={getDataRow.total_operating_cost || ''} sx={{ width: 300 }} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography>Additional Operating Cost</Typography>
          <TextField
            size='small'
            variant='filled'
            value={getDataRow.additional_operating_cost || ''}
            sx={{ width: 300 }}
          />
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
            <Typography variant='h6'>{getRowOperation.idx}</Typography>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Box>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography>Operation</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.operation || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography>BOM</Typography>
                    <TextField size='small' variant='filled' value={getRowOperation.bom || ''} sx={{ width: 300 }} />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 6 }}>
                  <Box>
                    <Typography>Status</Typography>
                    <TextField size='small' variant='filled' value={getRowOperation.status || ''} sx={{ width: 300 }} />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography>Workstation Type</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.workstation_type || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 6 }}>
                  <Box>
                    <Typography>Completed Qty</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.completed_qty || ''}
                      sx={{ width: 300 }}
                    />
                    <Typography variant='subtitle2'>Operation completed for how many finished goods?</Typography>
                  </Box>
                  <Box sx={{ ml: 17 }}>
                    <Typography>Workstation</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.workstation || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 6 }}>
                  <Box>
                    <Typography>Process Loss Qty</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.process_loss_qty || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 16 }}>
                  <Box>
                    <Typography>Operation Description</Typography>
                    <TextField
                      size='small'
                      variant='filled'
                      value={getRowOperation.description || ''}
                      sx={{ width: 300 }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ mt: 16 }}>
                    <Typography variant='h6'>Estimated Time and Cost</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Operation Description</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.description || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>Asia/Kolkata</Typography>
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Planned End Time</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.planned_end_time || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>Asia/Kolkata</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Hour Rate</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.hour_rate || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Batch Size</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.batch_size || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Time</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.time_in_mins || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>In Minutes</Typography>
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Planned Operating Cost</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.planned_operating_cost || ''}
                        sx={{ width: 300 }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ mt: 8 }}>
                    <Typography variant='h6'>Actual Time and Cost</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Actual Start Time</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.actual_start_time || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>Updated via 'Time Log' (In Minutes)</Typography>
                      <Typography variant='subtitle2'>Asia/Kolkata</Typography>
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Actual End Time</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.actual_end_time || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>Updated via 'Time Log' (In Minutes)</Typography>
                      <Typography variant='subtitle2'>Asia/Kolkata</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', mt: 4 }}>
                    <Box>
                      <Typography>Actual Operation Time</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.actual_operation_time || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>Updated via 'Time Log' (In Minutes)</Typography>
                    </Box>
                    <Box sx={{ ml: 30 }}>
                      <Typography>Actual Operating Cost</Typography>
                      <TextField
                        size='small'
                        variant='filled'
                        value={getRowOperation.actual_operating_cost || ''}
                        sx={{ width: 300 }}
                      />
                      <Typography variant='subtitle2'>(Hour Rate / 60) * Actual Operation Time</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
      <Box sx={{ mt: 8 }}>
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

export default Operation
