// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import { Grid, Divider, Button } from '@mui/material'

const CompanyPage = () => {
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
      <Grid item xs={contentSize.left}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis
        ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
      </Grid>
      <Divider orientation='vertical' flexItem>
        <Button onClick={() => handleContentSize()}>test</Button>
      </Divider>
      <Grid item xs={contentSize.right}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis
        ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
      </Grid>
    </Grid>
  )
}

export default CompanyPage
