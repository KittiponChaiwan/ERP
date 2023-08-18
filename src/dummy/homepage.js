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
    route: '/app/stock/item'
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
    route: '/app/accounting/sales-invoice'
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
        route: '/app/accounting/account',
        imgIcon: 'chart-of-accounts.png'
      },
      {
        id: 2,
        name: 'Company',
        route: '/app/accounting/company',
        imgIcon: 'company.png'
      },
      {
        id: 3,
        name: 'Customer',
        route: '/app/selling/customer',
        imgIcon: 'customer.png'
      },
      {
        id: 4,
        name: 'Supplier',
        route: '/app/buying/supplier',
        imgIcon: 'supplier.png'
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
        route: '/app/stock/item',
        imgIcon: 'box.png'
      },
      {
        id: 2,
        name: 'Warehouse',
        route: '/app/stock/warehouse',
        imgIcon: 'warehouse.png'
      },
      {
        id: 3,
        name: 'Brand',
        route: '/app/stock/brand',
        imgIcon: 'brand.png'
      },
      {
        id: 4,
        name: 'Unit of Measure (UOM)',
        route: '/app/uom',
        imgIcon: 'units-of-measure.png'
      },
      {
        id: 5,
        name: 'Stock Reconciliation',
        route: '/app/stock/stock-reconciliation',
        imgIcon: 'stock-reconciliation.png'
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
        route: '/app/crm/lead',
        imgIcon: 'lead.png'
      },
      {
        id: 2,
        name: 'Customer Group',
        route: '/app/selling/customer-group',
        imgIcon: 'customer-group.png'
      },
      {
        id: 3,
        name: 'Territory',
        route: '/app/selling/territory',
        imgIcon: 'territory.png'
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
        route: '/app/data-import-tool',
        imgIcon: 'import-data.png'
      },
      {
        id: 2,
        name: 'Opening Invoice Creation Tool',
        route: '/app/accounting/opening-invoice-creation-tool',
        imgIcon: 'opening-invoice-creation-tool.png'
      },
      {
        id: 3,
        name: 'Chart of Accounts Importer',
        route: '/app/accounting/chart-of-accounts-importer',
        imgIcon: 'chart-of-accounts-importer.png'
      },
      {
        id: 4,
        name: 'Letter Head',
        route: '/app/letter-head',
        imgIcon: 'letter-head.png'
      },
      {
        id: 5,
        name: 'Email Account',
        route: '/app/email-account',
        imgIcon: 'email-account.png'
      }
    ]
  }
]

export { HomeMenuButton, HomeContent, HomeShortcut, HomeReport }
