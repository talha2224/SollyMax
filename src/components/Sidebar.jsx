import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { NavData } from '../constant/navData'
import RightArrow from '../assets/right.png'
import DownArrow from '../assets/down.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { colors } from '../constant/color'

const Sidebar = () => {
  const [toogleLinks, settoogleLinks] = useState({ key: "", show: false })
  const nav = useNavigate()
  const visible = useSelector(state => state.toogleSidebar)
  const currentLocation = useLocation().pathname


  const handleNavigation = (navigateTo)=>{
    if(navigateTo){
      nav(navigateTo)
    }
    else{
      nav(currentLocation)
    }
  }



  return (
    <>


      <div className='overflow-y-auto lg:block hidden w-[16rem]'>
        <img src={Logo} alt="logo" className='p-5' />
        <div className='mt-3'>
          {
            NavData?.map((item, index) => (
              <>
                <div key={item.title} className='flex justify-between items-center mb-4 mx-2 px-3 py-2 rounded-md hover:bg-[#333333] text-white hover:text-[#FBB101] cursor-pointer'>
                  <div onClick={()=>handleNavigation(item.route)} className={`flex gap-x-3 items-center`}>
                    <img src={item.image} alt={item.title} className='w-[1.2rem]' />
                    <p className='mb-0'>{item.title}</p>
                  </div>
                  {
                    item.subLinks.length > 0 && (
                      <div onClick={() => { settoogleLinks({ key: item.title, show: !toogleLinks.show }) }}>
                        <img src={toogleLinks.show && item.title === toogleLinks.key ? DownArrow : RightArrow} alt="" />
                      </div>
                    )
                  }
                </div>

                {
                  (item.subLinks.length > 0 && item.title === toogleLinks.key && toogleLinks.show) && (
                    item.subLinks.map((sub) => (
                      <div onClick={()=>handleNavigation(sub.route)} className='flex gap-x-3 items-center mb-2 text-[#FBB101] cursor-pointer mx-5'>
                        <div className='w-[7px] h-[7px] rounded-full bg-[#FBB101]'></div>
                        <div>{sub.title}</div>
                      </div>
                    ))
                  )
                }

              </>
            ))
          }
        </div>
      </div>


      {
        visible && (
          <div style={{backgroundColor:colors.lightgray}} className='overflow-y-auto lg:hidden block w-[16rem] absolute top-0 left-0 z-50 h-[100%]'>
            <img src={Logo} alt="logo" className='p-5' />
            <div className='mt-3'>
              {
                NavData?.map((item, index) => (
                  <>
                    <div key={item.title} className='flex justify-between items-center mb-4 mx-2 px-3 py-2 rounded-md hover:bg-[#333333] text-white hover:text-[#FBB101] cursor-pointer'>
                      <div className={`flex gap-x-3 items-center`}>
                        <img src={item.image} alt={item.title} className='w-[1.2rem]' />
                        <p className='mb-0'>{item.title}</p>
                      </div>
                      {
                        item.subLinks.length > 0 && (
                          <div onClick={() => { settoogleLinks({ key: item.title, show: !toogleLinks.show }) }}>
                            <img src={toogleLinks.show && item.title === toogleLinks.key ? DownArrow : RightArrow} alt="" />
                          </div>
                        )
                      }
                    </div>

                    {
                      (item.subLinks.length > 0 && item.title === toogleLinks.key && toogleLinks.show) && (
                        item.subLinks.map((sub) => (
                          <div className='flex gap-x-3 items-center mb-2 text-[#FBB101] cursor-pointer mx-5'>
                            <div className='w-[7px] h-[7px] rounded-full bg-[#FBB101]'></div>
                            <div>{sub.title}</div>
                          </div>
                        ))
                      )
                    }

                  </>
                ))
              }
            </div>
          </div>
        )
      }

    </>
  )
}

export default Sidebar
