// ** React Imports
import React from 'react'

// ** MUI Imports
import { Grid, Box } from '@mui/material'

// ** Components Imports
import CardGuideVue from 'src/components/Menu/CardGuideVue'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { ManufacturingShortcut, ManufacturingReport } from 'src/dummy/manufacturing'

const ManufacturingPage = () => {
  return (
    <Box>
      <Grid container rowSpacing={5}>
        <Grid item sm={12}>
          {/* <CardGuideVue MenuButton={StockMenuButton} RightSideContent={StockContent} /> */}
        </Grid>
        <Grid item sm={12}>
          <CardYourShortcut menus={ManufacturingShortcut} />
        </Grid>
        <Grid item sm={12}>
          <CardReportMenu menus={ManufacturingReport} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ManufacturingPage
