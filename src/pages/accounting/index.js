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
    <Box m={12} mb={20}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} md={12} lg={12}>
          <CardGuideVue MenuButton={AccountingMenuButton} RightSideContent={AccountingContent} />
          <Grid item sm={12} md={12} lg={12}>
            <CardYourShortcut menus={AccountingYourShortcut} />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <React.Fragment>
              <CardReportMenu menus={AccountingReport} />
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
