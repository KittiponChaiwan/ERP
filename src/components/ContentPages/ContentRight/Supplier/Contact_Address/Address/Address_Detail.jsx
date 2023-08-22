// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button_EditAddress from './Button_EditAddress'

const Address_Detail = () => {
  return (
    <Card>
      {/* sx={{ marginBottom: 3.25 }} */}

      <CardContent sx={{ width: '100%' }}>
        <Typography variant='body2'>บริษัท เหล็กกล้าคาร์บอน กำจัด</Typography>
        <Typography variant='body2'>gogothai@gmail.com</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>0976545645</Typography>
        <Typography variant='body2'>1 ซอย ทุ่งเศรษฐี แยก 10 แขวงดอกไม้ เขต ประเวศ กรุงเทพมหานคร 10250</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>แขวงดอกไม้ </Typography>
        <Typography variant='body2'>เขต ประเวศ</Typography>
        <Typography variant='body2'>กรุงเทพมหานคร</Typography>
        <Typography variant='body2'>10250</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>TEST</Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button_EditAddress />
      </CardActions>
    </Card>
  )
}

export default Address_Detail
