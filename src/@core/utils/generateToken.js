import Cookies from 'js-cookie'

const jwt = require('jsonwebtoken')

export const generateToken = payload => {
  // คีย์สำหรับเซ็น JWT (ส่วนตัว)
  const privateKey = `MIICXAIBAAKBgQC4tdn74EkWqpdHg/jcH9aKTzr8X6H8e4JxJzF0RqCgD7VQ08p6
EpdLVdW5Hu1UdJxgOZAbCCWoFjMBE6pXIQg9b2ItKV+ueZOivWT4KtAviKVznbAj
9ChIFdv3TR9W/kuFuegjIge+nfWhUo66SPQ88ctPDxOe5mPApRe/VSpK1wIDAQAB
AoGAY0Uo8FusLEhmoYLl/rgFv7OxSe3Dy0Q96L5dr9Y9gYivs87/pPfU5CIviRx8
BMXfPT/ymPSZ+Gpl4xBEniscl60nfXJ8aHnjigyqt5CdE25nvMphC76lW30imCPU
/h3NAbPUfbZ5ifZnVXbvR3lRDemBu4T/npF83AYAkFhPQyECQQDvzjplw1Z9cLD0
d9Fmj2eFfg/L0CZ6Y8ZSb0JGSgjvF9gDAA3cNv9k4jgBNUltm91iOVtobKC6geyQ
huJnKkSpAkEAxS8iWznhwipUU06aAFPD9d+ophBDt7aui920H1GbFPM6WQd/4Bwh
IDWO6+FPL65vJ34Hi8Qrpc2GUawo56pDfwJBAIXrPnOMFeXxo/CyZQ+IcEB9eObS
NFrPE3b/yRwlxj13rFtokVT0pcW6C5qpHnuGuqha7bAwUcY2Pl0r5o3EbhkCQH8L
VFZ0n6lLPpOCNCT702kqVm3QUuEeGa3SBUiceo/v+mr8Mv7BAPLQryn5O9zbxZAr
Wk9J8FleZyleA+jnQZ8CQAh0By6iZ8TXrrHJ+eRCoslCugWL0Nz/2kBDEY1rNvkA
IogSYY9duUasaUHrWPw/IpXeN7Y/ohg3939qMaH88zk=`

  // สร้าง JWT โดยใช้คีย์ส่วนตัว
  const token = jwt.sign({ data: payload }, privateKey, { expiresIn: '3h' })

  Cookies.set('jwtToken', token, { expiresIn: '3h' })
}
