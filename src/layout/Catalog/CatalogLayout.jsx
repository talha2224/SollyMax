import React, { useState } from 'react'
import ProfileImage from '../../assets/profile.png'
import Unlock from '../../assets/unlock.png'
import Star from '../../assets/star.png'
import Edit from '../../assets/edit.png'
import File from '../../assets/file.png'
import Trash from '../../assets/trash.png'
import Button from '../../components/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'
import { FaSearch } from 'react-icons/fa'
import Notify from '../../components/Notify'
import { useNavigate } from 'react-router-dom'

const CatalogLayout = () => {
    const disptach = useDispatch()
    const [movieType, setMovieType] = useState("Action")
    const count = [1, 2, 3, 4, 4, 5, 6, 6, 6766, 7, 67, 7, 65,]
    const [notify, setNotify] = useState(false)
    const nav = useNavigate()

    return (
        <div className='flex flex-col h-[100%] overflow-auto relative'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-between items-center'>
                <p className='text-white text-lg font-semibold'>Catalog</p>
                <div className='flex items-center gap-x-3'>
                    <div className='hidden sm:flex gap-x-4 items-center w-[16rem] h-[2.3rem] rounded-md border border-[white] text-white px-3'>
                        <FaSearch className='text-white' />
                        <input type="text" name="" id="" placeholder='Search movie & tv series' className='flex-1 outline-none bg-transparent border-none placeholder:text-white' />
                    </div>
                    <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                    <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                        <GiHamburgerMenu />
                    </div>
                </div>

            </div>

            {/* RESPONSIVE SEARCH BAR  */}
            <div className='sm:hidden flex gap-x-4 items-center w-[100%] mt-3 h-[2.3rem] rounded-md border border-[white] text-white px-3'>
                <FaSearch className='text-white' />
                <input type="text" name="" id="" placeholder='Search movie & tv series' className='flex-1 outline-none bg-transparent border-none placeholder:text-white' />
            </div>

            {/* FILTERS  */}
            <div className='flex gap-x-5 items-center mt-3 overflow-x-auto'>
                <Button title={"Action"} onClick={() => setMovieType("Action")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Action" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Romance"} onClick={() => setMovieType("Romance")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Romance" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Horror"} onClick={() => setMovieType("Horror")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Horror" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Documentary"} onClick={() => setMovieType("Documentary")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Documentary" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Comedy"} onClick={() => setMovieType("Comedy")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Comedy" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Upcoming"} onClick={() => setMovieType("Upcoming")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Upcoming" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Top Rated"} onClick={() => setMovieType("Top Rated")} className={`min-w-[5rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Top Rated" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />
                <Button title={"Recently Added"} onClick={() => setMovieType("Recently Added")} className={`min-w-[8rem] max-w-[10rem] h-[2rem] rounded-md border-none ${movieType === "Recently Added" ? "bg-[#FBB101] text-black" : "bg-none text-white"}`} />

            </div>

            {/* TABLE  */}

            <div className='flex-1 flex flex-col items-center  w-[100%] h-[100%] shadow-shadow2 bg-[#333333] rounded-[12px] overflow-auto mt-3'>
                
                <div className=' w-[90%] h-[80%] m-5 overflow-y-auto'>
                    {/* HEAD  */}
                    <div className='flex items-center gap-x-6 text-white overflow-auto'>
                        <p className='flex-1 text-nowrap'>Title</p>
                        <p className='flex-1 text-nowrap'>Rating</p>
                        <p className='flex-1 text-nowrap'>Category</p>
                        <p className='flex-1 text-nowrap'>Views</p>
                        <p className='flex-1 text-nowrap'>Date Created</p>
                        <p className='flex-1 text-nowrap'>Action</p>
                    </div>

                    {/* DATA  */}
                    {
                        count.map((i,index)=>(
                            <div className='flex items-center gap-x-6 text-white bg-[#1E1E1E] rounded-md mt-6 overflow-auto h-[3rem] p-2'>

                                <div className='flex gap-x-3 items-center  h-[3rem]  flex-1 '>
                                    <div className='w-[2rem] h-[2rem] flex justify-center items-center  bg-[#ec0c0c333] '>
                                        <img src={File} alt="" className='h-[1rem] mt-[5px]' />
                                    </div>
                                    <p className='mt-[2px]'>filename</p>
                                </div>

                                <div className='flex gap-x-3 items-center  h-[3rem]flex-1 '>
                                        <img src={Star} alt="" className=' ' />
                                    <p className='mt-[2px]'>8.1</p>
                                </div>

                                <div className='flex gap-x-3 items-center justify-center h-[3rem] flex-1 '>
                                    <p className='mt-[2px]'>Movies</p>
                                </div>

                                <div className='flex gap-x-3 items-center justify-center h-[3rem] flex-1 '>
                                    <p className='mt-[2px]'>2000</p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-center h-[3rem] flex-1 '>
                                    <p className='mt-[2px]'>02/02/2024</p>
                                </div>
                                <div className='flex gap-x-3 items-center justify-center h-[3rem] flex-1 ml-3 '>
                                    <img src={Unlock} alt="" className=' cursor-pointer' />
                                    <img onClick={()=>setNotify(true)} src={Trash} alt="" className=' cursor-pointer' />
                                    <img onClick={()=>nav(`/admin/movie/edit/123`)} src={Edit} alt="" className=' cursor-pointer' />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='w-[90%] flex sm:justify-end mt-4 gap-x-3 overflow-x-auto'>
                    <Button title={"Page 1 of 8"} className={`min-w-[8rem] h-[2.3rem] rounded-md bg-[#FBB101]`}/>
                    <Button title={"1"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"2"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"3"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"4"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"5"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"6"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"7"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>
                    <Button title={"8"} className={`min-w-[2rem] h-[2.3rem] rounded-md bg-[#696969] text-white shadow-shadow2`}/>

                </div>

            </div>

            {
                notify && (
                    <div className='fixed top-0 left-0 w-screen h-screen bg-[#333333] bg-opacity-50 flex justify-center items-center'>
                        <div className='flex justify-center items-center w-[100%] h-[100%]'>
                            <Notify close={setNotify}/>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CatalogLayout
