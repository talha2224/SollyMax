import React, { useState } from 'react'
import ProfileImage from '../../assets/profile.png'
import GalleryImage from '../../assets/gallery.png'
import RightArrow from '../../assets/right.png'
import DownArrow from '../../assets/down.png'
import File from '../../assets/file.png'
import Link from '../../assets/link.png'
import Button from '../../components/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toogle } from '../../store/sidebar.slice'

const EditLayout = () => {
    const disptach = useDispatch()
    const count = [1, 2, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989, 1, 20009, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656]
    const [dropDown, setdropDown] = useState({ key: "", show: false })
    const [quality, setQuality] = useState("Hd")
    const [country, setCountry] = useState("Pakistan")
    const [genere, setGenere] = useState("Genere")
    const [category, setCategory] = useState("Movie")


    return (
        <div className='flex flex-col h-[100%] overflow-y-auto'>

            {/* NAV BAR  BUTTONS AND PROFILE ICON */}
            <div className='flex justify-between items-center'>
                <p className='text-white text-lg font-semibold'>Edit  movie</p>
                <div className='flex gap-x-4 items-center'>
                    <img src={ProfileImage} alt="ProfileImage" loading='true' className='cursor-pointer' />
                    <div onClick={() => disptach(toogle())} className='lg:hidden flex justify-center items-center w-[2rem] h-[2rem] bg-[#FBB101] text-white rounded-md cursor-pointer'>
                        <GiHamburgerMenu />
                    </div>
                </div>

            </div>

            <div className='shadow-shadow2 mt-4 w-[100%] h-[100%] overflow-y-auto md:h-[30rem] rounded-[12px] bg-[#212121] p-3 flex justify-center items-start gap-x-6 md:flex-row flex-col  '>

                <div className='flex-none md:flex-1 w-[100%] mt-[18rem] md:mt-0 md:mb-0 mb-2 bg-[#333333] h-[10rem] md:h-[100%]  rounded-[22px] flex justify-center items-center flex-col'>
                    <img src={GalleryImage} alt="gallery-icon" />
                    <p className='text-white text-lg mb-2 mt-2'>Upload cover image</p>
                    <p className='text-white text-lg '>(220 x 100)</p>
                </div>

                <div className='flex-none md:flex-1 w-[100%] h-fit md:h-[100%] rounded-md md:mb-0 mb-2'>
                    <h1 className='text-white mb-2 '>Movie title</h1>
                    <input type="text" name="title" placeholder='Title' className='text-white w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md placeholder:text-white' />
                    <h1 className='text-white mb-2 mt-2 '>Description</h1>
                    <textarea type="text" name="description" placeholder='Description' className='text-white w-[100%] bg-[#333333] p-3 outline-none border-none h-[5.5rem] rounded-md placeholder:text-white resize-none' />

                    <div className='flex justify-center items-center gap-x-3 w-[100%] mt-3'>
                        <input type="text" name="title" placeholder='Release year' className='text-white flex-1 w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md placeholder:text-white' />
                        <input type="text" name="title" placeholder='Running time in' className='text-white flex-1 w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md placeholder:text-white' />
                    </div>

                    <div className='flex justify-center items-center gap-x-3 w-[100%] mt-3'>

                        <div onClick={() => setdropDown({ show: !dropDown.show, key: "quality" })} className=' relative text-white flex-1 cursor-pointer w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md flex justify-between items-center'>
                            <h1 className='text-white'>{quality}</h1>
                            <img src={dropDown.key === "quality" && dropDown.show ? DownArrow : RightArrow} alt="" />
                            {
                                (dropDown.key === "quality" && dropDown.show) && (
                                    <div className=' absolute top-[2rem] right-0 left-0 w-full h-fit px-3 bg-[#333333] rounded-br-md rounded-bl-md z-50 pb-2'>
                                        <p onClick={() => setQuality("Full Hd")} className='mt-2 text-white cursor-pointer'>FullHd</p>
                                        <p onClick={() => setQuality("Hd")} className='mt-2 text-white cursor-pointer'>Hd</p>
                                    </div>
                                )
                            }
                        </div>

                        <input type="number" name="age" placeholder='Age' className='text-white flex-1 w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md placeholder:text-white' />
                    </div>

                    <div className='flex justify-center items-center gap-x-3 w-[100%] mt-3'>

                        <div onClick={() => setdropDown({ show: !dropDown.show, key: "country" })} className=' relative text-white flex-1 cursor-pointer w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md flex justify-between items-center'>
                            <h1 className='text-white'>{country}</h1>
                            <img src={dropDown.key === "country" && dropDown.show ? DownArrow : RightArrow} alt="" />
                            {
                                (dropDown.key === "country" && dropDown.show) && (
                                    <div className=' absolute top-[2rem] right-0 left-0 w-full h-fit px-3 bg-[#333333] rounded-br-md rounded-bl-md z-50 pb-2'>
                                        <p onClick={() => setCountry("Country 1")} className='mt-2 text-white cursor-pointer'>Country</p>
                                        <p onClick={() => setCountry("Country 2")} className='mt-2 text-white cursor-pointer'>Country 2</p>
                                        <p onClick={() => setCountry("Country 3")} className='mt-2 text-white cursor-pointer'>Country 3</p>
                                        <p onClick={() => setCountry("Country 4")} className='mt-2 text-white cursor-pointer'>Country 4</p>
                                    </div>
                                )
                            }
                        </div>

                        <div onClick={() => setdropDown({ show: !dropDown.show, key: "genere" })} className=' relative text-white flex-1 cursor-pointer w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.5rem] rounded-md flex justify-between items-center'>
                            <h1 className='text-white'>{genere}</h1>
                            <img src={dropDown.key === "genere" && dropDown.show ? DownArrow : RightArrow} alt="" />
                            {
                                (dropDown.key === "genere" && dropDown.show) && (
                                    <div className=' absolute top-[2rem] right-0 left-0 w-full h-fit px-3 bg-[#333333] rounded-br-md rounded-bl-md  z-50 pb-2'>
                                        <p onClick={() => setGenere("Genere 1")} className='mt-2 text-white cursor-pointer'>Genere 1</p>
                                        <p onClick={() => setGenere("Genere 2")} className='mt-2 text-white cursor-pointer'>Genere 2</p>
                                        <p onClick={() => setGenere("Genere 3")} className='mt-2 text-white cursor-pointer'>Genere 3</p>
                                        <p onClick={() => setGenere("Genere 4")} className='mt-2 text-white cursor-pointer'>Genere 4</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>

                <div className='flex-none md:flex-1 w-[100%]'>
                    <h1 className='text-white mb-2 '>Upload Photos</h1>
                    <div className='text-white w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.8rem] rounded-md flex items-center gap-x-3'>
                        <img src={GalleryImage} alt="" />
                        <p>filename</p>
                    </div>


                    <h1 className='text-white mb-2 mt-2 '>Category</h1>
                    <div className='flex items-center gap-x-3'>
                        <Button title={"Movies"} onClick={()=>setCategory("Movie")} className={`w-[7rem] h-[2.5rem] rounded-md ${category==="Movie" ? "bg-[#FBB101] text-black" :"bg-[#333333] text-white"}`} />
                        <Button title={"Tv Shows"} onClick={()=>setCategory("Tv Shows")} className={`w-[7rem] h-[2.5rem] rounded-md ${category==="Tv Shows" ? "bg-[#FBB101] text-black" :"bg-[#333333] text-white"}`} />
                    </div>

                    <div className='text-white mt-3 w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.8rem] rounded-md flex items-center gap-x-3'>
                        <img src={File} alt="" />
                        <p>filename</p>
                    </div>

                    <div className='text-white mt-3 w-[100%] bg-[#333333] px-3 outline-none border-none h-[2.8rem] rounded-md flex items-center gap-x-3'>
                        <img src={Link} alt="" />
                        <p>Or add a link</p>
                    </div>

                    <Button title={"Publish"}  className={`w-[100%] h-[2.5rem] rounded-md bg-[#FBB101] text-black mt-2  md:mt-[3.3rem]`} />



                </div>


            </div>
        </div>
    )
}

export default EditLayout
