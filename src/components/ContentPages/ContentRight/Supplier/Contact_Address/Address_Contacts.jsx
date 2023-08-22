// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { Grid } from '@mui/material'
import Address_Detail from './Address/Address_Detail'
import Contact_Detail from './Contact/Contact_Detail'
import Primary_Address_Contact from './Primary_Address_Contact/Primary_Address_Contact'

const Address_Contacts = () => {
  return (
    <Grid>
      <CardHeader title='Address and Contacts' />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item>
            <Address_Detail />
          </Grid>
          <Grid item>
            <Contact_Detail />
          </Grid>
        </Grid>
        <CardHeader title='Primary Address and Contact' />
        <Grid>
          <Primary_Address_Contact />
        </Grid>
      </CardContent>
      <CardActions className='card-action-dense'></CardActions>
    </Grid>
  )
}

export default Address_Contacts
