// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType } from 'src/dummy/contentPages/itemPage'
import { QuotationPanel } from 'src/dummy/contentPages/quotationPage'

// ** Custom Components
import DetailQuotation from 'src/components/ContentPages/ContentRight/QuotationPage/DetailQuotation'
import AddressAndContact from 'src/components/ContentPages/ContentRight/QuotationPage/AddressAndContact'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const Quotation = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [
    <DetailQuotation key='detail' dataRow={dataRow} />,
    <AddressAndContact key='AddressAndContact' dataRow={dataRow} />
  ]

  return (
    <SubPages
      data={data}
      menuContent={QuotationPanel}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

Quotation.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Quotation?fields=["*"]`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_TOKEN
    }
  })
  const data = res.data.data

  if (!data) {
    return {
      props: { data: [] }
    }
  }

  return {
    props: { data: data }
  }
}

export default Quotation
