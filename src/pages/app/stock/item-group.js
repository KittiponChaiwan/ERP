// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType, ItemGroup } from 'src/dummy/contentPages/itemPage'

// ** Custom Components
import StockItemGroup from 'src/components/ContentPages/ContentRight/ItemGroup/StockItemGroup'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const Item_Group = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [<StockItemGroup key='detail' dataRow={dataRow} />]

  return (
    <SubPages data={data} menuContent={ItemGroup} showContent={showContent} dataRow={dataRow} setDataRow={setDataRow} />
  )
}

Item_Group.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Item Group?fields=["*"]`, {
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

export default Item_Group
