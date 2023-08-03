// ** MUI Imports
import Typography from '@mui/material/Typography'
import { Grid, Box } from '@mui/material'

// ** Icons Imports
import { mdiFolderOpenOutline } from '@mdi/js'

// ** Components Imports
import CardMenu from 'src/components/CardMenu'

import { OnHover, Visible } from 'src/components/Motion'
import React from 'react'

const CardSupport = () => {
  const handleClickOpen = () => {
    setOpen(true)
  }

  return (
    <Box m={12} mb={20}>
      {/* --------------------------------------Grid ใหญ่------------------------------------------ */}
      <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
        {/* -------------------------------- Grid ลูกที่ 1---------------------------------------------------- */}
        <Grid item sm={12} md={5} lg={3.5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Visible>
            <OnHover>
              <CardMenu
                handleClick={() => router.push('/pages/masterdata/curriculums')}
                MenuIcon={mdiFolderOpenOutline}
                MenuName={'Master Data'}
              />
            </OnHover>
          </Visible>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
