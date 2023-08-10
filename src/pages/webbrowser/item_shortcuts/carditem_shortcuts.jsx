// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Icon from '@mdi/react'
import { InputLabel, FormControl, Select, MenuItem } from '@mui/material'

// ** Import Table
import { DataGrid } from '@mui/x-data-grid'

// ** Icons Imports

import { mdiAccountBoxOutline } from '@mdi/js'
import { mdiMagnify } from '@mdi/js'

// ** Components
import { useTheme } from '@mui/material/styles'
import Iconbtn from 'src/components/Button/IconButton/iconbutton'
import { useState } from 'react'
import { useEffect } from 'react'

const Carditem_shortcuts = props => {
  // ** Props
  const { toggleNavVisibility } = props

  const theme = useTheme()

  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [dataItem, setDataItem] = useState([])
  const [getRow, setGetRow] = useState('')
  const [filterData, setFilterData] = useState([])

  const columns = [
    { field: 'item_name', headerName: 'Item Name', width: 280 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      renderCell: (
        params //ทั้งหมดมี button edit
      ) => (
        <Button
          sx={{ backgroundColor: 'red' }}
          variant='text'
          onClick={() => {
            setGetRow(params.row)
            console.log(params.row)
          }}
        >
          Enabled
        </Button>
      )
    },
    { field: 'item_group', headerName: 'Item Group', width: 150 },
    { field: 'description', headerName: 'ID', width: 250 }
  ]

  useEffect(() => {
    axios
      .get('http://111.223.38.20/api/resource/Item?fields=["*"]', {
        headers: {
          Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
        }
      })
      .then(res => {
        setDataItem(res.data.data)
        setFilterData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const HandleFilterData = value => {
    const res = filterData.filter(f => f.item_name.includes(value))
    setDataItem(res)
  }

  useEffect(() => {
    console.log(dataItem)
  }, [dataItem])

  // ** Hook

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <div style={{ display: 'flex', height: '100vh' }}>
            <div
              style={{
                width: '40px',
                background: theme.palette.secondary.F,
                color: 'white',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <Box>
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
                <Iconbtn icon={mdiAccountBoxOutline} />
              </Box>
            </div>
          </div>
        </Box>
        <Grid container sx={{ width: '100%' }}>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ bgcolor: 'white' }} variant='h5'>
              Manage Item
            </Typography>
            <Box
              sx={{
                bgcolor: 'beige',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Box>
                <TextField
                  id='standard-basic'
                  label='Standard'
                  variant='standard'
                  onChange={e => HandleFilterData(e.target.value)}
                />
              </Box>
              <Box sx={{ m: 4 }}>
                <Icon path={mdiMagnify} size={1.1} />
              </Box>
            </Box>
            <Box>
              <DataGrid rows={dataItem} columns={columns} getRowId={row => row.name} />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item sx={{ bgcolor: 'orange' }}>
            <Box>
              <Typography variant='h5'>{getRow.item_name}</Typography>
            </Box>

            <Card sx={{ bgcolor: 'white', height: '100vh' }}>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Details' />
                  <Tab value='2' label='Inventory' />
                  <Tab value='3' label='Item Three' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}>Item Name :</Typography>
                        <TextField variant='filled' value={getRow.item_name} />
                      </Box>
                      <Box sx={{ ml: 20 }}>
                        <Typography sx={{ marginBottom: 2 }}>Valuation Rate :</Typography>
                        <TextField variant='filled' label='' value={getRow.valuation_rate} />
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 6 }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}>Item Group :</Typography>
                        <TextField variant='filled' label='' value={getRow.item_group} />
                      </Box>
                      <Box sx={{ ml: 20 }}>
                        <Typography sx={{ marginBottom: 2 }}>Over Delivery/Receipt Allowance (%) :</Typography>
                        <TextField variant='filled' label='' value={getRow.over_delivery_receipt_allowance} />
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 6 }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}>Default Unit of Measure :</Typography>
                        <TextField variant='filled' label='' value={getRow.stock_uom} />
                      </Box>
                      <Box sx={{ ml: 20 }}>
                        <Typography sx={{ marginBottom: 2 }}>Over Billing Allowance (%) :</Typography>
                        <TextField variant='filled' label='' value={getRow.over_billing_allowance} />
                      </Box>
                    </Box>
                    <Box sx={{ mt: 30 }}>
                      <Typography variant='h5'>Descripstion:</Typography>
                      <TextField variant='filled' label='' multiline rows={8} fullWidth value={getRow.description} />
                    </Box>
                  </TabPanel>
                  {/* End Panel 1  */}
                  <TabPanel value='2' sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex' }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}> Shelf Life In Days :</Typography>
                        <TextField variant='filled' label='' value={getRow.shelf_life_in_days} />
                      </Box>
                      <Box sx={{ ml: 20 }}>
                        <Typography sx={{ marginBottom: 2 }}>Warranty Period (in days) :</Typography>
                        <TextField variant='filled' label='' value={getRow.warranty_period} />
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex' }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}>End of Life:</Typography>
                        <TextField variant='filled' label='' value={getRow.end_of_life} />
                      </Box>
                      <Box sx={{ ml: 20 }}>
                        <Typography sx={{ marginBottom: 2 }}>Weight Per Unit:</Typography>
                        <TextField variant='filled' label='' value={getRow.weight_per_unit} />
                      </Box>
                    </Box>
                    <Box sx={{ mt: 6, display: 'flex' }}>
                      <Box>
                        <Typography sx={{ marginBottom: 2 }}>default material request type-label:</Typography>
                        <FormControl variant='outlined' fullWidth sx={{ mb: 2 }}>
                          <InputLabel id='default material request type-label'>
                            default material request type:
                          </InputLabel>
                          <Select
                            required
                            labelId='default material request type-label'
                            id='default material request type'
                            name='default material request type'
                            label='default material request type'
                          >
                            {dataItem.map(row => (
                              <MenuItem
                                key={row.default_material_request_type}
                                value={row.default_material_request_type}
                              >
                                {row.default_material_request_type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{ ml: 14 }}>
                        <Typography sx={{ marginBottom: 2 }}>Weight UOM:</Typography>
                        <TextField variant='filled' label='' value={getRow.weight_uom} />
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
                            {dataItem.map(row => (
                              <MenuItem key={row.valuation_method} value={row.valuation_method}>
                                {row.valuation_method}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value='3' sx={{ p: 0 }}>
                    <Typography variant='h6' sx={{ marginBottom: 2 }}>
                      Header Three
                    </Typography>
                    <Typography variant='body2' sx={{ marginBottom: 4 }}>
                      Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate
                      bar jujubes gummi bears lollipop.
                    </Typography>
                    <Button variant='contained'>Button Three</Button>
                  </TabPanel>
                </CardContent>
              </TabContext>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Carditem_shortcuts
