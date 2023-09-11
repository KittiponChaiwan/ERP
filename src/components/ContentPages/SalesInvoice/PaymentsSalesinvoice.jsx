// ** React Import
import React from 'react'

// ** Mui Import
import {
  TextareaAutosize,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  CardContent,
  IconButton,
  Collapse,
  Divider,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { useState } from 'react'
import Btn from 'src/components/Button/Button'

const Payments = ({ dataRow }) => {
  // ** State
  const [advancePayments, setAdvancepayments] = useState(false)
  const [loyailtyPointsRedemption, setloyailtyPointsRedemption] = useState(false)

  const handleClickAdvancePayments = () => {
    setAdvancepayments(!advancePayments)
  }

  const handleClickLoyailtyPointsRedemption = () => {
    setloyailtyPointsRedemption(!loyailtyPointsRedemption)
  }

  /*  checkbox */
  const handleCheckboxChange = event => {
    // เมื่อ Checkbox ถูกเปลี่ยนแปลงสถานะ
    // คุณสามารถทำสิ่งที่คุณต้องการเมื่อ Checkbox ถูกเปิดหรือปิดที่นี่
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Grid container sx={{ mt: 10 }}>
        <Grid>
          <Box sx={{ width: '100%' }}>
            <Button size='small' variant='filled' label='' onClick={handleClickAdvancePayments}>
              Advance Payments
            </Button>
            <IconButton size='small' onClick={handleClickAdvancePayments}>
              {advancePayments ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </Box>

          <Collapse in={advancePayments} width={'100%'} style={{ width: '100%' }}>
            <Divider sx={{ margin: 0, width: '100%' }} />
            <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dataRow?.allocate_advances_automatically === 1}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label='Allocate Advances Automatically (FIFO)
'
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Btn
                  detailbutton={' Get Advances Automatically'}
                  bgcolorbutton={'white'}
                  numminwid={'auto'}
                  handleButtonClick={() => router.push()}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <Box>
            <Box sx={{ width: '100%' }}>
              <Button size='small' variant='filled' label='' onClick={handleClickLoyailtyPointsRedemption}>
                Loyailty Points Redemption
              </Button>
              <IconButton size='small' onClick={handleClickLoyailtyPointsRedemption}>
                {loyailtyPointsRedemption ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </Box>

            <Collapse in={loyailtyPointsRedemption}>
              <Divider sx={{ margin: 0, width: '100%' }} />
              <Grid container spacing={2} sx={{ mt: 5 }} style={{ width: '100%' }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={dataRow?.redeem_loyalty_points === 1} onChange={handleCheckboxChange} />
                    }
                    label='Redeem Loyalty Points'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
              </Grid>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ my: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={dataRow.description} />
      </Grid>
      <Btn
        detailbutton={' Comment'}
        bgcolorbutton={'white'}
        numminwid={'auto'}
        handleButtonClick={() => router.push()}
      />
    </Grid>
  )
}

export default Payments
