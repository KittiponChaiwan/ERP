const ItemContentMenu = [
  {
    id: 1,
    name: 'Detail'
  },
  {
    id: 2,
    name: 'Dashboard'
  },
  {
    id: 3,
    name: 'Inventory'
  },
  {
    id: 4,
    name: 'Accounting'
  },
  {
    id: 5,
    name: 'Purchasing'
  },
  {
    id: 6,
    name: 'Sales'
  },
  {
    id: 7,
    name: 'Tax'
  },
  {
    id: 8,
    name: 'Quality'
  },
  {
    id: 9,
    name: 'Manufacturing'
  }
]

const defaultMaterialRequestType = [
  {
    id: 1,
    name: 'Purchase'
  },
  {
    id: 2,
    name: 'Material Transfer'
  },
  {
    id: 3,
    name: 'Material Issue'
  },
  {
    id: 4,
    name: 'Manufacture'
  },
  {
    id: 5,
    name: 'Customer Provided'
  }
]

const RateOfMaterialsBasedOn = [
  {
    id: 1,
    name: 'Valuation Rate'
  },
  {
    id: 2,
    name: 'Last Purchase Rate'
  },
  {
    id: 3,
    name: 'Price List'
  }
]

const valuationMethod = [
  {
    id: 1,
    name: 'FIFO'
  },
  {
    id: 2,
    name: 'Moving Average'
  },
  {
    id: 3,
    name: 'LIFO'
  }
]

const itemStockEntry = [
  {
    id: 1,
    name: 'Details'
  },
  {
    id: 2,
    name: 'Additional Costs'
  },
  {
    id: 3,
    name: 'Other Info'
  }
]

const ItemPricePage = [
  {
    id: 1,
    name: 'ItemPrice'
  }
]

const ItemGroup = [
  {
    id: 1,
    name: 'Item Group'
  }
]

const PriceListPage = [
  {
    id: 1,
    name: 'Price List'
  }
]

export {
  defaultMaterialRequestType,
  valuationMethod,
  ItemContentMenu,
  itemStockEntry,
  ItemGroup,
  ItemPricePage,
  PriceListPage,
  RateOfMaterialsBasedOn
}
