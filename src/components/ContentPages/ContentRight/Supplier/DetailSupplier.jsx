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
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Supplier Name * :</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={getDataRow.supplier_name}
          />
          <Typography>Country :</Typography>
          <TextField size='small' variant='filled' fullWidth label='' value={getDataRow.country} />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Supplier Group * :</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            label=''
            value={getDataRow.supplier_group}
          />
          <Typography>Pupplier Type :</Typography>
          <DorpdownButton />
        </Grid>
      </Grid>
      <Box sx={{ mt: 10 }}>
        <Typography>Defaults</Typography>
      </Box>
      {/* ////////////////////////////////////// แถวที่ 2 ///////////////////////////////////////////// */}
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Billing Currency </Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={getDataRow.supplier_name}
          />
          <Typography>Default Company Bank Account</Typography>
          <TextField sx={{ marginBottom: 5 }} size='small' variant='filled' fullWidth value={getDataRow.country} />
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          <Typography>Price List</Typography>
          <TextField
            sx={{ marginBottom: 5 }}
            size='small'
            variant='filled'
            fullWidth
            value={getDataRow.supplier_group}
          />
        </Grid>
      </Grid>
      {/* ////////////////////////////////////// แถวที่ 3 ///////////////////////////////////////////// */}
      <Grid container sx={{ mt: 10 }}>
        <Box sx={{ width: '100%' }}>
          <Button size='small' variant='filled' onClick={handleClickInternalSupplier}>
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
              {isInternalSupplier && <TextField label='Represents Company *' variant='outlined' />}
            </FormGroup>
          </CardContent>
        </Collapse>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Box sx={{ width: '100%' }}>
          <Button size='small' variant='filled' onClick={handleClickMoreInformation}>
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
              <Grid item sm={12} md={12} lg={12} sx={{ mr: 5 }}>
                <Typography sx={{ marginBottom: 2 }}>Supplier Details</Typography>
                <TextareaAutosize style={{ minHeight: '200px', width: '100%', maxWidth: 270, minWidth: 270 }} />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Typography>Website </Typography>
                <TextField sx={{ marginBottom: 5 }} fullWidth size='small' variant='filled' label='' value={''} />
                <Typography>Print Language </Typography>
                <TextField sx={{ marginBottom: 5 }} fullWidth size='small' variant='filled' label='' value={''} />
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Grid>
      <Typography variant=''>Add a comment:</Typography>
      <TextField size='small' variant='filled' label='' multiline rows={8} fullWidth value={getDataRow.description} />
    </Grid>
  )
}

export default DetailSupplier
