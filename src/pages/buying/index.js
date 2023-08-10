// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import { Grid, Box, Button } from '@mui/material'

// ** Components Imports
import CardDetails from 'src/components/Details/CardDetails'
import Btn from 'src/components/Button/Button'
import CardShortcuts from 'src/components/Shortcuts/Home_Detail_Shortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'

// ** dummy data
import { homecontent } from 'src/dummy/Homecontent'
import { BuyingYourShortcut, BuyingReport } from 'src/dummy/buying'

const CardSupport = () => {
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleOnClick = () => {}

  const [showCard, setShowCard] = useState(false)
  const [showcardhead, setShowCardHead] = useState('')
  const [showcardbody, setShowCardBody] = useState('')
  const [showcardfooter, setShowCardFooter] = useState('')
  const [showcardfooter_1, setShowCardFooter_1] = useState('')
  const [showcardfooter_2, setShowCardFooter_2] = useState('')
  const [showcardfooter_3, setShowCardFooter_3] = useState('')

  const handleButtonClick = (head, body, footer, footer_1, footer_2, footer_3) => {
    setShowCardHead(head)
    setShowCardBody(body)
    setShowCardFooter(footer)
    setShowCardFooter_1(footer_1)
    setShowCardFooter_2(footer_2)
    setShowCardFooter_3(footer_3)
    setShowCard(true)
  }

  return (
    <Box m={12} mb={20}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} md={12} lg={12}>
          <CardDetails
            head={showcardhead}
            body={showcardbody}
            footer={showcardfooter}
            footer_1={showcardfooter_1}
            footer_2={showcardfooter_2}
            footer_3={showcardfooter_3}
            showCard={showCard}
            DetailsName={` Let's begin your journey with ERPNext`}
            Details={'Item, Customer, Supplier and Quotation'}
            Content={
              <React.Fragment>
                <Btn
                  numminwid={280}
                  detailbutton=' Buying Settings'
                  bgcolorbutton='secondary.E'
                  handleButtonClick={() =>
                    handleButtonClick(
                      homecontent[10].head,
                      homecontent[10].body,
                      homecontent[10].footer,
                      homecontent[10].footer_1,
                      homecontent[10].footer_2
                    )
                  }
                />

                <Btn
                  numminwid={280}
                  detailbutton=' Create a Customer'
                  bgcolorbutton='secondary.F'
                  handleButtonClick={() => handleButtonClick(homecontent[11].head, homecontent[11].body)}
                />
                <Btn
                  numminwid={280}
                  detailbutton='Create first Purchase Order'
                  bgcolorbutton='secondary.G'
                  handleButtonClick={() => handleButtonClick(homecontent[12].head, homecontent[12].body)}
                />
              </React.Fragment>
            }
          />

          <Grid item sm={12} md={12} lg={12}>
            <CardYourShortcut menus={BuyingYourShortcut} />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <CardReportMenu menus={BuyingReport} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
