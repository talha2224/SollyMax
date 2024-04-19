import React from 'react'
import Movie1 from '../assets/movie2.webp'
import Movie2 from '../assets/movie4.jpeg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Listing = ({ title }) => {
  const count = [1, 2, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989, 1, 20009, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989,]

  return (
    <div className='relative mt-[5rem]'>
      <div className='flex justify-between items-center mb-5 overflow-auto mt-6 -z-10 '>
        <p className='text-lg text-white font-bold'>{title}</p>
        <div className='flex items-center gap-x-2'>
          <MdKeyboardArrowLeft className=' cursor-pointer text-white text-2xl' />
          <MdKeyboardArrowRight className=' cursor-pointer text-white text-2xl' />
        </div>

      </div>
      <div className='flex justify-start items-center gap-4 overflow-x-auto -z-10'>
        {
          count?.map((i, index) => (
            <img key={i + index} src={index % 2 === 0 ? Movie1 : Movie2} className='h-[10rem] rounded-md' />
          ))
        }
      </div>

      <div className='absolute right-[0rem] z-50 top-0 '>
        <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-fit sm:w-[18rem] h-[17rem] p-2 overflow-y-auto">

          <div className='flex justify-between items-center w-[100%] font-bold'>
            <h1 className='text-white font-bold'>Recently Playing</h1>
            <div className='flex items-center gap-x-2'>
              <h1 className='text-white font-bold'>More</h1>
              <MdKeyboardArrowRight className='text-white' />
            </div>
          </div>

          {
            count?.map((i, index) => (
              <div key={index} className='flex justify-between items-start w-[100%] text-white mt-4'>

                <div className='flex gap-x-3 items-center'>
                  <div>
                    <img src={Movie2} alt="" className='h-[3rem] rounded-md' />
                  </div>
                  <div>
                    <p className='text-white truncate text-nowrap w-[7rem] font-bold'>3 Body Probelm</p>
                    <p className='text-white font-bold'>24-03-21</p>
                  </div>

                </div>
                <div>
                  <p className='text-white font-bold'>1:40 pm</p>
                </div>
              </div>
            ))
          }



        </div>
      </div>
    </div>
  )
}

export default Listing
