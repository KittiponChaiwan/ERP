// ** React Imports
import React, { useState } from 'react'
import Box from '@material/Box'

// ** components Imports
import CardDividerContent from 'src/components/CardDivider/CardDividerContent'

// ** MUI Imports

const CompanyPage = () => {
  return (
    <Box>
      <CardDividerContent
        contentLeft={
          'loEa esse magna Lorem eiusmod nisi non consectetur minim consectetur. Do in elit amet nostrud ex deserunt eu. Et adipisicing id anim irure minim do.'
        }
        contentRight={
          'Reprehenderit Lorem officia fugiat sunt pariatur culpa minim aliquip dolore in est. Ullamco Lorem excepteur incididunt proident proident consectetur proident officia cillum pariatur consequat elit culpa magna. Elit nulla ea esse aliqua do nostrud ex esse cupidatat culpa velit velit veniam. Eiusmod aute aute cillum id qui aliquip deserunt minim incididunt exercitation minim dolore.'
        }
      />
    </Box>
  )
}

export default CompanyPage
