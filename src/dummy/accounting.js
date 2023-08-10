const AccountingYourShortcut = [
  {
    name: 'Chart of Accounts',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Sales Invice',
    bgcolorbutton: 'secondary.C',
    route: '/'
  },
  {
    name: ' Purchase Invoice',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Journal Entry',
    bgcolorbutton: 'secondary.C',
    route: '/'
  },
  {
    name: ' Payment Entry',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Accounts Receivable',
    bgcolorbutton: 'secondary.C',
    route: '/'
  },
  {
    name: ' General Ledger',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Trial Balance',
    bgcolorbutton: 'secondary.C',
    route: '/'
  },
  {
    name: ' Dashboard',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Learn Accounting',
    bgcolorbutton: 'secondary.C',
    route: '/'
  }
]

const AccountingReport = [
  {
    id: 1,
    name: 'Accounting Masters',
    submenus: [
      {
        id: 1,
        name: 'Company',
        route: '/webbrowser/company_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Chart of Accounts',
        route: '/webbrowser/chart_of_accounts_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 2,
    name: 'Accounts Receivable',
    submenus: [
      {
        id: 1,
        name: 'Sales Invoice',
        route: '/webbrowser/sales_invoice_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Customer',
        route: '/webbrowser/customer_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 3,
    name: 'Accounts Payable',
    submenus: [
      {
        id: 1,
        name: 'Purchase Invoice',
        route: '/webbrowser/purchase_invoice_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Supplier',
        route: '/webbrowser/supplier_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  }
]

export { AccountingYourShortcut, AccountingReport }
