// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import { Grid, Box, Button } from '@mui/material'

// ** Components Imports
import CardDetails from 'src/components/Details/CardDetails'
import Btn from 'src/components/Button/Button'
import CardYourShortcut from 'src/components/Menu/CardYourShortcut'
import CardReportMenu from 'src/components/Menu/CardReportMenu'

// ** dummy data
import { homecontent } from 'src/dummy/Homecontent'
import { HomeReport, HomeShortcut } from 'src/dummy/homepage'

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

  // object.values(objectData).map(x => console.log(x))

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
                  detailbutton='Item'
                  bgcolorbutton='secondary.D'
                  handleButtonClick={() =>
                    handleButtonClick(homecontent[0].head, homecontent[0].body, homecontent[0].footer)
                  }
                />
                <Btn
                  numminwid={280}
                  detailbutton=' Create a Customer'
                  bgcolorbutton='secondary.C'
                  handleButtonClick={() =>
                    handleButtonClick(
                      homecontent[1].head,
                      homecontent[1].body,
                      homecontent[1].footer,
                      homecontent[1].footer_1,
                      homecontent[1].footer_2,
                      homecontent[1].footer_3
                    )
                  }
                />
                <Btn
                  numminwid={280}
                  detailbutton='Create Your First Sales Invoice'
                  bgcolorbutton='secondary.D'
                  handleButtonClick={() => handleButtonClick(homecontent[2].head, homecontent[2].body)}
                />
              </React.Fragment>
            }
          />
          <Grid item sm={12} md={12} lg={12}>
            <CardYourShortcut menus={HomeShortcut} />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <React.Fragment>
              <CardReportMenu menus={HomeReport} />\
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
