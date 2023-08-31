// ** React Imports
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import { Box, Button, Card, Divider, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material'
import { TabPanel, TabContext } from '@mui/lab' // Import TabContext

// ** Axios Imports
import axios from 'axios'

// ** Icons Imports
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import CloseIcon from '@mui/icons-material/Close'

// ** Custom Components
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'
import CardContentLeft from 'src/components/ContentPages/CardContentLeft'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

// ** Dummy Data
import { defaultMaterialRequestType, valuationMethod, ItemContentMenu } from 'src/dummy/contentPages/itemPage'
import ContentLeft from 'src/views/sub-pages/ContentLeft'

const SubPages = ({ data, menuContent, showContent, dataRow, setDataRow }) => {
  const contentSizeInit = 7

  // ** States
  const [contentSize, setContentSize] = useState(contentSizeInit)
  const [screenMD, setScreenMD] = useState(false)
  const [screenMDSelect, setScreenMDSelect] = useState(false)
  const [sideContentOpen, setSideContentOpen] = useState(false)
  const [tabValue, setTabValue] = useState(1)
  const [buttonArrow, setButtonArrow] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        // กำหนดขนาดหน้าจอที่ต้องการให้แสดงเนื้อหาแท็บ
        setScreenMD(true)
        setContentSize(12)
        setButtonArrow(true)
      } else {
        setScreenMD(false)
        setContentSize(contentSizeInit)
      }
    }

    handleResize() // เรียกใช้งานฟังก์ชันครั้งแรกเพื่อตั้งค่าเริ่มต้น

    window.addEventListener('resize', handleResize) // เพิ่มตัวดักการเปลี่ยนขนาดหน้าจอ

    return () => {
      window.removeEventListener('resize', handleResize) // ลบตัวดักเมื่อ component ถูก unmount
    }
  }, [])

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleContentSizeChange = () => {
    if (sideContentOpen === true && contentSize === 7) {
      setContentSize(4)
    } else {
      setContentSize(7)
    }

    setButtonArrow(!buttonArrow)
  }

  const handleRowClick = params => {
    setDataRow(params)
    setSideContentOpen(true)
    setScreenMDSelect(true)
  }

  const handleContentClose = () => {
    if (screenMD) {
      setContentSize(contentSizeInit)
    } else {
      setSideContentOpen(false)
      setContentSize(contentSizeInit)
    }
    setScreenMDSelect(false)
  }

  if (!data) {
    return <Box>Loading...</Box>
  }

  return (
    <Box>
      <Grid container justifyContent='center' columnSpacing={4}>
        {(!screenMD || !screenMDSelect) && (
          <Grid item xs>
            <ContentLeft dataRow={data} handleRowClick={handleRowClick} />
          </Grid>
        )}

        {sideContentOpen && (
          <>
            {!screenMD && (
              <Divider orientation='vertical' flexItem>
                <IconButton aria-label='delete' onClick={() => handleContentSizeChange()}>
                  {buttonArrow ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                </IconButton>
              </Divider>
            )}

            {(screenMDSelect || !screenMD) && (
              <Grid item xs md={contentSize} sx={{ p: 6, ml: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box
                    sx={{
                      flexDirection: 'row',
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2
                    }}
                  >
                    <Box>
                      <Typography variant='h6' sx={{ fontWeight: 'bold', display: 'flex', alignSelf: 'center' }}>
                        {dataRow.name}
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton
                        color='error'
                        sx={{ mr: 1, display: 'flex', alignItems: 'center' }}
                        onClick={handleContentClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Card>
                    <TabContext value={tabValue}>
                      <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        variant='scrollable'
                        scrollButtons
                        allowScrollButtonsMobile
                      >
                        {menuContent?.map(item => (
                          <Tab value={item.id} label={item.name} key={item.id} />
                        ))}
                      </Tabs>
                      {showContent.map((item, index) => (
                        <TabPanel value={index + 1} key={index}>
                          {item}
                        </TabPanel>
                      ))}
                    </TabContext>
                  </Card>
                </Box>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Box>
  )
}

export default SubPages
