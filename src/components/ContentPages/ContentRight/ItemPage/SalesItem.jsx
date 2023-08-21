// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  CardActions,
  IconButton,
  Collapse,
  Divider,
  CardContent
} from '@mui/material'

//Icon MUI
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { DataGrid } from '@mui/x-data-grid'

const SalesItem = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const [collapseDeferred, setCollapseDeferred] = useState(false)
  const [collapseCustomer, setCollapseCustomer] = useState(false)

  const handleDeferred = () => {
    setCollapseDeferred(!collapseDeferred)
  }

  const handleCustomer = () => {
    setCollapseCustomer(!collapseCustomer)
  }

  const columnsCus = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'CustomerName', headerName: 'Customer Name', width: 150 },
    { field: 'CustomerGroup', headerName: 'Customer Group', width: 200 },
    { field: 'RefCode', headerName: 'Ref Code', width: 200 }
  ]

  const rowCus = [
    {
      id: 1,
      CustomerName: 'Targaryen',
      CustomerGroup: 'Daenerys',
      RefCode: 'daeams'
    }
  ]

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Default Sales Unit of Measure :</Typography>
            <TextField variant='filled' label='' />
          </Box>
          <Box sx={{ ml: 20 }}>
            <Typography sx={{ marginBottom: 2 }}>Max Discount (%) :</Typography>
            <TextField variant='filled' label='' />
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Grant Commission
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Allow Sales
          </Typography>
        </Box>
        <Box sx={{ mt: 5, display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleDeferred}>
            <Typography variant='h6'>Foreign Trade Details</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleDeferred}>
                {collapseDeferred ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapseDeferred}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box sx={{ mt: 4, display: 'flex' }}>
                <Checkbox {...label} defaultChecked />
                <Typography variant='subtitle1' sx={{ m: 4 }}>
                  Enable Deferred Revenue
                </Typography>
              </Box>
            </CardContent>
          </Collapse>
        </Box>
        <Box sx={{ mt: 5, display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleCustomer}>
            <Typography variant='h6'>Customer Details</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleCustomer}>
                {collapseCustomer ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapseCustomer}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box>
                <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
                  Customer Items
                </Typography>
                <Box>
                  <DataGrid
                    rows={rowCus}
                    columns={columnsCus}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 }
                      }
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </Box>
                <Button>Add row</Button>
              </Box>
            </CardContent>
          </Collapse>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Box>
  )
}

export default SalesItem
