const StockMenuButton = [
  {
    id: 1,
    buttonName: 'Review Stock Settings'
  },
  {
    id: 2,
    buttonName: 'Setup a Warehouse'
  },
  {
    id: 3,
    buttonName: 'Manage Stock Movements'
  },
  {
    id: 4,
    buttonName: 'Check Stock Ledger'
  },
  {
    id: 5,
    buttonName: 'Update Stock Opening Balance'
  }
]

const StockContent = [
  {
    id: 1,
    head: 'Review Stock Settings',
    body: 'In ERPNext, the Stock module’s features are configurable as per your business needs. Stock Settings is the place where you can set your preferences for:',
    footer: `Default values for Item and Pricing
Default valuation method for inventory valuation
Set preference for serialization and batching of item
Set tolerance for over-receipt and delivery of items`
  },
  {
    id: 2,
    head: 'Setup a Warehouse',
    body: `The warehouse can be your location/godown/store where you maintain the item's inventory, and receive/deliver them to various parties.`,
    footer: `The warehouse can be your location/godown/store where you maintain the item's inventory, and receive/deliver them to various parties.`
  },
  {
    id: 3,
    head: 'Manage Stock Movements',
    body: `Stock entry allows you to register the movement of stock for various purposes like transfer, received, issues, repacked, etc. To address issues related to theft and pilferages, you can always ensure that the movement of goods happens against a document reference Stock Entry in ERPNext.`,
    footer: `Stock entry allows you to register the movement of stock for various purposes like transfer, received, issues, repacked, etc. To address issues related to theft and pilferages, you can always ensure that the movement of goods happens against a document reference Stock Entry in ERPNext.`
  },
  {
    id: 4,
    head: 'Check Stock Reports',
    body: `Based on the various stock transactions, you can get a host of one-click Stock Reports in ERPNext like Stock Ledger, Stock Balance, Projected Quantity, and Ageing analysis.`
  },
  {
    id: 5,
    head: 'Update Stock Opening Balance',
    body: `It’s an entry to update the stock balance of an item, in a warehouse, on a date and time you are going live on ERPNext.`,
    footer: `Once opening stocks are updated, you can create transactions like manufacturing and stock deliveries, where this opening stock will be consumed.`
  }
]

const StockShortcut = [
  {
    name: 'Item',
    route: '/app/stock/item'
  },
  {
    name: 'Material Request',
    route: '/app/stock/material-request'
  },
  {
    name: 'Stock Entry',
    route: '/app/stock/stock-entry'
  },
  {
    name: 'Purchase Receipt',
    route: '/app/stock/purchase-receipt'
  },
  {
    name: 'Delivery Note',
    route: '/app/stock/delivery-note'
  },
  {
    name: 'Stock Ledger',
    route: '/app/stock/ledger'
  },
  {
    name: 'Stock Balance',
    route: '/app/stock/balance'
  },
  {
    name: 'Dashboard',
    route: '/app/stock/dashboard'
  },
  {
    name: 'Learn Inventory Management',
    route: '/app/stock/learn'
  }
]

const StockReport = [
  {
    id: 1,
    name: 'Items Catalogue',
    submenus: [
      {
        id: 1,
        name: 'item',
        route: '/app/selling/customer',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Item Group',
        route: '/app/stock/item-group',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Product Bundle',
        route: '/app/selling/sales-order',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 2,
    name: 'Stock Transactions',
    submenus: [
      {
        id: 1,
        name: 'Material Request',
        route: '/app/stock/material-request',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Stock Entry',
        route: '/app/stock/entry',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Delivery Note',
        route: '/app/stock/delivery-note',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Purchase Receipt',
        route: '/app/stock/purchase-receipt',
        imgIcon: 'MenuIcon'
      },
      {
        id: 5,
        name: 'Pick List',
        route: '/app/stock/pick-list',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 3,
    name: 'Stock Reports',
    submenus: [
      {
        id: 1,
        name: 'Stock Ledger',
        route: '/app/stock/ledger',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Stock Balance',
        route: '/app/stock/stock-balance',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Stock Projected Quantity',
        route: '/app/stock/projected-quantity',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 4,
    name: 'Settings',
    submenus: [
      {
        id: 1,
        name: 'Stock Settings',
        route: '/app/stock/stock-settings',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Warehouse',
        route: '/app/stock/warehouse',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Unit of Measure (UOM)',
        route: '/app/stock/uom',
        imgIcon: 'MenuIcon'
      },
      {
        id: 4,
        name: 'Brand',
        route: '/app/stock/brand',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 5,
    name: 'Serial No and Batch',
    submenus: [
      {
        id: 1,
        name: 'Serial No',
        route: '/app/stock/serial-no',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Batch',
        route: '/app/stock/batch',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 6,
    name: 'Tools',
    submenus: [
      {
        id: 1,
        name: 'Stock Reconciliation',
        route: '/app/stock/stock-reconciliation',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Landed Cost Voucher',
        route: '/app/stock/landed-cost-voucher',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Packing Slip',
        route: '/app/stock/packing-slip',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 7,
    name: 'Key Reports',
    submenus: [
      {
        id: 1,
        name: 'Stock Analytics',
        route: '/app/stock/stock-analytics',
        imgIcon: 'MenuIcon'
      }
    ]
  }
]

export { StockMenuButton, StockContent, StockShortcut, StockReport }
