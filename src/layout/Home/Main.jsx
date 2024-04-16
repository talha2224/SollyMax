import React from 'react'
import DashboardLayout from '../DashboardLayout'
import HomeLayout from './HomeLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<HomeLayout/>}/>
    </div>
  )
}

export default Main
