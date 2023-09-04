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
  FormControlLabel
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

const Operation = ({ getDataRow }) => {
  const [getDataOperation , setGetDataOperation] = useState('')

  const column = [
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'operation', headerName: 'Operation', width: 150 },
    { field: 'completed_qty', headerName: 'Completed Qty', width: 150 },
    { field: 'process_loss_qty', headerName: 'Process Loss Qty', width: 150 },
    { field: 'bom', headerName: 'BOM', width: 150 },
    { field: 'Workstation', headerName: 'Workstation', width: 150 },
    { field: 'Time', headerName: 'Time', width: 150 }
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
          rows={row}
          columns={column}
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
