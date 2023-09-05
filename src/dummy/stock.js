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

export { StockMenuButton, StockContent }
