// ** React Imports
import React from 'react'

// ** MUI Imports
import { Grid, Box } from '@mui/material'

// ** Components Imports
import CardGuideVue from 'src/components/Menu/CardGuideVue'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { AccountingMenuButton, AccountingContent, AccountingYourShortcut, AccountingReport } from 'src/dummy/accounting'

const CardSupport = () => {
  return (
    <Box>
      <Grid container rowSpacing={5}>
        <Grid item sm={12}>
          <CardGuideVue MenuButton={AccountingMenuButton} RightSideContent={AccountingContent} />
        </Grid>
        <Grid item sm={12}>
          <CardYourShortcut menus={AccountingYourShortcut} />
        </Grid>
        <Grid item sm={12}>
          <CardReportMenu menus={AccountingReport} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
