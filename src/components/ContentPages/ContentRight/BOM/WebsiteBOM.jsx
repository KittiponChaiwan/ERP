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
  TextareaAutosize,
  IconButton,
  Collapse
} from '@mui/material'
import { useState } from 'react'

//import Icon
import { ChevronDown, ChevronUp } from 'mdi-material-ui'

const WebsiteBOM = ({ getDataRow }) => {
  const [isShowWebsiteCheck, setIsShowWebsiteCheck] = useState(false)
  const [collapsSpacifications, setCollapesSpacifications] = useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleCheckShowWebsite = event => {
    setIsShowWebsiteCheck(event.target.checked)
  }

  const handleCickSpacifications = () => {
    setCollapesSpacifications(!collapsSpacifications)
  }

  const handleCheckboxChange = event => {
    console.log('Checkbox ถูกเปลี่ยนแปลงเป็น:', event.target.checked)
  }

  return (
    <Grid>
      <Box>
        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={isShowWebsiteCheck} onChange={handleCheckShowWebsite} />}
              variant='body2'
              label='Show in Website'
              sx={{ ml: 0.2 }}
            />
            <Box sx={{ mt: 8 }}>
              <Typography>Route</Typography>
              <TextareaAutosize
                style={{ minHeight: '200px', width: '40%' }}
                size='small'
                variant='filled'
                label=''
                value={getDataRow.route}
              />
            </Box>
            {isShowWebsiteCheck && (
              <Box sx={{ width: '70%', mt: 8 }}>
                <Typography>Web site image</Typography>
                <Button>Attach</Button>
                <Typography variant='subtitle2' sx={{ width: '100%' }}>
                  Item Image (if not slideshow)
                </Typography>
                <Box sx={{ mt: 10, display: 'flex' }}>
                  <Button size='small' variant='filled' label='' onClick={handleCickSpacifications}>
                    <Typography variant='h6'>Website Specifications</Typography>
                  </Button>
                  <Box>
                    <CardActions className='card-action-dense'>
                      <IconButton size='small' onClick={handleCickSpacifications}>
                        {collapsSpacifications ? (
                          <ChevronUp sx={{ fontSize: '1.875rem' }} />
                        ) : (
                          <ChevronDown sx={{ fontSize: '1.875rem' }} />
                        )}
                      </IconButton>
                    </CardActions>
                  </Box>
                </Box>
                <Box>
                  <Collapse in={collapsSpacifications}>
                    <Divider sx={{ margin: 0 }} />
                    <CardContent>
                      <Box sx={{ display: 'flex' }}>
                        <Checkbox {...label} checked={getDataRow.show_items} onChange={handleCheckboxChange} />
                        <Typography variant='subtitle2' sx={{ mt: 2 }}>
                          Show Items
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Checkbox {...label} checked={getDataRow.show_operations} onChange={handleCheckboxChange} />
                        <Typography variant='subtitle2' sx={{ mt: 2 }}>
                          Show Operations
                        </Typography>
                      </Box>
                      <Box sx={{ width: '100%' }}>
                        <Typography>Website Description</Typography>
                        <TextareaAutosize
                          style={{ minHeight: '200px', width: '100%' }}
                          size='small'
                          variant='filled'
                          label=''
                          value={getDataRow.web_long_description}
                        />
                      </Box>
                    </CardContent>
                  </Collapse>
                </Box>
              </Box>
            )}
          </FormGroup>
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

export default WebsiteBOM
