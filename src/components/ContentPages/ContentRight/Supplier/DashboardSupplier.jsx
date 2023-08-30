// ** React Import
import React from 'react'

// ** Mui Import
import {
  TextareaAutosize,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  CardContent,
  IconButton,
  Collapse,
  Divider
} from '@mui/material'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { useState } from 'react'

const Dashboard_sup = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  // ** State
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Grid>
      <Grid container sx={{ mt: 10 }}>
        <Grid>
          <Box>
            <Box sx={{ width: '100%' }}>
              <Button size='small' variant='filled' label='' onClick={handleClick}>
                Activity
              </Button>
              <IconButton size='small' onClick={handleClick}>
                {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
              </IconButton>
            </Box>

            <Collapse in={collapse}>
              <Divider sx={{ margin: 0 }} />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={6} md={6} lg={6} sx={{ mr: 5 }}>
                    <Grid item sx={{ width: '100%' }}>
                      <Typography sx={{ marginBottom: 2 }}>Supplier Details</Typography>
                      <TextareaAutosize style={{ minHeight: '200px', width: '100%', maxWidth: 270, minWidth: 270 }} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid>
                      <Typography sx={{ marginBottom: 2 }}>Supplier Group * </Typography>
                      <TextField size='small' variant='filled' label='' value={''} />
                    </Grid>
                    <Grid>
                      <Typography sx={{ marginBottom: 2 }}>Country </Typography>
                      <TextField size='small' variant='filled' label='' value={''} />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <Box>
            <Box sx={{ width: '100%' }}>
              <Button size='small' variant='filled' label='' onClick={handleClick}>
                Connections
              </Button>
              <IconButton size='small' onClick={handleClick}>
                {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
              </IconButton>
            </Box>

            <Collapse in={collapse}>
              <Divider sx={{ margin: 0 }} />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={6} md={6} lg={6} sx={{ mr: 5 }}>
                    <Grid item sx={{ width: '100%' }}>
                      <Typography sx={{ marginBottom: 2 }}>Supplier Details</Typography>
                      <TextareaAutosize style={{ minHeight: '200px', width: '100%', maxWidth: 270, minWidth: 270 }} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid>
                      <Typography sx={{ marginBottom: 2 }}>Supplier Group * </Typography>
                      <TextField size='small' variant='filled' label='' value={''} />
                    </Grid>
                    <Grid>
                      <Typography sx={{ marginBottom: 2 }}>Country </Typography>
                      <TextField size='small' variant='filled' label='' value={''} />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 5 }}>
        <Typography variant=''>Add a comment:</Typography>
        <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
      </Grid>
    </Grid>
  )
}

export default Dashboard_sup
