// ** React Import
import React from 'react'

// ** Mui Import
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  Collapse,
  IconButton,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextareaAutosize
} from '@mui/material'
import { useState } from 'react'
import DorpdownButton from 'src/components/Button/Dorpdown_Text/Dorpdown_text'

// ** Mdi Import
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const DetailSupplier = ({ getDataRow }) => {
  const [age, setAge] = useState('')

  // ** State
  const [internalSupplier, setInternalSupplier] = useState(false)
  const [moreInformation, setMoreInformation] = useState(false)

  const [isInternalSupplier, setIsInternalSupplier] = useState(false) // New state for checkbox

  const handleClickInternalSupplier = () => {
    setInternalSupplier(!internalSupplier)
  }

  const handleClickMoreInformation = () => {
    setMoreInformation(!moreInformation)
  }

  const handleCheckboxChange = event => {
    setIsInternalSupplier(event.target.checked)
  }

  return (
    <Grid>
      {/* ////////////////////////////////////// แถวที่ 1 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={7.7} lg={6}>
          <Grid>
            <Typography sx={{ margin: 1 }}>Supplier Name * :</Typography>
            <TextField size='small' variant='filled' value={getDataRow.supplier_name} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Country :</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.country} />
          </Grid>
        </Grid>
        <Grid item>
          {/* ////////////// ไม่ได้ใส่ขนาดของ GRID เพราะจำทำให้ DORPDOWN -ขนาดไม่เท่า TEXT////////////////// */}
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Supplier Group * :</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.supplier_group} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Pupplier Type :</Typography>
            <DorpdownButton />
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ mt: 10 }}>
        <Typography>Defaults</Typography>
      </Grid>

      {/* ////////////////////////////////////// แถวที่ 2 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={7.7} lg={6}>
          <Grid>
            <Typography sx={{ margin: 1 }}>Billing Currency </Typography>
            <TextField size='small' variant='filled' value={getDataRow.supplier_name} />
          </Grid>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Default Company Bank Account</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.country} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <Typography sx={{ marginBottom: 2 }}>Price List</Typography>
            <TextField size='small' variant='filled' label='' value={getDataRow.supplier_group} />
          </Grid>
        </Grid>
      </Grid>
      {/* ////////////////////////////////////// แถวที่ 3 ///////////////////////////////////////////// */}
      <Grid container sx={{ mt: 10 }}>
        <Grid>
          <Box>
            <Box sx={{ width: '100%' }}>
              <Button size='small' variant='filled' label='' onClick={handleClickInternalSupplier}>
                Internal Supplier
              </Button>
              <IconButton size='small' onClick={handleClickInternalSupplier}>
                {internalSupplier ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </Box>

            <Collapse in={internalSupplier}>
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
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <Box>
            <Box sx={{ width: '100%' }}>
              <Button size='small' variant='filled' label='' onClick={handleClickMoreInformation}>
                More Information
              </Button>
              <IconButton size='small' onClick={handleClickMoreInformation}>
                {moreInformation ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </Box>

            <Collapse in={moreInformation}>
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
                      <Typography sx={{ marginBottom: 2 }}>Website </Typography>
                      <TextField size='small' variant='filled' label='' value={''} />
                    </Grid>
                    <Grid>
                      <Typography sx={{ marginBottom: 2 }}>Print Language </Typography>
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

export default DetailSupplier
