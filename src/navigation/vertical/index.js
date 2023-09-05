// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Cog from 'mdi-material-ui/Cog'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'HOME',
      icon: Cog,
      path: '/app'
    },
    {
      title: 'Accounting',
      icon: Cog,
      path: '/app/accounting'
    },
    {
      title: 'Buying',
      icon: Cog,
      path: '/app/buying'
    },
    {
      title: 'Selling',
      icon: Cog,
      path: '/app/selling'
    },
    {
      title: 'Stock',
      icon: Cog,
      path: '/app/stock'
    },
    {
      title: 'HR',
      icon: Cog,
      path: '/app/hr'
    },
    {
      title: 'Manufacturing',
      icon: Cog,
      path: '/app/manufacturing'
    },
    {
      title: 'Quality',
      icon: Cog,
      path: '/app/quality'
    },
    {
      title: 'CRM',
      icon: Cog,
      path: '/app/crm'
    },
    {
      title: 'Projects',
      icon: Cog,
      path: '/app/projects'
    },
    {
      title: 'Support',
      icon: Cog,
      path: '/app/support'
    },
    {
      title: 'Users',
      icon: Cog,
      path: '/app/users'
    },
    {
      title: 'Website',
      icon: Cog,
      path: '/app/website'
    },
    {
      title: 'Payroll',
      icon: Cog,
      path: '/app/payroll'
    },
    {
      title: 'Build',
      icon: Cog,
      path: '/app/build'
    },
    {
      title: 'Tools',
      icon: Cog,
      path: '/app/tools'
    },
    {
      title: 'ERPNext Settings',
      icon: Cog,
      path: '/app/erpnext-settings'
    },
    {
      title: 'Integrations',
      icon: Cog,
      path: '/app/integrations'
    },
    {
      title: 'ERPNext Integrations',
      icon: Cog,
      path: '/app/erpnext-integrations'
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
