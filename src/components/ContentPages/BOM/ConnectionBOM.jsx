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
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  IconButton,
  Collapse,
  Chip
} from '@mui/material'
import { ChevronDown, ChevronUp } from 'mdi-material-ui'
import { useState } from 'react'

const ConnectionsBOM = ({ getDataRow }) => {
  const [collapsConnection, setCollapesConnection] = useState(false)

  const handleChickConnection = () => {
    setCollapesConnection(!collapsConnection)
  }

  return (
    <Grid>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Button size='small' variant='filled' label='' onClick={handleChickConnection}>
            <Typography variant='h6'>Website Specifications</Typography>
          </Button>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleChickConnection}>
                {collapsConnection ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapsConnection}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ width: '33%' }}>
                  <Typography>Stock</Typography>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Item' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Stock Entry' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Quality Inspection' />
                  </Box>
                </Box>
                <Box sx={{ width: '33%' }}>
                  <Typography>Manufacture</Typography>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='BOM' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Work Order' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Job Card' />
                    <Chip label='+' />
                  </Box>
                </Box>
                <Box sx={{ width: '33%' }}>
                  <Typography>Subcontract</Typography>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Purchase Order' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Purchase Receipt' />
                    <Chip label='+' />
                  </Box>
                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Chip label='Purchase Invoice' />
                    <Chip label='+' />
                  </Box>
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
    </Grid>
  )
}

export default ConnectionsBOM
