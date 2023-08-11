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
        route: '/webbrowser/customer_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Quotation',
        route: '/webbrowser/cuotation_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Sales Order',
        route: '/webbrowser/sales_order_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Sales Invoice',
        route: '/webbrowser/sales_invoice_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 5,
        name: 'Blanket Order',
        route: '/webbrowser/blanket_order_shortcuts',
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
        route: '/webbrowser/items_and_pricing_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Item Price',
        route: '/webbrowser/item_price_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Price List',
        route: '/webbrowser/price_list_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Item Group',
        route: '/webbrowser/item_group_shortcuts',
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
        route: '/webbrowser/terms_and_conditions_template_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Sales Taxes and Charges Template',
        route: '/webbrowser/sales_taxes_and_charges_template_shortcuts',
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
        route: '/webbrowser/sales_analytics_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Sales Order Analysis',
        route: '/webbrowser/sales_order_analysis_shortcuts',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Sales Funnel',
        route: '/webbrowser/sales_funnel_shortcuts',
        imgIcon: 'MenuIcon'
      }
    ]
  }
]

export { SellingMenuButton, SellingContent, SellingShortcut, SellingReport }
