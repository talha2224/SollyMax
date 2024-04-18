import React, { useState } from 'react'
import Button from '../../components/Button'
import ProfileImage from '../../assets/profile.png'
import Logo from '../../assets/logo.png'
import MovieBg from '../../assets/movieBg.jpg'
import PayIcon from '../../assets/pay.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const [toogleBtn, settoogleBtn] = useState("Monthly")
    return (
        <div className='flex flex-col h-[100%] overflow-y-auto'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-between items-center'>
                <p className='text-white text-base font-semibold'>Payment integration {'>'} Edit pricing plans</p>


                <div className='flex gap-x-6 items-center'>
                    <div className='hidden sm:flex gap-x-3 items-center'>
                        <Button onClick={() => settoogleBtn("Monthly")} title={"Monthly"} className={`w-[6rem] h-[2rem] rounded-md font-semibold ${toogleBtn === "Monthly" ? "bg-[#FBB101] text-[#1E1E1E]" : "text-white bg-none"}`} />
                        <Button onClick={() => settoogleBtn("Yearly")} title={"Yearly"} className={`w-[6rem] h-[2rem] rounded-md font-semibold ${toogleBtn === "Yearly" ? "bg-[#FBB101] text-[#1E1E1E]" : "text-white bg-none"}`} />
                    </div>
                    <div className='flex gap-x-4 items-center'>
                        <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                        <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                            <GiHamburgerMenu />
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex sm:hidden gap-x-3 items-center mt-4'>
                <Button onClick={() => settoogleBtn("Monthly")} title={"Monthly"} className={`w-[6rem] h-[2rem] rounded-md font-semibold ${toogleBtn === "Monthly" ? "bg-[#FBB101] text-[#1E1E1E]" : "text-white bg-none"}`} />
                <Button onClick={() => settoogleBtn("Yearly")} title={"Yearly"} className={`w-[6rem] h-[2rem] rounded-md font-semibold ${toogleBtn === "Yearly" ? "bg-[#FBB101] text-[#1E1E1E]" : "text-white bg-none"}`} />
            </div>

            <div className='flex justify-center items-center gap-10 mt-10 overflow-x-auto flex-wrap'>
                <div className='min-w-[20rem] flex-1 p-3 bg-[#212121] h-fit rounded-md'>
                    <p className='text-white font-bold mb-2'>Plan name</p>
                    <input type="text" placeholder='eg.Basic' className='w-[100%] mt-2 h-[3rem] text-[#A3A3A3] font-semibold rounded-md px-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />
                    <p className='text-white font-bold mb-2 mt-4'>Description</p>
                    <textarea type="text" placeholder='Description' className='w-[100%] mt-2 h-[5rem] text-[#A3A3A3] font-semibold rounded-md resize-none p-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />

                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center gap-x-2'>
                            <div className='bg-[#333333] w-[5rem] h-[3rem] rounded-md flex items-center px-3'>
                                <p className='text-white font-semibold'>$ 0.00</p>
                            </div>
                            <div>
                                <p className='text-white font-semibold text-sm'>/ {toogleBtn==="Monthly"?"month":"year"}</p>
                            </div>
                        </div>
                        <div>
                            <Button title={"Save"} className={`w-[6rem] h-[2.5rem] font-semibold rounded-md bg-[#FBB101] text-black`}/>
                        </div>
                    </div>

                </div>
                <div className='min-w-[20rem] flex-1 p-3 bg-[#212121] h-fit rounded-md'>
                    <p className='text-white font-bold mb-2'>Plan name</p>
                    <input type="text" placeholder='eg.Basic' className='w-[100%] mt-2 h-[3rem] text-[#A3A3A3] font-semibold rounded-md px-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />
                    <p className='text-white font-bold mb-2 mt-4'>Description</p>
                    <textarea type="text" placeholder='Description' className='w-[100%] mt-2 h-[5rem] text-[#A3A3A3] font-semibold rounded-md resize-none p-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />

                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center gap-x-2'>
                            <div className='bg-[#333333] w-[5rem] h-[3rem] rounded-md flex items-center px-3'>
                                <p className='text-white font-semibold'>$ 0.00</p>
                            </div>
                            <div>
                                <p className='text-white font-semibold text-sm'>/ {toogleBtn==="Monthly"?"month":"year"}</p>
                            </div>
                        </div>
                        <div>
                            <Button title={"Save"} className={`w-[6rem] h-[2.5rem] font-semibold rounded-md bg-[#FBB101] text-black`}/>
                        </div>
                    </div>

                </div>
                <div className='min-w-[20rem] flex-1 p-3 bg-[#212121] h-fit rounded-md'>
                    <p className='text-white font-bold mb-2'>Plan name</p>
                    <input type="text" placeholder='eg.Basic' className='w-[100%] mt-2 h-[3rem] text-[#A3A3A3] font-semibold rounded-md px-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />
                    <p className='text-white font-bold mb-2 mt-4'>Description</p>
                    <textarea type="text" placeholder='Description' className='w-[100%] mt-2 h-[5rem] text-[#A3A3A3] font-semibold rounded-md resize-none p-4 outline-none border-none bg-[#333333] placeholder:text-[#A3A3A3]' />

                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex items-center gap-x-2'>
                            <div className='bg-[#333333] w-[5rem] h-[3rem] rounded-md flex items-center px-3'>
                                <p className='text-white font-semibold'>$ 0.00</p>
                            </div>
                            <div>
                                <p className='text-white font-semibold text-sm'>/ {toogleBtn==="Monthly"?"month":"year"}</p>
                            </div>
                        </div>
                        <div>
                            <Button title={"Save"} className={`w-[6rem] font-semibold h-[2.5rem] rounded-md bg-[#FBB101] text-black`}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Edit
