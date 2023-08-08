import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Btn from '../../Button/Button'
import { OnHover, Visible } from 'src/components/Motion'
import CardMenu from 'src/components/Menu/CardMenu'
import { useRouter } from 'next/router'

function CardShowAccounting({
  Title,
  MenuName_1,
  MenuName_2,
  MenuName_3,
  MenuName_4,
  MenuName_5,
  MenuIcon_1,
  MenuIcon_2,
  MenuIcon_3,
  MenuIcon_4,
  MenuIcon_5
}) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Typography variant='body1' fontWeight={'bold'} sx={{ mt: 15, mb: 2 }}>
            {Title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        {/* -------------------------------- Grid ลูกที่ 1 ---------------------------------------------------- */}
        {MenuName_1 && (
          <Grid item>
            <Visible>
              <OnHover>
                <CardMenu
                  handleClick={() => router.push('/webbrowser/item_shortcuts')}
                  MenuIcon={MenuIcon_1}
                  MenuName={MenuName_1}
                />
              </OnHover>
            </Visible>
          </Grid>
        )}

        {/* -------------------------------- Grid ลูกที่ 2 ---------------------------------------------------- */}
        {MenuName_2 && (
          <Grid item>
            <Visible>
              <OnHover>
                <CardMenu
                  handleClick={() => router.push('/pages/masterdata/curriculums')}
                  MenuIcon={MenuIcon_2}
                  MenuName={MenuName_2}
                />
              </OnHover>
            </Visible>
          </Grid>
        )}

        {/* -------------------------------- Grid ลูกที่ 3 ---------------------------------------------------- */}
        {MenuName_3 && (
          <Grid item>
            <Visible>
              <OnHover>
                <CardMenu
                  handleClick={() => router.push('/pages/masterdata/curriculums')}
                  MenuIcon={MenuIcon_3}
                  MenuName={MenuName_3}
                />
              </OnHover>
            </Visible>
          </Grid>
        )}

        {/* -------------------------------- Grid ลูกที่ 4 ---------------------------------------------------- */}
        {MenuName_4 && (
          <Grid item>
            <Visible>
              <OnHover>
                <CardMenu
                  handleClick={() => router.push('/pages/masterdata/curriculums')}
                  MenuIcon={MenuIcon_4}
                  MenuName={MenuName_4}
                />
              </OnHover>
            </Visible>
          </Grid>
        )}

        {/* -------------------------------- Grid ลูกที่ 5 ---------------------------------------------------- */}
        {MenuName_5 && (
          <Grid item>
            <Visible>
              <OnHover>
                <CardMenu
                  handleClick={() => router.push('/pages/masterdata/curriculums')}
                  MenuIcon={MenuIcon_5}
                  MenuName={MenuName_5}
                />
              </OnHover>
            </Visible>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default CardShowAccounting
