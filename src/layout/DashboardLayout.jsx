import React from 'react'
import Sidebar from '../components/Sidebar'
import {colors} from '../constant/color'


const DashboardLayout = ({ component }) => {
  return (

    <div className='flex h-screen w-screen overflow-x-hidden overflow-y-auto relative'>

      <div style={{backgroundColor:colors.lightgray}} className={`h-[100%] shadow-shadow1 overflow-y-auto`}>
        <Sidebar />
      </div>

      <div style={{backgroundColor:colors.darkgray}} className='flex-1 w-[100%] h-[100%] p-5'>
        {component}
      </div>


    </div>
  )
}

export default DashboardLayout
