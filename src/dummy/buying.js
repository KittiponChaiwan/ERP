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
    id: 1,
    head: `Buying Settings`,
    body: `Buying module’s features are highly configurable as per your business needs. Buying Settings is the place where you can set your preferences for: `,
    footer: `- Supplier naming and default values
             - Billing and shipping preference in buying transactions`
  },

  ////////////// 11 ////////////////
  {
    id: 2,
    head: `Track Material Request`,
    body: `Also known as Purchase Request or an Indent, is a document identifying a requirement of a set of items (products or services) for various purposes like procurement, transfer, issue, or manufacturing. Once the Material Request is validated, a purchase manager can take the next actions for purchasing items like requesting RFQ from a supplier or directly placing an order with an identified Supplier.`
  },

  ////////////// 12 ////////////////
  {
    id: 3,
    head: `Create first Purchase Order`,
    body: `Purchase Order is at the heart of your buying transactions. In ERPNext, Purchase Order can can be created against a Purchase Material Request (indent) and Supplier Quotation as well. Purchase Orders is also linked to Purchase Receipt and Purchase Invoices, allowing you to keep a birds-eye view on your purchase deals.  `
  }
]

const BuyingYourShortcut = [
  {
    name: 'Item',
    bgcolorbutton: 'secondary.D',
    route: '/app/stock/item'
  },
  {
    name: 'Material Request',
    bgcolorbutton: 'secondary.C',
    route: '/app/buying/material-request'
  },
  {
    name: 'Purchase Order',
    bgcolorbutton: 'secondary.D',
    route: '/app/buying/purchase-order'
  },
  {
    name: 'Purchase Analytics',
    bgcolorbutton: 'secondary.C',
    route: '/app/buying/purchase-analytics'
  },
  {
    name: 'Purchase Order Analysis',
    bgcolorbutton: 'secondary.D',
    route: '/app/buying/purchase-order-analysis'
  },
  {
    name: 'Buying Dashboard',
    bgcolorbutton: 'secondary.C',
    route: '/app/buying/buying-dashboard'
  },
  {
    name: 'Learn Procurement',
    bgcolorbutton: 'secondary.D',
    route: 'https://frappe.school/courses/procurement?utm_source=in_app'
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
        router: '/app/stock/material-request',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order',
        router: '/app/buying/purchase-order',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Purchase Invoice',
        router: '/app/buying/purchase-invoice',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Request for Quotation',
        router: '/app/buying/request-for-quotation',
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
        router: '/app/stock/item',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Item Price',
        router: '/app/stock/item-price',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Price List',
        router: '/app/stock/price-list',
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
        router: '/app/buying/supplier',
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
        router: '/app/buying/purchase-analytics',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order Analysis',
        router: '/app/buying/purchase-order-analysis',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Supplier-Wise Sales Analytics',
        router: '/app/buying/supplier-wise-sales-analytics',
        imgIcon: 'icon-account'
      },
      {
        id: 4,
        name: 'Items to Order and Receive',
        router: '/app/buying/items-to-order-and-receive',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Purchase Order Trends',
        router: '/app/buying/purchase-order-trends',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Procurement Tracker',
        router: '/app/buying/procurement-tracker',
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
        router: '/app/buying/items-to-be-requested',
        imgIcon: 'icon-account'
      },
      {
        id: 2,
        name: 'Item-wise Purchase History',
        router: '/app/buying/item-wise-purchase-history',
        imgIcon: 'icon-account'
      },
      {
        id: 3,
        name: 'Supplier Quotation Comparison',
        router: '/app/buying/supplier-quotation-comparison',
        imgIcon: 'icon-account'
      }
    ]
  }
]

export { BuyingMenuButton, BuyingContent, BuyingYourShortcut, BuyingReport }
