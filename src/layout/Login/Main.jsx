import React from 'react'
import DashboardLayout from '../DashboardLayout'
import LoginLayout from './LoginLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<LoginLayout/>}/>
    </div>
  )
}

export default Main
