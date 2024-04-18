import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Userlist from './Userlist'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<Userlist/>}/>
    </div>
  )
}

export default Main
