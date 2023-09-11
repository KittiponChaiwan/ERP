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
  FormControlLabel,
  Grid
} from '@mui/material'
import Collapse from '@mui/material/Collapse'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import IconButton from '@mui/material/IconButton'

const DetailCustomer = ({ dataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [collapseInternal, setCollapseInternal] = useState(false)
  const [collapseMarket, setCollapseSecMarket] = useState(false)

  const handleClickMarket = () => {
    setCollapseSecMarket(!collapseMarket)
  }

  const [isCompanyCheck, setIsCompanyCheck] = useState(false)

  const handleClickInternal = () => {
    setCollapseInternal(!collapseInternal)
  }

  const handleCompanyCheck = event => {
    setIsCompanyCheck(event.target.checked)
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Customer Name</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            value={dataRow.customer_name || ''}
            fullWidth
          />

          <Typography>Territory</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.territory || ''}
            fullWidth
          />
        </Grid>

        <Grid item sm={12} md={12} lg={6}>
          <Typography>Customer Type</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.customer_type || ''}
            fullWidth
          />

          <Typography>From Lead</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.lead_name || ''}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Customer Group</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.customer_group || ''}
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>From Opportunity</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.opportunity_name || ''}
            fullWidth
          />

          <Typography>Account Manager</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.account_manager || ''}
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: 0, mb: 5 }} />

      <Grid>
        <Typography variant='h5'>Descripstion</Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Billing Currency</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.default_currency || ''}
            fullWidth
          />

          <Typography>Default Price List</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.default_price_list || ''}
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Default Company Bank Account</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            label=''
            value={dataRow.default_bank_account || ''}
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: 0, mb: 5 }} />

      <Grid container sx={{ mb: 5 }}>
        <Box sx={{ width: '100%', display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleClickInternal}>
            <Typography variant='h6'> Internal Customer</Typography>
          </Button>

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
      </Grid>

      <Grid container>
        <Collapse in={collapseInternal} width={'100%'} style={{ width: '100%' }}>
          <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={isCompanyCheck} onChange={handleCompanyCheck} />}
                  variant='body2'
                  label='Is Your Company Address'
                />
                {isCompanyCheck && (
                  <Grid>
                    <Typography>Represents Company *</Typography>
                    <TextField
                      sx={{ marginBottom: 5 }}
                      label=''
                      variant='outlined'
                      fullWidth
                      size='small'
                      value={dataRow.represents_company || ''}
                    />
                  </Grid>
                )}
              </FormGroup>
            </Grid>
          </Grid>
        </Collapse>
      </Grid>

      <Grid container sx={{ mb: 5 }}>
        <Grid sx={{ width: '100%', display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleClickMarket}>
            <Typography variant='h6'> More Infomation</Typography>
          </Button>

          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickMarket}>
              {collapseMarket ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>

      <Grid container>
        <Collapse in={collapseMarket} width={'100%'} style={{ width: '100%' }}>
          <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography>Market Segment</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                label=''
                value={dataRow.market_segment}
                fullWidth
              />

              <Typography>industry</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                label=''
                value={dataRow.industry}
                fullWidth
              />

              <Typography>Website</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                label=''
                value={dataRow.website}
                fullWidth
              />

              <Typography>Print Language</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                label=''
                value={dataRow.language}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography>Customer Details</Typography>
              <TextField
                sx={{ marginBottom: 5 }}
                size='small'
                variant='filled'
                label=''
                multiline
                rows={13}
                fullWidth
                value={dataRow.customer_details}
              />
              <Typography variant='subtitle2'>Additional information regarding the customer.</Typography>
            </Grid>
          </Grid>
        </Collapse>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: '100%' }}>
          <Typography variant='h6' sx={{ m: 2 }}>
            Add Comment
          </Typography>
          <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
          <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
          <Button>add comment</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DetailCustomer
