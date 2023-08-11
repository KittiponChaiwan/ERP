const HomeMenuButton = [
  {
    id: 1,
    buttonName: 'Item'
  },
  {
    id: 2,
    buttonName: 'Create a Customer'
  },
  {
    id: 3,
    buttonName: 'Create Your First Sales Invoice'
  }
]

const HomeContent = [
  /////////////////////////////////////// HOME //////////////////////////////////////////////////////
  ////////////// 0 ////////////////
  {
    id: 1,
    head: `Create an Item`,
    body: `Item is a product, of a or service offered by your company, or something you buy as a part of your supplies or raw materials.`,
    footer: `Items are integral to everything you do in ERPNext - from billing, purchasing to managing inventory. Everything you buy or sell, whether it is a physical product or a service is an Item. Items can be stock, non-stock, variants, serialized, batched, assets etc.  `
  },

  ////////////// 1 ////////////////
  {
    id: 2,
    head: `Create a Customer`,
    body: `The Customer master is at the heart of your sales transactions. Customers are linked in Quotations, Sales Orders, Invoices, and Payments. Customers can be either numbered or identified by name (you would typically do this based on the number of customers you have).`,
    footer: `Through Customer’s master, you can effectively track essentials like:
             - Customer’s multiple address and contacts
             - Account Receivables
             - Credit Limit and Credit Period`
  },

  ////////////// 2 ////////////////
  {
    id: 3,
    head: `All about sales invoice`,
    body: `A Sales Invoice is a bill that you send to your Customers against which the Customer makes the payment. Sales Invoice is an accounting transaction. On submission of Sales Invoice, the system updates the receivable and books income against a Customer Account.`
  }
]

const HomeShortcut = [
  {
    name: 'Item',
    route: '/app/item_shortcuts'
  },
  {
    name: ' Customer',
    route: '/app/selling/customer'
  },
  {
    name: ' Supplier',
    route: '/app/buying/supplier'
  },
  {
    name: ' Sales Invoice',
    route: '/app/selling/sales-invoice'
  },
  {
    name: ' Leaderbord',
    route: '/app/leaderboard'
  }
]

const HomeReport = [
  {
    id: 1,
    name: 'Accounting',
    submenus: [
      {
        id: 1,
        name: 'Chart of Accounts',
        route: '/webbrowser/chart_of_accounts_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Company',
        route: '/webbrowser/company_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Customer',
        route: '/webbrowser/customer_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Supplier',
        route: '/webbrowser/supplier_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 2,
    name: 'Stock',
    submenus: [
      {
        id: 1,
        name: 'Item',
        route: '/webbrowser/item_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Warehouse',
        route: '/webbrowser/warehouse_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Brand',
        route: '/webbrowser/brand_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Unit of Measure (UOM)',
        route: '/webbrowser/unit_of_measure_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 5,
        name: 'Stock Reconciliation',
        route: '/webbrowser/stock_reconciliation_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 3,
    name: 'CRM',
    submenus: [
      {
        id: 1,
        name: 'Lead',
        route: '/webbrowser/lead_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Customer Group',
        route: '/webbrowser/customer_group_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Territory',
        route: '/webbrowser/territory_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 4,
    name: 'Data Import and Settings',
    submenus: [
      {
        id: 1,
        name: 'Import Data',
        route: '/webbrowser/data_import_and_settings_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Opening Invoice Creation Tool',
        route: '/webbrowser/opening_invoice_creation _tool_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Chart of Accounts Importer',
        route: '/webbrowser/chart_of_accounts_importer_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Letter Head',
        route: '/webbrowser/letter_head_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 5,
        name: 'Email Account',
        route: '/webbrowser/email_account_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  }
]

export { HomeMenuButton, HomeContent, HomeShortcut, HomeReport }
