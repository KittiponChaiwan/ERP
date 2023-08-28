// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button_EditContact from './Button_EditContact'

const Contact_Detail = () => {
  return (
    <Card>
      {/* sx={{ marginBottom: 3.25 }} */}

      <CardContent sx={{ width: '100%' }}>
        <Typography variant='body2'>บริษัท เหล็กกล้าคาร์บอน กำจัด</Typography>
        <Typography variant='body2'>gogothai@gmail.com</Typography>
        <Typography variant='body2'>TEST</Typography>
        <Typography variant='body2'>0976545645</Typography>
        <Typography variant='body2'>1 ซอย ทุ่งเศรษฐี แยก 10 แขวงดอกไม้ เขต ประเวศ กรุงเทพมหานคร 10250</Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button_EditContact />
      </CardActions>
    </Card>
  )
}

export default Contact_Detail
