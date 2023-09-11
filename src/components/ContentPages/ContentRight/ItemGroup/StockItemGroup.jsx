import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  CardActions,
  IconButton,
  Divider,
  TextareaAutosize,
  Collapse,
  CardContent
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import { useState } from 'react'

//Import Custom Components

const StockItemGroup = ({ dataRow }) => {
  const [IsShowWebsite, setIsShowWebsite] = useState([])
  const [collapseWebsite, setCollapseWebsite] = useState([])
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const columnsGroup = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Company', headerName: 'Company', width: 150 },
    { field: 'DefaultWarehouse', headerName: 'Default Warehouse', width: 300 },
    {
      field: 'DefaultPriceList',
      headerName: 'Default Price List',
      width: 300
    }
  ]

  const rowsGroup = [{ id: 1, Company: 'Sidw', TaxCategory: 'Jon', DefaultWarehouse: 'dasd', DefaultPriceList: 'List' }]

  const columns = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'ItemTaxTemplate', headerName: 'Item Tax Template', width: 150 },
    { field: 'TaxCategory', headerName: 'Tax Category', width: 300 },
    {
      field: 'ValidFrom',
      headerName: 'Valid From',
      width: 300
    },
    { field: 'MinimumNetRate', headerName: 'Minimum Net Rate', width: 300 },
    { field: 'MaximumNetRate', headerName: 'Maximum Net Rate', width: 300 }
  ]

  const rows = [
    {
      id: 1,
      ItemTaxTemplate: 'Sidw',
      TaxCategory: 'Jon',
      ValidFrom: 'dasd',
      MinimumNetRate: 'dsss',
      MaximumNetRate: 'dada'
    }
  ]

  const columnsFields = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Fieldname', headerName: 'Fieldname', width: 150 }
  ]

  const rowsFields = [
    {
      id: 1,
      Fieldname: 'Sidw'
    }
  ]

  const columnsAttr = [
    { field: 'id', headerName: 'No', width: 70 },
    { field: 'Attribute', headerName: 'Attribute', width: 150 }
  ]

  const rowsAttr = [
    {
      id: 1,
      Attribute: 'Sidw'
    }
  ]

  const handleClickWebsite = () => {
    setCollapseWebsite(!collapseWebsite)
  }

  const handleShowWebsite = event => {
    setIsShowWebsite(event.target.checked)
  }

  return (
    <Grid>
      <Box>
        <Box>
          <Typography variant='h6'>General Settings</Typography>
        </Box>
        <Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ margin: 1 }}>Parent Item Group</Typography>
            <TextField size='small' variant='filled' value={dataRow.parent_item_group} />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Checkbox {...label} defaultChecked />
            <Typography sx={{ mt: 2 }}>Is Group</Typography>
          </Box>
          <Box>
            <Typography variant='subtitle2'>Only leaf nodes are allowed in transaction</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Box>
          <Typography variant='h6'>Defaults</Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Item Group Defaults</Typography>
          <DataGrid
            rows={rowsGroup}
            columns={columnsGroup}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          <Button>Add row</Button>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Box>
          <Typography variant='h6'>Item Tax</Typography>
        </Box>
        <Box>
          <Typography variant='subtitle2'>Taxes</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
          <Button>Add row</Button>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={IsShowWebsite} onChange={handleShowWebsite} />}
            variant='body2'
            label='Show in Website'
          />
          <Typography variant='subtitle2'>Make Item Group visible in website</Typography>
          {IsShowWebsite && (
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography sx={{ margin: 1 }}>Route</Typography>
                    <TextField size='small' variant='filled' value={dataRow.route} />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography sx={{ marginBottom: 2 }}>Weightage</Typography>
                    <TextField size='small' variant='filled' label='' value={dataRow.weightage} />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', mt: 4 }}>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Typography sx={{ margin: 1 }}>Title</Typography>
                    <TextField size='small' variant='filled' value={dataRow.website_title} />
                  </Box>
                  <Box sx={{ ml: 30 }}>
                    <Typography sx={{ marginBottom: 2 }}>Slideshow</Typography>
                    <TextField size='small' variant='filled' label='' value={dataRow.slideshow} />
                    <Typography variant='subtitle2'>Show this slideshow at the top of the page</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Checkbox {...label} defaultChecked />
                <Typography variant='subtitle1' sx={{ m: 4 }}>
                  Include Descendants
                </Typography>
              </Box>
              <Box>
                <Typography variant='subtitle2'>Include Website Items belonging to child Item Groups</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button size='small' variant='filled' label='' onClick={handleClickWebsite}>
                  <Typography variant='h6'>Website Filters</Typography>
                </Button>
                <CardActions className='card-action-dense'>
                  <IconButton size='small' onClick={handleClickWebsite}>
                    {collapseWebsite ? (
                      <ChevronUp sx={{ fontSize: '1.875rem' }} />
                    ) : (
                      <ChevronDown sx={{ fontSize: '1.875rem' }} />
                    )}
                  </IconButton>
                </CardActions>
              </Box>
              <Box>
                <Collapse in={collapseWebsite}>
                  <Divider sx={{ margin: 0 }} />
                  <CardContent>
                    <Box sx={{ mt: 6 }}>
                      <Typography>Item Fields</Typography>
                      <DataGrid
                        rows={rowsFields}
                        columns={columnsFields}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                          }
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
                    </Box>
                    <Button>Add Row</Button>
                    <Box sx={{ mt: 10 }}>
                      <Typography>Attributes</Typography>
                      <DataGrid
                        rows={rowsAttr}
                        columns={columnsAttr}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 5 }
                          }
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                      />
                      <Button>Add Row</Button>
                    </Box>
                  </CardContent>
                </Collapse>
              </Box>
            </Box>
          )}
        </FormGroup>
      </Box>
      <Box sx={{ mt: 6 }}>
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

export default StockItemGroup
