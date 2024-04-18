import React from 'react'
import Button from '../../components/Button'
import ProfileImage from '../../assets/profile.png'
import Logo from '../../assets/logo.png'
import MovieBg from '../../assets/movieBg.jpg'
import PayIcon from '../../assets/pay.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { useNavigate } from 'react-router-dom'

const Integration = () => {
    const disptach = useDispatch()
    const nav = useNavigate()

    return (
        <div className='flex flex-col h-[100%] overflow-y-auto'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-between items-center'>
                <p className='text-white text-lg font-semibold'>Payment integration</p>
                <div className='flex gap-x-4 items-center'>
                    <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                    <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                        <GiHamburgerMenu />
                    </div>
                </div>

            </div>

            <div className='bg-[#212121] px-4 py-6 mt-4 rounded-md flex justify-between items-center'>

                <div className='flex gap-x-3 justify-center items-center py-2 px-7 rounded-md bg-[#333333]'>
                    <img src={PayIcon} alt="" />
                    <p className='text-white font-bold text-lg'>Paystack</p>
                </div>

                <div onClick={()=>nav("/admin/payment/integration/edit")} className='flex gap-x-3 justify-center items-center p-2 rounded-md bg-[#333333] cursor-pointer'>
                    <p className='text-white font-bold text-base'>Edit Plans</p>
                </div>

            </div>


            <div className='relative w-[100%] h-fit mt-4'>
                {/* BACKGROUND BLUR IMAGE  */}
                <img src={MovieBg} alt="Background Image" className='absolute inset-0 w-full h-full object-cover blur-[2px] rounded-md' />

                <div className='relative z-10 py-3 w-full h-full flex flex-col'>

                    {/* LOGO  */}
                    <div className='flex justify-center items-center'>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className='flex justify-between items-center mt-4 p-5'>
                        <div>
                            <h1 className='text-white mb-1 text-lg font-bold'>Choose the plan that righ for you</h1>
                            <p className='text-white  text-base font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> Eaque autem iusto optio officiis repellendus, omnis commodi corrupti pariatur</p>
                        </div>

                        <div className='flex gap-x-3 items-center'>
                            <Button title={"Monthly"} className={`w-[5rem] h-[2.3rem] rounded-md bg-[#FBB101] text-white`} />
                            <Button title={"Yearly"} className={`w-[5rem] h-[2.3rem] rounded-md bg-[#ffff] text-[#FBB101]`} />

                        </div>
                    </div>

                    {/* GLASSMORPHISM EFFECT */}

                    <div className='flex gap-3 items-center justify-center md:flex-row flex-col mt-[3rem] p-5'>
                        <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-[90%] md:w-[30%] p-2">
                            <h1 className='font-bold text-2xl text-white'>Solly Basic</h1>
                            <p className='font-bold  text-white mt-2 text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mai.</p>
                            <h1 className='font-bold text-3xl text-white mt-2 mb-3'>$9.99/month</h1>
                            <div className='flex gap-x-3 justify-center items-center'>
                                <Button title={"Free Trial"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  bg-[#ffff] text-[#FBB101]`} />
                                <Button title={"Choose Plan"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold bg-[#FBB101] text-white`} />
                            </div>
                        </div>

                        <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-[90%] md:w-[30%] p-2">
                            <h1 className='font-bold text-2xl text-white'>Solly Basic</h1>
                            <p className='font-bold  text-white mt-2 text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mai.</p>
                            <h1 className='font-bold text-3xl text-white mt-2 mb-3'>$9.99/month</h1>
                            <div className='flex gap-x-3 justify-center items-center'>
                                <Button title={"Free Trial"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  bg-[#ffff] text-[#FBB101]`} />
                                <Button title={"Choose Plan"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold bg-[#FBB101] text-white`} />
                            </div>
                        </div>

                        <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-[90%] md:w-[30%] p-2">
                            <h1 className='font-bold text-2xl text-white'>Solly Basic</h1>
                            <p className='font-bold  text-white mt-2 text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mai.</p>
                            <h1 className='font-bold text-3xl text-white mt-2 mb-3'>$9.99/month</h1>
                            <div className='flex gap-x-3 justify-center items-center'>
                                <Button title={"Free Trial"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  bg-[#ffff] text-[#FBB101]`} />
                                <Button title={"Choose Plan"} className={`flex-1 h-[2.2rem] rounded-md border-none cursor-pointer font-semibold bg-[#FBB101] text-white`} />
                            </div>
                        </div>

                    </div>


                    {/* MOVIE CATEGORY */}


                </div>


            </div>







        </div>
    )
}

export default Integration
