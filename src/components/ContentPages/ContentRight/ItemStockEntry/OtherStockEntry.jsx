import {
  Box,
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Collapse,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'

//Import Icon
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const OtherStockEntry = ({ dataRow }) => {
  const [collapsePrinting, setCollapsePrinting] = useState(false)
  const [collapseInformation, setCollapseInformation] = useState(false)

  const handleClickPrinting = () => {
    setCollapsePrinting(!collapsePrinting)
  }

  const handleClickInformation = () => {
    setCollapseInformation(!collapseInformation)
  }

  return (
    <Grid>
      <Box sx={{ width: 1080 }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex' }}>
            <Button size='small' variant='filled' label='' onClick={handleClickPrinting}>
              <Typography variant='h6'>Printing Settings</Typography>
            </Button>
          </Box>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleClickPrinting}>
                {collapsePrinting ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapsePrinting}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box>
                <Typography sx={{ margin: 1 }}>Print Heading</Typography>
                <TextField size='small' variant='filled' value={dataRow.select_print_heading} />
              </Box>
            </CardContent>
          </Collapse>
        </Box>
        {/* End Collapse Printing Settings */}
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex' }}>
            <Button size='small' variant='filled' label='' onClick={handleClickInformation}>
              <Typography variant='h6'>More Information</Typography>
            </Button>
          </Box>
          <Box>
            <CardActions className='card-action-dense'>
              <IconButton size='small' onClick={handleClickInformation}>
                {collapseInformation ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box>
          <Collapse in={collapseInformation}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <Typography sx={{ margin: 1 }}>Is Opening</Typography>
                  <TextField size='small' variant='filled' value={dataRow.is_opening} />
                </Box>
                <Box sx={{ ml: 38 }}>
                  <Typography sx={{ margin: 1 }}>Per Transferred</Typography>
                  <TextField size='small' variant='filled' value={dataRow.per_transferred} />
                </Box>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', mt: 4 }}>
                <Box sx={{ width: '38%' }}></Box>
                <Box sx={{ width: '62%' }}>
                  <Typography sx={{ margin: 1 }}>Total Amount</Typography>
                  <TextField size='small' variant='filled' value={dataRow.total_amount} />
                </Box>
              </Box>
            </CardContent>
          </Collapse>
        </Box>
      </Box>
      <Box>
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

export default OtherStockEntry
