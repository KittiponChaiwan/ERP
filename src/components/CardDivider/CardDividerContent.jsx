// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import { Grid, Divider, Button } from '@mui/material'
import Dawer_item from 'src/pages/app/leaderboard_shortcuts/dawer_item'

function CardDividerContent({ contentLeft, contentRight }) {
  // initial state
  const contentSizeInit = {
    left: 4,
    right: 6
  }

  // state
  const [contentState, setContentState] = useState(false)
  const [contentSize, setContentSize] = useState(contentSizeInit)

  const handleContentSize = () => {
    if (contentState) {
      setContentSize(contentSizeInit)
      setContentState(false)
    } else {
      setContentSize({
        left: 6,
        right: 4
      })
      setContentState(true)
    }
  }

  return (
    <Grid container>
      <Dawer_item />
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
  )
}

export default CardDividerContent
