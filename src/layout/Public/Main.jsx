import React from 'react'
import DashboardLayout from '../DashboardLayout'
import PublicLayout from './PublicLayout'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<PublicLayout/>}/>
    </div>
  )
}

export default Main
