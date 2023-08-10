const SellingShortcut = [
  {
    name: 'Item',
    route: '/'
  },
  {
    name: ' Sales Order',
    route: '/'
  },
  {
    name: ' Sales Analytics',
    route: '/'
  },
  {
    name: ' Point of Sale',
    route: '/'
  },
  {
    name: ' Selling Dashboard',
    route: '/'
  },
  {
    name: 'Sales Management',
    route: '/'
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

export { SellingShortcut, SellingReport }
