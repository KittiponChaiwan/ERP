import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const InventoryItem = ({ getDataRow, dropDowns }) => {
  console.log('1: ', dropDowns.defaultMaterialRequestType)

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}> Shelf Life In Days :</Typography>
          <TextField variant='filled' label='' value={getDataRow.shelf_life_in_days} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Warranty Period (in days) :</Typography>
          <TextField variant='filled' label='' value={getDataRow.warranty_period} />
        </Box>
      </Box>
      <Box sx={{ mt: 6, display: 'flex' }}>
        <Box>
          <Typography sx={{ marginBottom: 2 }}>End of Life:</Typography>
          <TextField variant='filled' label='' value={getDataRow.end_of_life} />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight Per Unit:</Typography>
          <TextField variant='filled' label='' value={getDataRow.weight_per_unit} />
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
              {dropDowns.defaultMaterialRequestType?.map(row => (
                <MenuItem key={row.id} value={row.id}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ ml: 14 }}>
          <Typography sx={{ marginBottom: 2 }}>Weight UOM:</Typography>
          <TextField variant='filled' label='' value={getDataRow.weight_uom} />
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
              {dropDowns.valuationMethod?.map(row => (
                <MenuItem key={row.id} value={row.id}>
                  {row.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default InventoryItem
