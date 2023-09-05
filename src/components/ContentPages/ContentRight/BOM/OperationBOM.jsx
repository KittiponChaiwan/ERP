import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'

const OperationBOM = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

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
      ) => <Checkbox {...label} disabled />
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
            console.log(params.row)
          }}
        >
          Edit
        </Button>
      )
    }
  ]
  const [getOperationsBOM, setGetOperationsBOM] = useState('')

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
            <Checkbox {...label} />
            <Typography sx={{ mt: 2 }}>With Operations</Typography>
          </Box>
          <Box sx={{ display: 'flex', ml: 30 }}>
            <Checkbox {...label} />
            <Typography sx={{ mt: 2 }}>With Operations</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Manage cost of operations</Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', ml: 71 }}>
            <Checkbox {...label} disabled />
            <Typography sx={{ mt: 2 }}>WFG based Operating Cost</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Operations</Typography>
          <DataGrid
            rows={getOperationsBOM.operations}
            columns={columns}
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
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default OperationBOM
