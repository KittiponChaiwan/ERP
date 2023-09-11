const Columns = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'Barcodes', headerName: 'Barcodes', width: 150 },
  { field: 'BarcodeType', headerName: 'Barcode Type', width: 200 },
  {
    field: 'UOM',
    headerName: 'UOM',
    width: 200
  }
]

const Rows = [
  { id: 1, Barcodes: 'Sidw', BarcodeType: 'Jon', UOM: 'dasd' },
  {
    id: 2,
    Barcodes: 'Lannister',
    BarcodeType: 'Cersei',
    UOM: 'dasd'
  },
  {
    id: 3,
    Barcodes: 'Lannister',
    BarcodeType: 'Jaime',
    UOM: 'dasd'
  },
  { id: 4, Barcodes: 'Stark', BarcodeType: 'Arya', UOM: 'dasd' },
  {
    id: 5,
    Barcodes: 'Targaryen',
    BarcodeType: 'Daenerys',
    UOM: 'dasd'
  }
]

const ColumnPreOrder = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'Check', headerName: 'Check in (group)', width: 150 },
  { field: 'Request', headerName: 'Request for', width: 200 },
  {
    field: 'Level',
    headerName: 'Re-order Level',
    width: 200
  },
  { field: 'Qty', headerName: 'Re-order Qty', width: 200 },
  { field: 'Material', headerName: 'Material Request Type', width: 200 }
]

const RowsPreOrder = [
  { id: 1, Check: 'Sidw', Request: 'Jon', Level: 'dasd', Qty: 'wwww', Material: 'Math' },
  {
    id: 2,
    Check: 'Lannister',
    Request: 'Cersei',
    Level: 'dasd',
    Qty: 'wwww',
    Material: 'Math'
  },
  {
    id: 3,
    Check: 'Lannister',
    Request: 'Jaime',
    Level: 'dasd',
    Qty: 'wwww',
    Material: 'Math'
  },
  { id: 4, Check: 'Stark', Request: 'Arya', Level: 'dasd', Qty: 'wwww', Material: 'Math' },
  {
    id: 5,
    Check: 'Targaryen',
    Request: 'Daenerys',
    Level: 'dasd',
    Qty: 'wwww',
    Material: 'Math'
  }
]

const ColumnUnit = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'UOM', headerName: 'UOM', width: 150 },
  { field: 'Conversion', headerName: 'Conversion Factor', width: 200 }
]

const RowsUnit = [
  {
    id: 1,
    UOM: 'Targaryen',
    Conversion: 'Daenerys'
  }
]

export { Columns, Rows, ColumnPreOrder, RowsPreOrder, ColumnUnit, RowsUnit }
