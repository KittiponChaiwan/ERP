// ** React Imports
import React from 'react'

// ** Axios Imports
import axios from 'axios'
import SubPages from 'src/views/sub-pages/SubPages'

// ** Dummy Data
import { ItemContentMenu, defaultMaterialRequestType } from 'src/dummy/contentPages/itemPage'
import { CustomerContentMenu } from 'src/dummy/contentPages/customerPage'

// ** Custom Components
import DetailCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/DetailCustomer'
import DashboardCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/DashboardCustomer'
import ContactAndAddress from 'src/components/ContentPages/ContentRight/CustomerPage/ContactAndAddress'
import TaxCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/TaxCustomer'
import AccountingCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/AccoutingCustomer'
import SalesTeamCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/SalesTeamCustomer'
import SettingsCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/SettingsCustomer'
import PotalUserCustomer from 'src/components/ContentPages/ContentRight/CustomerPage/PortalUsersCustomer'

// ** Layouts
import SubPageLayout from 'src/@core/layouts/SubPageLayout'

const CustomerPage = ({ data }) => {
  const [dataRow, setDataRow] = React.useState({})

  const showContent = [
    <DetailCustomer key='detail' dataRow={dataRow} />,
    <DashboardCustomer key='dashboard' dataRow={dataRow} />,
    <ContactAndAddress key='ContactAndAddress' dataRow={dataRow} />,
    <TaxCustomer key='Tax' dataRow={dataRow} />,
    <AccountingCustomer key='Accounting' dataRow={dataRow} />,
    <SalesTeamCustomer key='salesTeam' dataRow={dataRow} />,
    <SettingsCustomer key='salesTeam' dataRow={dataRow} />,
    <PotalUserCustomer key='potalUser' dataRow={dataRow} />
  ]

  return (
    <SubPages
      data={data}
      menuContent={CustomerContentMenu}
      showContent={showContent}
      dataRow={dataRow}
      setDataRow={setDataRow}
    />
  )
}

CustomerPage.getLayout = page => <SubPageLayout>{page}</SubPageLayout>

// nextJS SSR
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}Customer?fields=["*"]&limit=500`, {
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

export default CustomerPage
