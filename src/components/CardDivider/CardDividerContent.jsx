// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Grid, Divider, Button, Box } from '@mui/material'
import DrawerSidebar from '../ContentPages/DrawerSidebar'

function CardDividerContent({ contentLeft, contentRight, selectRowState }) {
  // initial state
  const contentSizeInit = {
    left: 5,
    right: 6
  }

  // state
  const [contentState, setContentState] = useState(false)
  const [contentSize, setContentSize] = useState(contentSizeInit)
  const [openContent, setOpenContent] = useState(selectRowState)

  useEffect(() => {
    console.log('selectRowState: ', selectRowState)
    setOpenContent(selectRowState)
  }, [selectRowState])

  const handleContentSize = () => {
    if (contentState) {
      setContentSize(contentSizeInit)
      setContentState(false)
    } else {
      setContentSize({
        left: 6,
        right: 5
      })
      setContentState(true)
    }
  }

  return openContent ? (
    <Box sx={{ margin: '1.5rem' }}>
      <DrawerSidebar />
      <Grid container>
        <Grid item xs={contentSize.left}>
          {contentLeft}
        </Grid>
        <Divider orientation='vertical' flexItem>
          <Button onClick={() => handleContentSize()}> test </Button>
        </Divider>
        <Grid item xs={contentSize.right}>
          {contentRight}
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box sx={{ margin: '1.5rem' }}>
      <DrawerSidebar />
      {contentLeft}
    </Box>
  )
}

export default CardDividerContent
