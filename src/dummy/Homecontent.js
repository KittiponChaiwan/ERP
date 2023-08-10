export const homecontent = [
  /////////////////////////////////////// HOME //////////////////////////////////////////////////////
  ////////////// 0 ////////////////
  {
    head: `Create an Item`,
    body: `Item is a product, of a or service offered by your company, or something you buy as a part of your supplies or raw materials.`,
    footer: `Items are integral to everything you do in ERPNext - from billing, purchasing to managing inventory. Everything you buy or sell, whether it is a physical product or a service is an Item. Items can be stock, non-stock, variants, serialized, batched, assets etc.  `
  },

  ////////////// 1 ////////////////
  {
    head: `Create a Customer`,
    body: `The Customer master is at the heart of your sales transactions. Customers are linked in Quotations, Sales Orders, Invoices, and Payments. Customers can be either numbered or identified by name (you would typically do this based on the number of customers you have).`,
    footer: `Through Customer’s master, you can effectively track essentials like:  `,
    footer_1: ` - Customer’s multiple address and contacts  `,
    footer_2: ` - Account Receivables  `,
    footer_3: ` - Credit Limit and Credit Period  `
  },

  ////////////// 2 ////////////////
  {
    head: `All about sales invoice`,
    body: `A Sales Invoice is a bill that you send to your Customers against which the Customer makes the payment. Sales Invoice is an accounting transaction. On submission of Sales Invoice, the system updates the receivable and books income against a Customer Account.`
  },

  /////////////////////////////////////// Accounting //////////////////////////////////////////////////////
  ////////////// 3 ////////////////
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
    footer: ` `,
    footer_1: ` - Credit Limit and over billing settings   `,
    footer_2: ` - Taxation preferences  `,
    footer_3: ` - Deferred accounting preferences `
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
  },

  /////////////////////////////////////// Buying //////////////////////////////////////////////////////
  ////////////// 10 ////////////////
  {
    head: `Buying Settings`,
    body: `Buying module’s features are highly configurable as per your business needs. Buying Settings is the place where you can set your preferences for: `,
    footer: ``,
    footer_1: ` - Supplier naming and default values`,
    footer_2: ` - Billing and shipping preference in buying transactions`
  },

  ////////////// 11 ////////////////
  {
    head: `Track Material Request`,
    body: `Also known as Purchase Request or an Indent, is a document identifying a requirement of a set of items (products or services) for various purposes like procurement, transfer, issue, or manufacturing. Once the Material Request is validated, a purchase manager can take the next actions for purchasing items like requesting RFQ from a supplier or directly placing an order with an identified Supplier.`
  },

  ////////////// 12 ////////////////
  {
    head: `Create first Purchase Order`,
    body: `Purchase Order is at the heart of your buying transactions. In ERPNext, Purchase Order can can be created against a Purchase Material Request (indent) and Supplier Quotation as well. Purchase Orders is also linked to Purchase Receipt and Purchase Invoices, allowing you to keep a birds-eye view on your purchase deals.  `
  },

  /////////////////////////////////////// Seling //////////////////////////////////////////////////////
  ////////////// 13 ////////////////
  {
    head: `Selling Settings`,
    body: `CRM and Selling module’s features are configurable as per your business needs. Selling Settings is the place where you can set your preferences for: `,
    footer: ``,
    footer_1: ` - Customer naming and default values `,
    footer_2: ` - Billing and shipping preference in sales transactions `
  },

  ////////////// 13 ////////////////
  {
    head: `Sales Order`,
    body: `A Sales Order is a confirmation of an order from your customer. It is also referred to as Proforma Invoice.`,
    fotter: `Sales Order at the heart of your sales and purchase transactions. Sales Orders are linked in Delivery Note, Sales Invoices, Material Request, and Maintenance transactions. Through Sales Order, you can track fulfillment of the overall deal towards the customer.`
  }
]

export const Home_Detail_Shortcut = [
  {
    detailbutton: 'Item',
    numminwid: 280,
    bgcolorbutton: 'secondary.C'
  },
  {
    detailbutton: ' detailbutton',
    numminwid: 280,
    bgcolorbutton: 'secondary.D'
  },
  {
    detailbutton: ' Supplier',
    numminwid: 280,
    bgcolorbutton: 'secondary.E'
  },
  {
    detailbutton: ' Sales Invoice',
    numminwid: 280,
    bgcolorbutton: 'secondary.F'
  },
  {
    detailbutton: ' Leaderbord',
    numminwid: 280,
    bgcolorbutton: 'secondary.G'
  }
]

export const Accounting_Detail_Shortcut = [
  {
    detailbutton: 'Chart of Accounts',
    numminwid: 280,
    bgcolorbutton: 'secondary.C'
  },
  {
    detailbutton: ' Sales Invice',
    numminwid: 280,
    bgcolorbutton: 'secondary.D'
  },
  {
    detailbutton: ' Purchase Invoice',
    numminwid: 280,
    bgcolorbutton: 'secondary.E'
  },
  {
    detailbutton: ' Journal Entry',
    numminwid: 280,
    bgcolorbutton: 'secondary.F'
  },
  {
    detailbutton: ' Payment Entry',
    numminwid: 280,
    bgcolorbutton: 'secondary.G'
  },
  {
    detailbutton: ' Accounts Receivable',
    numminwid: 280,
    bgcolorbutton: 'secondary.C'
  },
  {
    detailbutton: ' General Ledger',
    numminwid: 280,
    bgcolorbutton: 'secondary.D'
  },
  {
    detailbutton: ' Trial Balance',
    numminwid: 280,
    bgcolorbutton: 'secondary.E'
  },
  {
    detailbutton: ' Dashboard',
    numminwid: 280,
    bgcolorbutton: 'secondary.F'
  },
  {
    detailbutton: ' Learn Accounting',
    numminwid: 280,
    bgcolorbutton: 'secondary.F'
  }
]

export const Buying_Detail_Shortcut = [
  {
    detailbutton: 'asd',
    numminwid: 280,
    bgcolorbutton: 'secondary.C'
  },
  {
    detailbutton: ' detailbutton',
    numminwid: 280,
    bgcolorbutton: 'secondary.D'
  },
  {
    detailbutton: ' Supplier',
    numminwid: 280,
    bgcolorbutton: 'secondary.E'
  },
  {
    detailbutton: ' Sales Invoice',
    numminwid: 280,
    bgcolorbutton: 'secondary.F'
  },
  {
    detailbutton: ' Leaderbord',
    numminwid: 280,
    bgcolorbutton: 'secondary.G'
  }
]
