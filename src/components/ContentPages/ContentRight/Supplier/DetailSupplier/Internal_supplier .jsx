import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField' // Import TextField
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const Internal_Supplier = () => {
  // ** State
  const [collapse, setCollapse] = useState(false)
  const [isInternalSupplier, setIsInternalSupplier] = useState(false) // New state for checkbox

  const handleClick = () => {
    setCollapse(!collapse)
  }

  const handleCheckboxChange = event => {
    setIsInternalSupplier(event.target.checked)
  }

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Button size='small' variant='filled' label='' onClick={handleClick}>
          Internal Supplier
        </Button>
        <IconButton size='small' onClick={handleClick}>
          {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
        </IconButton>
      </Box>

      <Collapse in={collapse}>
        <Divider sx={{ margin: 0 }} />
        <CardContent>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isInternalSupplier} onChange={handleCheckboxChange} />}
              variant='body2'
              label='Is Internal Supplier'
            />
            {isInternalSupplier && <TextField label='Represents Company *' variant='outlined' fullWidth />}
          </FormGroup>
        </CardContent>
      </Collapse>
    </Box>
  )
}

export default Internal_Supplier
