// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType, ItemPricePage } from 'src/dummy/contentPages/itemPage'

// ** Custom Components
import StockItemPricePage from 'src/components/ContentPages/ContentRight/ItemPricePage/StockItemPrice'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const ItemPrice = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [<StockItemPricePage key='detail' dataRow={dataRow} />]

  return (
    <SubPages
      data={data}
      menuContent={ItemPricePage}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

ItemPrice.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Item Price?fields=["*"]`, {
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

export default ItemPrice
