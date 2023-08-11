const AccountingMenuButton = [
  {
    id: 1,
    buttonName: 'Review Chart of Accounts'
  },
  {
    id: 2,
    buttonName: ' Setting up Taxes'
  },
  {
    id: 3,
    buttonName: ' Accounts Settings'
  },
  {
    id: 4,
    buttonName: ' Cost Centers for Budgeting and Analysis'
  },
  {
    id: 5,
    buttonName: ' Create Your First Purchase Invoice'
  },
  {
    id: 6,
    buttonName: ' Updating Opening Balances'
  },
  {
    id: 7,
    buttonName: ' Financial Statements'
  }
]

const AccountingContent = [
  {
    head: `Chart Of Accounts`,
    body: `ERPNext sets up a simple chart of accounts for each Company you create, but you can modify it according to business and legal requirements.`
  },

  ////////////// 4 ////////////////
  {
    head: `Setting up Taxes`,
    body: `ERPNext lets you configure your taxes so that they are automatically applied in your buying and selling transactions. You can configure them globally or even on Items. ERPNext taxes are pre-configured for most regions.`
  },

  ////////////// 5 ////////////////
  {
    head: `Account Settings `,
    body: `In ERPNext, Accounting features are configurable as per your business needs. Accounts Settings is the place to define some of your accounting preferences like:  `,
    footer: `- Credit Limit and over billing settings
             - Taxation preferences
             - Deferred accounting preferences`
  },

  ////////////// 6 ////////////////
  {
    head: `Cost Centers for Budgeting and Analysis`,
    body: `While your Books of Accounts are framed to fulfill statutory requirements, you can set up Cost Center and Accounting Dimensions to address your companies reporting and budgeting requirements.  `,
    footer: `Click here to learn more about how Cost Center and Dimensions allow you to get advanced financial analytics reports from ERPNext.`
  },

  ////////////// 7 ////////////////
  {
    head: `Create your first Purchase Invoice `,
    body: `A Purchase Invoice is a bill received from a Supplier for a product(s) or service(s) delivery to your company. You can track payables through Purchase Invoice and process Payment Entries against it.`,
    footer: `Purchase Invoices can also be created against a Purchase Order or Purchase Receipt.`
  },

  ////////////// 8 ////////////////
  {
    head: `Updating Opening Balances `,
    body: `Once you close the financial statement in previous accounting software, you can update the same as opening in your ERPNext's Balance Sheet accounts. This will allow you to get complete financial statements from ERPNext in the coming years, and discontinue the parallel accounting system right away. `
  },

  ////////////// 9 ////////////////
  {
    head: `Financial Statements `,
    body: `In ERPNext, you can get crucial financial reports like [Balance Sheet] and [Profit and Loss] statements with a click of a button. You can run in the report for a different period and plot analytics charts premised on statement data. For more reports, check sections like Financial Statements, General Ledger, and Profitability reports. `
  }
]

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

export { AccountingMenuButton, AccountingContent, AccountingYourShortcut, AccountingReport }
