// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType, itemStockEntry } from 'src/dummy/contentPages/itemPage'

// ** Custom Components
import DetailStockEntry from 'src/components/ContentPages/ContentRight/ItemStockEntry/DetailStockEntry'
import AdditionalCosts from 'src/components/ContentPages/ContentRight/ItemStockEntry/AdditionalCosts'
import OtherStockEntry from 'src/components/ContentPages/ContentRight/ItemStockEntry/OtherStockEntry'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const StockEntry = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [
    <DetailStockEntry key='detail' dataRow={dataRow} />,
    <AdditionalCosts key='additional' dataRow={dataRow} />,
    <OtherStockEntry key='other' dataRow={dataRow} />
  ]

  return (
    <SubPages
      data={data}
      menuContent={itemStockEntry}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

StockEntry.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Stock Entry?fields=["*"]`, {
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

export default StockEntry
