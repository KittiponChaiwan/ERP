import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material'

const Inventory_item = props => {
  const { getRow, dataItem } = props

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}> Shelf Life In Days :</Typography>
          <TextField variant='filled' label='' value={getRow.shelf_life_in_days} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Warranty Period (in days) :</Typography>
          <TextField variant='filled' label='' value={getRow.warranty_period} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>End of Life:</Typography>
          <TextField variant='filled' label='' value={getRow.end_of_life} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight Per Unit:</Typography>
          <TextField variant='filled' label='' value={getRow.weight_per_unit} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>default material request type-label:</Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
            <InputLabel id='default material request type-label'>default material request type:</InputLabel>
            <Select
              required
              labelId='default material request type-label'
              id='default material request type'
              name='default material request type'
              label='default material request type'
            >
              {dataItem.map(row => (
                <MenuItem key={row.default_material_request_type} value={row.default_material_request_type}>
                  {row.default_material_request_type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ml: 14 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight UOM:</Typography>
          <TextField variant='filled' label='' value={getRow.weight_uom} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>Valuation method:</Typography>
          <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
            <InputLabel id='valuation_method-label'>Valuation method:</InputLabel>
            <Select
              required
              labelId='valuation_method-label'
              id='valuation_method'
              name='valuation_method'
              label='valuation_method'
              sx={{ width: 270 }}
            >
              {dataItem.map(row => (
                <MenuItem key={row.valuation_method} value={row.valuation_method}>
                  {row.valuation_method}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default Inventory_item
