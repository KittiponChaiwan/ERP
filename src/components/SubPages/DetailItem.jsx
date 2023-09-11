// ** React Import
import React, { useState } from 'react'

// ** Mui Import
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Collapse,
  Divider,
  IconButton,
  TextField,
  TextareaAutosize,
  Typography
} from '@mui/material'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const DetailItem = ({ dataRow }) => {
  const [collapseDescription, setCollapseDescription] = useState(false)

  const handleClickDescription = () => {
    setCollapseDescription(!collapseDescription)
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Typography sx={{ margin: 1 }}>Item Name :</Typography>
            <TextField size='small' variant='filled' value={dataRow.item_name} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ marginBottom: 2 }}>Item Group :</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.item_group} />
          </Box>
        </Box>

        <Box sx={{ ml: 18, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.disabled} onChange={handleCheckboxChange} />
            <Typography variant='subtitle2' sx={{ mt: 2 }}>
              Disabled
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.allow_alternative_item} onChange={handleCheckboxChange} />
            <Typography variant='subtitle2' sx={{ mt: 2 }}>
              Allow Alternative Item
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.is_stock_item} onChange={handleCheckboxChange} />
            <Typography variant='subtitle2' sx={{ mt: 2 }}>
              Maintain Stock
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.has_variants} onChange={handleCheckboxChange} />
            <Typography variant='subtitle2' sx={{ mt: 2 }}>
              Has Variants
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Default Unit of Measure :</Typography>
          <TextField size='small' variant='filled' label='' value={dataRow.stock_uom} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Valuation Rate :</Typography>
          <TextField size='small' variant='filled' label='' value={dataRow.valuation_rate} />
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} checked={dataRow.is_fixed_asset} onChange={handleCheckboxChange} />
            <Typography sx={{ m: 2 }}>Is Fixed Asset</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ ml: 82 }}>
          <Box>
            <Typography sx={{ marginBottom: 2 }}>Over Delivery/Receipt Allowance (%) :</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.over_delivery_receipt_allowance} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ marginBottom: 2 }}>Over Billing Allowance (%) :</Typography>
            <TextField size='small' variant='filled' label='' value={dataRow.over_billing_allowance} />
          </Box>
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
              <TextareaAutosize
                style={{ minHeight: '200px', width: '100%' }}
                size='small'
                variant='filled'
                label=''
                value={dataRow.description}
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
