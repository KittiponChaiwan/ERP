// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType, PriceListPage } from 'src/dummy/contentPages/itemPage'

// ** Custom Components
import StockPriceList from 'src/components/ContentPages/ContentRight/PriceListPage/StockPriceList'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const PriceList = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [<StockPriceList key='detail' dataRow={dataRow} />]

  return (
    <SubPages
      data={data}
      menuContent={PriceListPage}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

PriceList.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Price List?fields=["*"]`, {
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

export default PriceList
