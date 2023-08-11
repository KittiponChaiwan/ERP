const BuyingMenuButton = [
  {
    id: 1,
    buttonName: 'Buying Settings'
  },
  {
    id: 2,
    buttonName: ' Track Material Request'
  },
  {
    id: 3,
    buttonName: ' Create first Purchase Order'
  }
]

const BuyingContent = [
  {
    head: `Buying Settings`,
    body: `Buying module’s features are highly configurable as per your business needs. Buying Settings is the place where you can set your preferences for: `,
    footer: `- Supplier naming and default values
             - Billing and shipping preference in buying transactions`
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
  }
]

const BuyingYourShortcut = [
  {
    name: 'Cost Centers for Budgeting and Analysis',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Create Your First Purchase Invoice',
    bgcolorbutton: 'secondary.C',
    route: '/'
  },
  {
    name: ' Updating Opening Balances',
    bgcolorbutton: 'secondary.D',
    route: '/'
  },
  {
    name: ' Financial Statements',
    bgcolorbutton: 'secondary.C',
    route: '/'
  }
]

const BuyingReport = [
  {
    id: 1,
    name: 'Buying',
    submenus: [
      {
        id: 1,
        name: 'Material Request',
        router: '/webbrowser/material_request_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order',
        router: '/webbrowser/purchase_Order_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Purchase Invoice',
        router: '/webbrowser/purchase_invoice_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Request for Quotation',
        router: '/webbrowser/request_for_quotation_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 2,
    name: 'Items & Pricing',
    submenus: [
      {
        id: 1,
        name: 'Item',
        router: '/webbrowser/items_and_pricing_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Item Price',
        router: '/webbrowser/item_price_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Price List',
        router: '/webbrowser/price_list_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 3,
    name: 'Supplier',
    submenus: [
      {
        id: 1,
        name: 'supplier',
        router: '/webbrowser/supplier_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 4,
    name: 'Key Reports',
    submenus: [
      {
        id: 1,
        name: 'Purchase Analytics',
        router: '/webbrowser/purchase_analytics_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order Analysis',
        router: '/webbrowser/purchase_order_analysis_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Supplier-Wise Sales Analytics',
        router: '/webbrowser/supplier_wise_sales_analytics_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Items to Order and Receive',
        router: '/webbrowser/items_to_order_and_receive_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order Trends',
        router: '/webbrowser/purchase_order_trends_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Procurement Tracker',
        router: '/webbrowser/procurement_tracker_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  },
  {
    id: 5,
    name: 'Other Reports',
    submenus: [
      {
        id: 1,
        name: 'Items To Be Requested',
        router: '/webbrowser/items_to_be_requested_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Item-wise Purchase History',
        router: '/webbrowser/item_wise_purchase_history_shortcuts',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Supplier Quotation Comparison',
        router: '/webbrowser/supplier_quotation_comparison_shortcuts',
        imgIcon: 'icon-account'
      }
    ]
  }
]

export { BuyingMenuButton, BuyingContent, BuyingYourShortcut, BuyingReport }
