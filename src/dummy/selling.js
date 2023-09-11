const SellingMenuButton = [
  {
    id: 1,
    buttonName: 'Selling Settings'
  },
  {
    id: 2,
    buttonName: ' Sales Order'
  }
]

const SellingContent = [
  {
    id: 1,
    head: `Selling Settings`,
    body: `CRM and Selling module’s features are configurable as per your business needs. Selling Settings is the place where you can set your preferences for: `,
    footer: `- Customer naming and default values 
             - Billing and shipping preference in selling transactions`
  },

  ////////////// 13 ////////////////
  {
    id: 2,
    head: `Sales Order`,
    body: `A Sales Order is a confirmation of an order from your customer. It is also referred to as Proforma Invoice.`,
    footer: `Sales Order at the heart of your sales and purchase transactions. Sales Orders are linked in Delivery Note, Sales Invoices, Material Request, and Maintenance transactions. Through Sales Order, you can track fulfillment of the overall deal towards the customer.`
  }
]

const SellingShortcut = [
  {
    name: 'Item',
    route: '/app/stock/item'
  },
  {
    name: 'Sales Order',
    route: '/app/selling/sales-order'
  },
  {
    name: ' Sales Analytics',
    route: '/app/selling/sales-analytics'
  },
  {
    name: ' Point of Sale',
    route: '/app/selling/point-of-sale'
  },
  {
    name: ' Selling Dashboard',
    route: '/app/selling/selling-dashboard'
  },
  {
    name: 'Sales Management',
    route: 'https://frappe.school/courses/sales-management-course?utm_source=in_app'
  }
]

const SellingReport = [
  {
    id: 1,
    name: 'Selling',
    submenus: [
      {
        id: 1,
        name: 'Customer',
        route: '/app/selling/customer',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Quotation',
        route: '/app/selling/quotation',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Sales Order',
        route: '/app/selling/sales-order',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Sales Invoice',
        route: '/app/selling/sales-invoice',
        imgIcon: 'MenuIcon'
      },
      {
        id: 5,
        name: 'Blanket Order',
        route: '/manufacturing/blanket-order',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 2,
    name: 'Items and Pricing',
    submenus: [
      {
        id: 1,
        name: 'Item',
        route: '/app/stock/item',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Item Price',
        route: '/app/stock/item-price',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Price List',
        route: '/app/stock/price-list',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Item Group',
        route: '/app/stock/item-group',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 3,
    name: 'Settings',
    submenus: [
      {
        id: 1,
        name: 'Terms and Conditions Template',
        route: '/app/selling/terms-and-conditions-template',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Sales Taxes and Charges Template',
        route: '/app/selling/sales-taxes-and-charges-template',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 4,
    name: 'Key Reports',
    submenus: [
      {
        id: 1,
        name: 'Sales Analytics',
        route: '/app/selling/sales-analytics',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Sales Order Analysis',
        route: '/app/selling/sales-order-analysis',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Sales Funnel',
        route: '/app/selling/sales-funnel',
        imgIcon: 'MenuIcon'
      }
    ]
  }
]

export { SellingMenuButton, SellingContent, SellingShortcut, SellingReport }
