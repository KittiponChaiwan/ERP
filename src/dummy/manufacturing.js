const ManufacturingShortcut = [
  {
    name: 'BOM',
    route: '/app/manufacturing/bom'
  },
  {
    name: 'Production Plan',
    route: '/app/manufacturing/production-plan'
  },
  {
    name: 'Work Order',
    route: '/app/manufacturing/work-order'
  },
  {
    name: 'Job Card',
    route: '/app/manufacturing/job-card'
  },
  {
    name: 'Forecasting',
    route: '/app/manufacturing/forecasting'
  },
  {
    name: 'BOM Stock Report',
    route: '/app/manufacturing/bom-stock-report'
  },
  {
    name: 'Production Planning Report',
    route: '/app/manufacturing/production-planning-report'
  },
  {
    name: 'Learn Manufacturing',
    route: '/app/manufacturing/learn-manufacturing'
  }
]

const ManufacturingReport = [
  {
    id: 1,
    name: 'Production',
    submenus: [
      {
        id: 1,
        name: 'Work Order',
        route: '/app/manufacturing/work-order',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Production Plan',
        route: '/app/manufacturing/production-plan',
        imgIcon: 'MenuIcon'
      },
      {
        id: 3,
        name: 'Stock Entry',
        route: '/app/manufacturing/stock-entry',
        imgIcon: 'MenuIcon'
      }
    ]
  },
  {
    id: 2,
    name: 'Bill of Materials',
    submenus: [
      {
        id: 1,
        name: 'Item',
        route: '/app/manufacturing/item',
        imgIcon: 'MenuIcon'
      },
      {
        id: 2,
        name: 'Bill of Materials',
        route: '/app/manufacturing/bom',
        imgIcon: 'MenuIcon'
      }
    ]
  }
]

export { ManufacturingShortcut, ManufacturingReport }
