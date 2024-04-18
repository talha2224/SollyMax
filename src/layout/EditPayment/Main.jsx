import React from 'react'
import DashboardLayout from '../DashboardLayout'
import Edit from './Edit'
const Main = () => {

  return (
    <div>
      <DashboardLayout component={<Edit/>}/>
    </div>
  )
}

export default Main
