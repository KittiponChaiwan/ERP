// ** React Imports
import React from 'react'

// ** Mui Components
import { Grid, Divider } from '@mui/material'

function CardDividerContent() {
  return (
    <Grid container>
      <Grid item xs>
        {content}
      </Grid>
      <Divider orientation='vertical' flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
        {content}
      </Grid>
    </Grid>
  )
}

export default CardDividerContent
