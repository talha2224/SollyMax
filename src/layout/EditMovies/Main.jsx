import React from 'react'
import DashboardLayout from '../DashboardLayout'
import EditLayout from './EditLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<EditLayout/>}/>
    </div>
  )
}

export default Main
