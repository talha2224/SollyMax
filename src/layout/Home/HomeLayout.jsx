import React, { useState } from 'react'
import Button from '../../components/Button'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { moviePoster } from '../../constant/poster'
import ProfileImage from '../../assets/profile.png'
import Logo from '../../assets/logo.png'
import MovieBg from '../../assets/movieBg.jpg'
import Movie1 from '../../assets/movie1.webp'
import Movie4 from '../../assets/movie4.jpeg'
import { FaPlay } from 'react-icons/fa'
import Listing from '../../components/Listing'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { useNavigate } from 'react-router-dom'




const HomeLayout = () => {

  const disptach = useDispatch()
  const [registerType, setregisterType] = useState("pre")
  const [currentIndex, setcurrentIndex] = useState(0)
  const count = [1, 2, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989, 1, 20009, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656]

  const backPoster = () => {
    let posterLength = moviePoster.length - 1
    currentIndex === 0 ? setcurrentIndex(posterLength) : setcurrentIndex(currentIndex - 1)
  }

  const forwardPoster = () => {
    let posterLength = moviePoster.length - 1
    currentIndex === posterLength ? setcurrentIndex(0) : setcurrentIndex(currentIndex + 1)
  }

  const nav = useNavigate()


  return (
    <div className='flex flex-col h-[100%] overflow-y-auto'>

      {/* NAV BAR  BUTTONS AND PROFILE ICON */}
      <div className='flex justify-between items-center'>

        <div className='flex gap-x-3'>
          <Button onClick={() => setregisterType("pre")} title={"Pre-register"} className={`w-[7rem] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  ${registerType === "pre" ? "bg-[#FBB101] text-blck" : "bg-none text-white"}`} />
          <Button onClick={() => setregisterType("registered")} title={"Registered"} className={`w-[7rem] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold ${registerType === "registered" ? "bg-[#FBB101] text-blck" : "bg-none text-white"}`} />
        </div>

        <div className='flex gap-x-4 items-center'>
          <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
          <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
            <GiHamburgerMenu />
          </div>
        </div>

      </div>

      {/* PRE REGISTER CONTENT  */}
      {
        registerType === "pre" ?
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
          :
          <div className='w-[100%] h-full mt-4 overflow-y-auto'>

            <div style={{ backgroundImage: `url(${moviePoster[currentIndex].image})` }} className='w-full bg-cover h-[25rem] rounded-md'>

              <div className='flex items-center h-[100%]'>

                <div className='flex items-start justify-between h-[full] w-[100%]'>
                  <div className='flex gap-x-8'>
                    <MdKeyboardArrowLeft onClick={forwardPoster} className='text-6xl font-bold text-white cursor-pointer' />
                    <div>
                      <h1 className='text-2xl text-white font-bold'>3 Body Problem</h1>
                      <div className='flex gap-x-3 items-center'>
                        <Button title={"Watch Now"} className={`w-[7rem] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold  bg-[#FBB101] text-white`} />
                        <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex justify-center items-center cursor-pointer'>
                          <FaPlay className='text-[#FBB101] mr-[0px]' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=' '>
                    <MdKeyboardArrowRight onClick={backPoster} className='text-6xl font-bold text-white cursor-pointer' />
                  </div>
                </div>


              </div>

              <div className='w-[100%] pb-10'>
                <Listing title={"Top Rated Movies"} />
                <Listing title={"Action Movies"} />
                <Listing title={"Commedy Movies"} />
                <Listing title={"Horror Movies"} />
                <Listing title={"Romance Movies"} />

              </div>

            </div>

          </div>
      }






    </div>
  )
}

export default HomeLayout
