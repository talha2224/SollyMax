import React, { useState } from 'react'
import ProfileImage from '../../assets/profile.png'
import Unlock from '../../assets/unlock.png'
import User from '../../assets/userIcon.png'
import Trash from '../../assets/trash.png'
import Button from '../../components/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { FaSearch } from 'react-icons/fa'
import Notify from '../../components/Notify'
import { useNavigate } from 'react-router-dom'

const Group = () => {
    const disptach = useDispatch()
    const [userTypes, setUserTypes] = useState("Basic")
    const count = [1, 2, 3, 4, 4, 5, 6, 6, 6766, 7, 67, 7, 65,]
    const [notify, setNotify] = useState(false)
    const nav = useNavigate()

    return (


        <div className='flex flex-col h-[100%] w-[100%] overflow-auto relative'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-end sm:justify-between items-center'>

                <div className='hidden sm:flex gap-x-4'>
                    <Button onClick={()=>setUserTypes("Basic")} title={"Basic User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Basic" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                    <Button onClick={()=>setUserTypes("Standard")} title={"Standard User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Standard" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                    <Button onClick={()=>setUserTypes("Premium")} title={"Premium User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Premium" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                </div>
                <div className='flex items-center gap-x-3'>
                    <div className='hidden md:flex gap-x-4 items-center w-[16rem] h-[2.3rem] rounded-md border border-[#A3A3A3] px-3'>
                        <FaSearch className='text-[#A3A3A3]' />
                        <input type="text" name="" id="" placeholder='Search for users' className='text-[#A3A3A3] flex-1 outline-none bg-transparent border-none placeholder:text-[#A3A3A3]' />
                    </div>
                    <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                    <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                        <GiHamburgerMenu />
                    </div>
                </div>

            </div>

            {/* RESPONSIVE SEARCH BAR  */}
            <div className='md:hidden flex gap-x-4 items-center w-[100%] mt-3 h-[2.3rem] rounded-md border border-[white] text-white px-3'>
                <FaSearch className='text-white' />
                <input type="text" name="" id="" placeholder='Search movie & tv series' className='flex-1 outline-none bg-transparent border-none placeholder:text-white' />
            </div>
            <div className='flex sm:hidden gap-x-4 justify-center mt-4'>
                <Button onClick={()=>setUserTypes("Basic")} title={"Basic User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Basic" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button onClick={()=>setUserTypes("Standard")} title={"Standard User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Standard" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button onClick={()=>setUserTypes("Premium")} title={"Premium User"} className={`w-[7rem] h-[2rem] text-sm font-semibold rounded-md ${userTypes === "Premium" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
            </div>


            {/* TABLE  */}

            <div className='flex-1 flex flex-col items-center  w-[100%] h-[100%] shadow-shadow2 bg-[#333333] rounded-[12px] overflow-auto mt-3'>

                <div className=' w-[90%] h-[80%] m-5 overflow-y-auto'>
                    {/* HEAD  */}
                    <div className='flex items-center gap-x-6 text-white overflow-auto'>
                        <p className='flex-1 text-nowrap  min-w-[10rem]'>Username</p>
                        <p className='flex-1 text-nowrap  min-w-[10rem]'>Email Address</p>
                        <p className='flex-1 text-nowrap  min-w-[10rem]'>Pricing Plan</p>
                        <p className='flex-1 text-nowrap  min-w-[10rem]'>Date Created</p>
                        <p className='flex-1 text-nowrap  min-w-[10rem]'>Action</p>
                    </div>

                    {/* DATA  */}
                    {
                        count.map((i, index) => (
                            <div className='flex items-center gap-x-6 text-white bg-[#1E1E1E] rounded-md mt-6 overflow-auto h-[3rem] p-2'>

                                <div className='flex gap-x-3 items-center  h-[3rem] min-w-[12.5rem]'>
                                    <div className='w-[2rem] h-[2rem] flex justify-center items-center  bg-[#ec0c0c333] '>
                                        <img src={User} alt="" className='h-[1rem] mt-[5px]' />
                                    </div>
                                    <p className='mt-[2px]'>Talha Haider</p>
                                </div>

                                <div className='flex items-center h-[3rem] min-w-[12.5rem]'>
                                    <p className='mt-[2px]'>johndoe@gmail.com</p>
                                </div>

                                <div className='flex items-center h-[3rem] min-w-[12.5rem] '>
                                    <p className='mt-[2px]'>Premium</p>
                                </div>

                                <div className='flex items-center min-w-[12.5rem]'>
                                    <p className='mt-[2px]'>02/02/2024</p>
                                </div>

                                <div className='flex gap-x-6 items-center  h-[3rem]  min-w-[12.5rem]'>
                                    <img src={Unlock} alt="" className=' cursor-pointer' />
                                    <img onClick={() => setNotify(true)} src={Trash} alt="" className=' cursor-pointer' />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='w-[90%] flex sm:justify-end mt-4 gap-x-3 overflow-x-auto'>
                    <Button title={"Page 1 of 8"} className={`min-w-[8rem] h-[2.3rem] rounded-md bg-[#FBB101]`} />
                    <Button title={"1"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"2"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"3"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"4"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"5"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"6"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"7"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />
                    <Button title={"8"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`} />

                </div>

            </div>

        </div>



    )
}

export default Group
