// ** React Imports
import React from 'react'

// ** MUI Imports
import { Grid, Box } from '@mui/material'

// ** Components Imports
import CardGuideVue from 'src/components/Menu/CardGuideVue'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { HomeMenuButton, HomeContent, HomeReport, HomeShortcut } from 'src/dummy/homepage'

const HomePage = () => {
  return (
    <Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs>
          <CardGuideVue MenuButton={HomeMenuButton} RightSideContent={HomeContent} />
          <Grid item xs>
            <CardYourShortcut menus={HomeShortcut} />
          </Grid>
          <Grid item xs>
            <React.Fragment>
              <CardReportMenu menus={HomeReport} />
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage
