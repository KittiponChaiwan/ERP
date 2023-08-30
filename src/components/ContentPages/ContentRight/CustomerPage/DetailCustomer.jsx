// ** React Import
import React, { useState } from 'react'

// ** Mui Import
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  Button,
  CardActions,
  Divider,
  CardContent,
  FormGroup,
  FormControlLabel
} from '@mui/material'
import Collapse from '@mui/material/Collapse'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import IconButton from '@mui/material/IconButton'

const DetailCustomer = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [collapseInternal, setCollapseInternal] = useState(false)
  const [collapseMarket, setCollapseSecMarket] = useState(false)
  const [isCompanyCheck, setIsCompanyCheck] = useState(false)

  const handleClickInternal = () => {
    setCollapseInternal(!collapseInternal)
  }

  const handleCompanyCheck = event => {
    setIsCompanyCheck(event.target.checked)
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={isCompanyCheck} onChange={handleCompanyCheck} />}
                variant='body2'
                label='Is Your Company Address'
              />
              {isCompanyCheck && (
                <Box sx={{ mt: 4 }}>
                  <Typography>Represents Company *</Typography>
                  <TextField label='' variant='outlined' fullWidth />
                </Box>
              )}
            </FormGroup>
          </Box>
          <Box></Box>
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
              <Typography sx={{ marginBottom: 2 }}>Customer Details</Typography>
              <TextField
                size='small'
                variant='filled'
                label=''
                multiline
                rows={14}
                fullWidth
                value={getDataRow.customer_details}
              />
              <Typography variant='subtitle2'>Additional information regarding the customer.</Typography>
            </Box>
          </Box>
        </CardContent>
      </Collapse>
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

export default DetailCustomer
