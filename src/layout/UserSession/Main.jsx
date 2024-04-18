import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Session from './Session'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<Session/>}/>
    </div>
  )
}

export default Main
