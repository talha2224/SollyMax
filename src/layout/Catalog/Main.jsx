import React from 'react'
import DashboardLayout from '../DashboardLayout'
import CatalogLayout from './CatalogLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<CatalogLayout/>}/>
    </div>
  )
}

export default Main
