import React from 'react'
import Movie1 from '../assets/movie2.webp'
import Movie2 from '../assets/movie4.jpeg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Listing = ({ title }) => {
  const count = [1, 2, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989, 1, 20009, 3, 4, 6, 98, 66, 78, 0, 92, 7667, 900, 656, 989,]

  return (
    <div>
      <div className='flex justify-between items-center mb-5 overflow-auto mt-6 '>
        <p className='text-lg text-white font-bold'>{title}</p>
        <div className='flex items-center gap-x-2'>
          <MdKeyboardArrowLeft className=' cursor-pointer text-white text-2xl' />
          <MdKeyboardArrowRight className=' cursor-pointer text-white text-2xl' />
        </div>

      </div>
      <div className='flex justify-start items-center gap-4 overflow-x-auto'>
        {
          count?.map((i, index) => (
            <img key={i + index} src={index % 2 === 0 ? Movie1 : Movie2} className='h-[10rem] rounded-md' />
          ))
        }
      </div>
    </div>
  )
}

export default Listing
