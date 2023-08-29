import { Box, Button, Grid, TextField, Typography, Checkbox } from '@mui/material'

const ConfigulationPage = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Grid>
      <Box>
        <Box>
          <Checkbox {...label} disabled checked />
          <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
        </Box>
        <Box>
          <Checkbox {...label} disabled checked />
          <Typography sx={{ mt: 2 }}>Skip Material Transfer to WIP Warehouse {getDataRow.item_name}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default ConfigulationPage
