import React from 'react'
import DashboardLayout from '../DashboardLayout'
import PrivateLayout from './PrivateLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<PrivateLayout/>}/>
    </div>
  )
}

export default Main
