// ** MUI Imports
import { Grid, Box, Button } from '@mui/material'
import React, { useState } from 'react'

// ** Components Imports
import CardDetails from 'src/components/Details/CardDetails'
import Btn from 'src/components/Button/Button'

import { homecontent } from 'src/dummy/Homecontent'
import CardShortcuts from 'src/components/Shortcuts/Accounting_Detail_Shortcut'
import CardReports_Masters_1 from 'src/components/Reports&Masters/Details_Reports&Masters/Home_Details_Reports_Masters'

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
        <Grid item sm={12} md={12} lg={12} sx={{ minWidth: 300 }}>
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
                {/* ////////////////////// 1 ///////////////////////////// */}

                <Btn
                  numminwid={280}
                  detailbutton=' Review Chart of Accounts'
                  bgcolorbutton='secondary.G'
                  handleButtonClick={() => handleButtonClick(homecontent[3].head, homecontent[3].body)}
                />
                {/* ////////////////////// 2 ///////////////////////////// */}

                <Btn
                  numminwid={280}
                  detailbutton=' Setting up Taxes'
                  bgcolorbutton='secondary.E'
                  handleButtonClick={() => handleButtonClick(homecontent[4].head, homecontent[4].body)}
                />

                {/* ////////////////////// 3 ///////////////////////////// */}

                <Btn
                  numminwid={280}
                  detailbutton='Accounts Settings'
                  bgcolorbutton='secondary.G'
                  handleButtonClick={() =>
                    handleButtonClick(
                      homecontent[5].head,
                      homecontent[5].body,
                      homecontent[5].footer,
                      homecontent[5].footer_1,
                      homecontent[5].footer_2,
                      homecontent[5].footer_3
                    )
                  }
                />

                {/* ////////////////////// 4 ///////////////////////////// */}
                <Btn
                  numminwid={280}
                  detailbutton='Cost Centers for Budgeting and Analysis'
                  bgcolorbutton='secondary.E'
                  handleButtonClick={() =>
                    handleButtonClick(homecontent[6].head, homecontent[6].body, homecontent[6].footer)
                  }
                />

                {/* ////////////////////// 5 ///////////////////////////// */}
                <Btn
                  numminwid={280}
                  detailbutton='Create Your First Purchase Invoice'
                  bgcolorbutton='secondary.G'
                  handleButtonClick={() =>
                    handleButtonClick(homecontent[7].head, homecontent[7].body, homecontent[7].footer)
                  }
                />
                {/* ////////////////////// 6 ///////////////////////////// */}
                <Btn
                  numminwid={280}
                  detailbutton='Updating Opening Balances'
                  bgcolorbutton='secondary.E'
                  handleButtonClick={() => handleButtonClick(homecontent[8].head, homecontent[8].body)}
                />
                {/* ////////////////////// 7 ///////////////////////////// */}
                <Btn
                  numminwid={280}
                  detailbutton='Financial Statements'
                  bgcolorbutton='secondary.G'
                  handleButtonClick={() => handleButtonClick(homecontent[9].head, homecontent[9].body)}
                />
              </React.Fragment>
            }
          />

          <Grid item sm={12} md={12} lg={12}>
            <CardShortcuts
              CardShortcutsName={`Your Shortcuts`}
              Content={
                <React.Fragment>
                  <Btn />
                </React.Fragment>
              }
            />
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <CardReports_Masters_1 Reports_MastersName_1={'Reports & Masters'} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardSupport
