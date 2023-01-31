import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
  Edit,
  ExcelExport,
  PdfExport,
} from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = ({ color }) => {
  let grid
  const handlePdfExcel = (args) => {
    if (grid && args.item.id === 'gridcomp_pdfexport') {
      grid.showSpinner()
      grid.pdfExport()
    } else if (grid && args.item.id === 'gridcomp_excelexport') {
      grid.showSpinner()
      grid.excelExport()
    }
  }
  const pdfExportComplete = () => {
    if (grid) {
      grid.hideSpinner()
    }
  }
  const excelExportComplete = () => {
    if (grid) {
      grid.hideSpinner()
    }
  }

  return (
    <div className="m-2 md:m-10 mt-20 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search', 'PdfExport', 'ExcelExport']}
        width="auto"
        allowExcelExport
        allowPdfExport
        toolbarClick={handlePdfExcel}
        pdfExportComplete={pdfExportComplete}
        excelExportComplete={excelExportComplete}
        ref={(g) => (grid = g)}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Edit, ExcelExport, PdfExport]}
        />
      </GridComponent>
    </div>
  )
}

export default Employees
