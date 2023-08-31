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
    <Box>
      <Grid container rowSpacing={5}>
        <Grid item sm={12}>
          <CardGuideVue MenuButton={SellingMenuButton} RightSideContent={SellingContent} />
        </Grid>
        <Grid item sm={12}>
          <CardYourShortcut menus={SellingShortcut} />
        </Grid>
        <Grid item sm={12}>
          <CardReportMenu menus={SellingReport} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
