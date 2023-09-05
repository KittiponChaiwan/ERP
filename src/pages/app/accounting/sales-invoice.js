// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType } from 'src/dummy/contentPages/itemPage'

// ** Custom Components
import DetailItem from 'src/components/SubPages/DetailItem'
import DashboardItem from 'src/components/SubPages/DashboardItem'
import InventoryItem from 'src/components/SubPages/InventoryItem'
import AccountingItem from 'src/components/SubPages/AccountingItem'
import PurchasingItem from 'src/components/SubPages/PurchasingItem'
import SalesItem from 'src/components/SubPages/SalesItem'
import TexItem from 'src/components/SubPages/TexItem'
import QualityItem from 'src/components/SubPages/QualityItem'
import ManufacturingItem from 'src/components/SubPages/ManufacturingItem'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'
import DetailSalesInvoice from 'src/components/ContentPages/ContentRight/SalesInvoice/DetailSalesInvoice'

const SalesInvoice = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [
    <DetailSalesInvoice key='detail' dataRow={dataRow} />,
    <DashboardItem key='dashboard' />,
    <InventoryItem key='inventory' dataRow={dataRow} dropDowns={defaultMaterialRequestType} />,
    <AccountingItem key='accounting' />,
    <PurchasingItem key='purchasing' />,
    <SalesItem key='sales' />,
    <TexItem key='tex' />,
    <QualityItem key='quality' />,
    <ManufacturingItem key='manufacturing' />
  ]

  return (
    <SubPages
      data={data}
      menuContent={ItemContentMenu}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

SalesInvoice.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Sales%20Invoice?fields=["*"]`, {
    headers: {
      Authorization: 'token 5891d01ccc2961e:0e446b332dc22aa'
    }
  })
  const data = res.data.data

  return {
    props: { data: data }
  }
}

export default SalesInvoice
