import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  IconButton,
  CardActions,
  Collapse,
  Divider,
  CardContent,
  Checkbox
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'

//Icon
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

//import Dummy and Components
import { Columns, Rows, ColumnPreOrder, RowsPreOrder, ColumnUnit, RowsUnit } from './DummyInventoryItem/DummyInventory'

const InventoryItem = ({ getDataRow, dropDowns }) => {
  console.log('1: ', dropDowns.defaultMaterialRequestType)
  const [collapsePreOder, setCollapsePreOder] = useState(false)
  const [collapseUnit, setCollapseUnit] = useState(false)
  const [collapseSerial, setCollapseSerial] = useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleClickPreOder = () => {
    setCollapsePreOder(!collapsePreOder)
  }

  const handleClickOrder = () => {
    setCollapseUnit(!collapseUnit)
  }

  const handleClickSerial = () => {
    setCollapseSerial(!collapseSerial)
  }

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
      <Box sx={{ mt: 20 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Barcodes
        </Typography>
        <Typography variant='subtitle2' sx={{ m: 2 }}>
          Barcodes
        </Typography>
        <DataGrid
          rows={Rows}
          columns={Columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickPreOder}>
          <Typography variant='h6'>Auto Pre-Order</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickPreOder}>
              {collapsePreOder ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapsePreOder}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Typography variant='subtitle2'>Reorder level based on Warehouse</Typography>
            <Typography variant='subtitle2'>Will also apply for variants unless overrridden</Typography>
            <DataGrid
              rows={RowsPreOrder}
              columns={ColumnPreOrder}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </CardContent>
        </Collapse>
      </Box>

      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickOrder}>
          <Typography variant='h6'>Units of Measure</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickOrder}>
              {collapseUnit ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseUnit}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Typography variant='subtitle2'>UOMs</Typography>
            <Typography variant='subtitle2'>Will also apply for variants</Typography>
            <DataGrid
              rows={RowsUnit}
              columns={ColumnUnit}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 }
                }
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </CardContent>
        </Collapse>
      </Box>

      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickSerial}>
          <Typography variant='h6'>Serial Nos and Batches</Typography>
        </Button>
        <Box>
          <CardActions className='card-action-dense'>
            <IconButton size='small' onClick={handleClickSerial}>
              {collapseSerial ? (
                <ChevronUp sx={{ fontSize: '1.875rem' }} />
              ) : (
                <ChevronDown sx={{ fontSize: '1.875rem' }} />
              )}
            </IconButton>
          </CardActions>
        </Box>
      </Box>
      <Box>
        <Collapse in={collapseSerial}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} defaultChecked />
                <Typography variant='subtitle2' sx={{ m: 4 }}>
                  Has Batch No
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', ml: 20 }}>
                <Checkbox {...label} defaultChecked />
                <Typography variant='subtitle2' sx={{ m: 4 }}>
                  Has Serial No
                </Typography>
              </Box>
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

export default InventoryItem
