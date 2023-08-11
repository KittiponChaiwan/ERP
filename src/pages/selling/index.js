// ** React Imports
import React from 'react'

// ** MUI Imports
import { Grid, Box } from '@mui/material'

// ** Components Imports
import CardGuideVue from 'src/components/Menu/CardGuideVue'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { SellingMenuButton, SellingContent, SellingShortcut, SellingReport } from 'src/dummy/selling'

const CardSupport = () => {
  return (
    <Box m={12} mb={20}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} md={12} lg={12}>
          <CardGuideVue MenuButton={SellingMenuButton} RightSideContent={SellingContent} />
          <Grid item sm={12} md={12} lg={12}>
            <CardYourShortcut menus={SellingShortcut} />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <CardReportMenu menus={SellingReport} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
