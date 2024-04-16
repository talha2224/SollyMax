import React from 'react'
import DashboardLayout from '../DashboardLayout'
import CreateLayout from './CreateLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<CreateLayout/>}/>
    </div>
  )
}

export default Main
