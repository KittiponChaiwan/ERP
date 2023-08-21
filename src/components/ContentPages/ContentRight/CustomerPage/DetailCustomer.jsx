// ** React Import
import React, { useState } from 'react'

// ** Mui Import
import { Box, TextField, Typography, Checkbox, Button, CardActions, Divider, CardContent } from '@mui/material'
import Collapse from '@mui/material/Collapse'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import IconButton from '@mui/material/IconButton'

const DetailCustomer = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [collapseInternal, setCollapseInternal] = useState(false)
  const [collapseMarket, setCollapseSecMarket] = useState(false)

  const handleClickInternal = () => {
    setCollapseInternal(!collapseInternal)
  }
  const handleClickMarket = () => {
    setCollapseSecMarket(!collapseMarket)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ margin: 1 }}>Customer Name</Typography>
          <TextField size='small' variant='filled' value={getDataRow.customer_name} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Territory</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.territory} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Customer Type</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.customer_type} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>From Lead</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.lead_name} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Customer Group</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.customer_group} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>From Opportunity</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.opportunity_name} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ ml: 82 }}>
          <Typography sx={{ marginBottom: 2 }}>Account Manager</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.account_manager} />
        </Box>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Typography variant='h5'>Descripstion</Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Billing Currency</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.default_currency} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Default Price List</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.default_price_list} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ ml: 82 }}>
          <Typography sx={{ marginBottom: 2 }}>Default Company Bank Account</Typography>
          <TextField size='small' variant='filled' label='' value={getDataRow.default_bank_account} />
        </Box>
      </Box>
      <Box sx={{ mt: 20, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickInternal}>
          <Typography variant='h6'> Internal Customer</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickInternal}>
              {collapseInternal ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Collapse in={collapseInternal}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} defaultChecked />
            <Typography variant='subtitle1' sx={{ m: 4 }}>
              Is Internal Customer
            </Typography>
          </Box>
        </CardContent>
      </Collapse>

      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickMarket}>
          <Typography variant='h6'> More Information</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickMarket}>
              {collapseMarket ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Collapse in={collapseMarket}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '38%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mt: 6 }}>
                <Typography sx={{ marginBottom: 2 }}>Market Segment</Typography>
                <TextField size='small' variant='filled' label='' value={getDataRow.market_segment} />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ marginBottom: 2 }}>industry</Typography>
                <TextField size='small' variant='filled' label='' value={getDataRow.industry} />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ marginBottom: 2 }}>Website</Typography>
                <TextField size='small' variant='filled' label='' value={getDataRow.website} />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography sx={{ marginBottom: 2 }}>Print Language</Typography>
                <TextField size='small' variant='filled' label='' value={getDataRow.language} />
              </Box>
            </Box>
            <Box sx={{ width: '60%', mt: 6 }}>
              <Typography sx={{ marginBottom: 2 }}>Default Price List</Typography>
              <TextField
                size='small'
                variant='filled'
                label=''
                multiline
                rows={14}
                fullWidth
                value={getDataRow.customer_details}
              />
            </Box>
          </Box>
        </CardContent>
      </Collapse>

      {/* <Box sx={{ mt: 30 }}>
        <Typography variant='>Customer Details:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
      </Box> */}
    </Box>
  )
}

export default DetailCustomer
