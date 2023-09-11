//Import React
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  CardActions,
  Divider,
  CardContent,
  FormGroup,
  FormControlLabel
} from '@mui/material'
import Collapse from '@mui/material/Collapse'
import { useState } from 'react'

//import Icon
import { ChevronDown, ChevronUp } from 'mdi-material-ui'
import IconButton from '@mui/material/IconButton'

const ConfigulationPage = ({ getDataRow }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const [collapseSerial, setCollapseSerial] = useState(false)

  const handleClickSerial = () => [setCollapseSerial(!collapseSerial)]

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Box sx={{ width: 1080, display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={getDataRow.allow_alternative_item} onChange={handleCheckboxChange} />
          <Typography sx={{ mt: 2 }}>Allow Alternative Item</Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 30 }}>
          <Checkbox {...label} checked={getDataRow.skip_transfer} onChange={handleCheckboxChange} />
          <Typography sx={{ mt: 2 }}>Skip Material Transfer to WIP Warehouse {getDataRow.item_name}</Typography>
        </Box>
      </Box>
      <Box sx={{ ml: 85 }}>
        <Typography variant='subtitle2'>Check if material transfer entry is not required</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex' }}>
          <Checkbox {...label} checked={getDataRow.use_multi_level_bom} onChange={handleCheckboxChange} />
          <Typography sx={{ mt: 2 }}>Use Multi-Level BOM</Typography>
        </Box>
        <Box sx={{ display: 'flex', ml: 30 }}>
          <Checkbox
            {...label}
            checked={getDataRow.update_consumed_material_cost_in_project}
            onChange={handleCheckboxChange}
          />
          <Typography sx={{ mt: 2 }}>Update Consumed Material Cost In Project</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='subtitle2'>Plan material for sub-assemblies</Typography>
      </Box>
      <Box sx={{ mt: 8 }}>
        <Typography variant='h6'>Warehouse</Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: 6 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>Work-in-Progress Warehouse</Typography>
          <TextField size='small' variant='filled' value={getDataRow.wip_warehouse || ''} />
          <Typography variant='subtitle2'>This is a location where operations are executed.</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 20 }}>
          <Typography>Target Warehouse</Typography>
          <TextField size='small' variant='filled' value={getDataRow.fg_warehouse || ''} />
          <Typography variant='subtitle2'>This is a location where final product stored.</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 10, display: 'flex' }}>
        <Button size='small' variant='filled' label='' onClick={handleClickSerial}>
          <Typography variant='h6'> Serial No and Batch for Finished Good</Typography>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={getDataRow.has_serial_no} onChange={handleCheckboxChange} />
                <Typography sx={{ mt: 2 }}>Has Serial No</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} checked={getDataRow.has_batch_no} onChange={handleCheckboxChange} />
                <Typography sx={{ mt: 2 }}>Has Batch No</Typography>
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography variant='h6' sx={{ m: 2 }}>
          Add Comment
        </Typography>
        <TextField size='small' variant='filled' label='' multiline rows={4} fullWidth />
        <Typography variant='subtitle2'>Ctrl+Enter to add comment</Typography>
        <Button>add comment</Button>
      </Box>
    </Grid>
  )
}

export default ConfigulationPage
