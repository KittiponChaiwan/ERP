// ** React Import
import { useState, useEffect } from 'react'

// ** Mui Import
import { Box, Grid, TextField, Typography, Button, Divider, Collapse, IconButton, CardContent } from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'

// ** Mdi Import
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const DetailSalesInvoice = ({ getDataRow }) => {
  // ** State
  const [currencyPrice, setCurrencyPrice] = useState(false)
  const [additionalDiscount, setAdditionalDiscount] = useState(false)

  const handleClickAdditionalDiscount = () => {
    setAdditionalDiscount(!additionalDiscount)
  }

  const handleClickCurrencyPrice = () => {
    setCurrencyPrice(!currencyPrice)
  }

  function formatDate(dateString) {
    const dateObject = new Date(dateString)
    const day = dateObject.getDate().toString().padStart(2, '0')
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    const year = dateObject.getFullYear()

    return `${day}-${month}-${year}`
  }
  const formattedDate = formatDate(getDataRow.posting_date)
  const formattedDateEnd = formatDate(getDataRow.due_date)

  function formatTime(timeString) {
    const timeParts = timeString.split(':')
    const hours = timeParts[0]
    const minutes = timeParts[1]

    return `${hours}:${minutes}`
  }
  const formattedTime = formatTime(getDataRow.posting_time)

  const [quotation, setQuotation] = useState('')
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}Sales%20Invoice/${getDataRow.name}`, {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataDetailAddress(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log('quotation', quotation)
  })

  /* ตาราง */

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },

    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ]

  return (
    <Box>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Customer</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={getDataRow.customer} />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Date * :</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth label='' value={formattedDate} />
          <Typography>Posting Time :</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth label='' value={formattedTime} />
          <Typography>Payment Due Date *</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={formattedDateEnd}
            formatDate
          />
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />

      {/* ////////////////////////////////////// แถวที่ 3 ///////////////////////////////////////////// */}

      <Grid container sx={{ mb: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Button size='small' variant='filled' onClick={handleClickCurrencyPrice}>
            Currency and Price List
          </Button>
          <IconButton size='small' onClick={handleClickCurrencyPrice}>
            {currencyPrice ? (
              <ChevronUp sx={{ fontSize: '1.875rem' }} />
            ) : (
              <ChevronDown sx={{ fontSize: '1.875rem' }} />
            )}
          </IconButton>
        </Box>
        <Grid container>
          <Collapse in={currencyPrice} sx={{ width: '100%' }}>
            <Divider sx={{ margin: 0 }} />
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item sm={12} md={6} lg={6}>
                <Typography>Currency</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  value={getDataRow.currency}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Typography>Price List</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  value={getDataRow.selling_price_list}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Box sx={{ mb: 10 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align='right'>Calories</StyledTableCell>
                <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.calories}</StyledTableCell>
                  <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                  <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                  <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Total Quantity</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={getDataRow.currency} />
        </Grid>

        <Grid item sm={12} md={12} lg={6}>
          <Typography>Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>Total Taxes and Charges (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Grid container spacing={2}>
        <Grid item sm={12} md={3} lg={3}>
          <Typography>Totals</Typography>
        </Grid>
        <Grid item sm={12} md={9} lg={9}>
          <Typography>Grand Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>Rounding Adjustment (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={getDataRow.supplier_name}
          />
          <Typography>Rounded Total (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>In Words (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>Total Advance</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>Outstanding Amount (THB)</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
        </Grid>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Grid container sx={{ mb: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Button size='small' variant='filled' onClick={handleClickAdditionalDiscount}>
            Additional Discount
          </Button>
          <IconButton size='small' onClick={handleClickAdditionalDiscount}>
            {additionalDiscount ? (
              <ChevronUp sx={{ fontSize: '1.875rem' }} />
            ) : (
              <ChevronDown sx={{ fontSize: '1.875rem' }} />
            )}
          </IconButton>
        </Box>
        <Collapse in={additionalDiscount}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={5.5}>
                <Typography>Apply Additional Discount On</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  value={getDataRow.supplier_name}
                />
              </Grid>

              <Grid item sm={12} md={12} lg={6.5}>
                <Typography>Additional Discount Percentage</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  label=''
                  value={getDataRow.supplier_group}
                />
                <Typography>Additional Discount Amount (THB)</Typography>
                <TextField
                  sx={{ marginBottom: 5 }}
                  size='small'
                  variant='filled'
                  fullWidth
                  label=''
                  value={getDataRow.supplier_group}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Grid>
      <Divider sx={{ margin: 0, mb: 5 }} />
      <Typography variant=''>Add a comment:</Typography>
      <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
    </Box>
  )
}

export default DetailSalesInvoice
