// ** React Import
import React, { useState } from 'react'

// ** Mui Import
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const DetailItem = ({ getDataRow }) => {
  const [collapseDescription, setCollapDescription] = useState(false)

  const handleClickDescription = () => {
    setCollapDescription(!collapseDescription)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Item Name :</Typography>
          <TextField size='small' variant='filled' value={getDataRow.item_name} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Valuation Rate :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.valuation_rate} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Item Group :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.item_group} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Delivery/Receipt Allowance (%) :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.over_delivery_receipt_allowance} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Unit of Measure :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.stock_uom} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Over Billing Allowance (%) :</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.over_billing_allowance} />
        </Box>
      </Box>
      <Box sx={{ mt: 30, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickDescription}>
          <Typography variant='h6'>Description</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickDescription}>
              {collapseDescription ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseDescription}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box>
              <Typography variant='subtitle2'>Description</Typography>
              <TextField
                size='small'
                variant='filled'
                label=''
                multiline
                rows={8}
                fullWidth
                value={getDataRow.description}
              />
            </Box>
            <Box>
              <Typography variant='subtitle1'>Brand</Typography>
              <TextField size='small' variant='filled' label='' />
            </Box>
          </CardContent>
        </Collapse>
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

export default DetailItem
