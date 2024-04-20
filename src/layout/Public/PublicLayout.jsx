import React from 'react'
import Button from '../../components/Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import ProfileImage from '../../assets/profile.png'
import Logo from '../../assets/logo.png'
import MovieBg from '../../assets/movieBg.jpg'
import Movie1 from '../../assets/movie1.webp'
import Movie4 from '../../assets/movie4.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { useNavigate } from 'react-router-dom'

const PublicLayout = () => {
    const disptach = useDispatch()
    const nav = useNavigate()
    const count = [1, 2, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989, 1, 20009, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656]

    return (
        <div className='flex flex-col h-[100%] overflow-y-auto'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-between items-center'>
                <p className='text-white text-lg font-semibold'>Public</p>
                <div className='flex gap-x-4 items-center'>
                    <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                    <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                        <GiHamburgerMenu />
                    </div>
                </div>

            </div>


            <div className='relative w-[100%] h-full mt-4'>
                {/* BACKGROUND BLUR IMAGE  */}
                <img src={MovieBg} alt="Background Image" className='absolute inset-0 w-full h-full object-cover blur-[2px] rounded-md' />

                <div className='relative z-10 py-3 w-full h-full flex flex-col'>

                    {/* LOGO  */}
                    <div className='flex justify-center items-center'>
                        <img src={Logo} alt="logo" />
                    </div>

                    {/* GLASSMORPHISM EFFECT */}
                    <div className='flex justify-center items-center flex-col mt-[3rem]'>

                        <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-[90%] md:w-[50%] p-2">
                            <h1 className='font-bold text-3xl text-center text-white'>Meet Our TV concierge</h1>
                            <p className='font-bold  text-center text-white mt-2 text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat obcaecati harum earum cupiditate mollitia nostrum incidunt.</p>
                            <div className='flex gap-x-3 justify-center items-center'>
                                {/* <Button title={"Signup"} className={`w-[7rem] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  bg-[#FBB101] text-white`} /> */}
                                <Button onClick={()=>nav("/admin/signin")} title={"Login"} className={`w-[7rem] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold bg-[#FBB101] text-white`} />
                            </div>
                        </div>

                    </div>

                    {/* MOVIE CATEGORY */}
                    <div className='flex justify-between flex-wrap items-center mb-5 px-2 sm:px-5 mt-10 '>
                        <div className='flex items-center overflow-auto  gap-x-4'>
                            <p className='text-white cursor-pointer text-nowrap'>Movie & Shows</p>
                            <p className='text-white cursor-pointer text-nowrap'>Live TV</p>
                            <p className='text-white cursor-pointer text-nowrap'>Your Music</p>
                            <p className='text-white cursor-pointer text-nowrap'>Your Media</p>
                            <p className='text-white cursor-pointer text-nowrap'>Discover</p>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <MdKeyboardArrowLeft className=' cursor-pointer text-white text-2xl' />
                            <MdKeyboardArrowRight className=' cursor-pointer text-white text-2xl' />
                        </div>

                    </div>

                    {/* LISTING  */}
                    <div className='flex justify-start items-center gap-5 flex-wrap px-2 sm:px-5 overflow-y-auto'>
                        {
                            count?.map((i, index) => (
                                <img key={i + index} src={index % 2 === 0 ? Movie1 : Movie4} className='h-[10rem] rounded-md cursor-pointer' />
                            ))
                        }
                    </div>


                </div>


            </div>







        </div>
    )
}

export default PublicLayout
