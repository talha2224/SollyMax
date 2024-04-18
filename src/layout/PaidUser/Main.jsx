import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Paid from './Paid'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<Paid/>}/>
    </div>
  )
}

export default Main
