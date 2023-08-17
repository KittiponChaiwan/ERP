import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'

const Sales_item = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

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
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6'>Deferred Revenue</Typography>
        </Box>
        <Box sx={{ mt: 4, display: 'flex' }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant='subtitle1' sx={{ m: 4 }}>
            Enable Deferred Revenue
          </Typography>
        </Box>
        <Box sx={{ mt: 10 }}>
          <Typography variant='h6'>Customer Details </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2' sx={{ marginBottom: 2 }}>
            Item Defaults
          </Typography>
          <Box>
            {/* <DataGrid
          // rows={dataItem}
          columns={columnsAcc}
          // getRowId={row => row.name}
          checkboxSelection
          disableRowSelectionOnClick
        /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sales_item
