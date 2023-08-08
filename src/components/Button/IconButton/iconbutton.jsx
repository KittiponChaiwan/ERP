import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Icon from '@mdi/react'
import { useTheme } from '@mui/material/styles'

function Iconbtn({ icon }) {
  const theme = useTheme()

  const handleIconButtonClick = () => {
    // ทำอะไรก็ตามที่คุณต้องการเมื่อคลิก IconButton
    console.log('IconButton clicked')
  }

  return (
    <Box>
      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 0.2 }}>
        <button
          style={{
            height: '40px',
            background: theme.palette.secondary.C,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative' // เพื่อให้สามารถกำหนดสีพื้นหลังภายในปุ่ม
          }}
          onClick={handleIconButtonClick}
          onMouseEnter={event => {
            event.currentTarget.querySelector('.hover-background').style.opacity = 1
          }}
          onMouseLeave={event => {
            event.currentTarget.querySelector('.hover-background').style.opacity = 0
          }}
        >
          <Icon path={icon} size={1} />
          <div
            className='hover-background'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)', // สีพื้นหลังที่เมาส์ชี้
              opacity: 0, // เริ่มต้นซ่อนสีพื้นหลัง
              transition: 'opacity 0.3s ease-in-out' // เพื่อทำเอฟเฟคเบลนสี
            }}
          />
        </button>
      </Grid>
    </Box>

    ////////////////////////////////////////////////////////////////////////////////
  )
}

export default Iconbtn
