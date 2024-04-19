import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Group from './Group'

const Main = () => {
  return (
    <div>
      <DashboardLayout component={<Group/>}/>
    </div>
  )
}

export default Main
