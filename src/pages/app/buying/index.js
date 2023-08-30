// ** React Imports
import React from 'react'

// ** MUI Imports
import { Grid, Box } from '@mui/material'

// ** Components Imports
import CardGuideVue from 'src/components/Menu/CardGuideVue'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { BuyingMenuButton, BuyingContent, BuyingYourShortcut, BuyingReport } from 'src/dummy/buying'

const CardSupport = () => {
  return (
    <Box>
      <Grid container rowSpacing={5}>
        <Grid item sm={12}>
          <CardGuideVue MenuButton={BuyingMenuButton} RightSideContent={BuyingContent} />
        </Grid>
        <Grid item sm={12}>
          <CardYourShortcut menus={BuyingYourShortcut} />
        </Grid>
        <Grid item sm={12}>
          <CardReportMenu menus={BuyingReport} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
