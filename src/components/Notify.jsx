import React from 'react'
import Button from './Button'

const Notify = ({ close }) => {
    return (
        <div className=' bg-[#1e1e1e] p-3 rounded-md text-white '>
            <p className='text-center'>Are you sure you want to permanently <br /> delete this movie?</p>
            <div className=' flex justify-between items-center mt-5'>
                <Button onClick={()=>close(false)} title={"Cancel"} className={`min-w-[8rem] h-[2.3rem] rounded-md bg-[#333333] text-white`} />
                <Button onClick={()=>close(false)} title={"Yes, am sure"} className={`min-w-[8rem] h-[2.3rem] rounded-md bg-[#FBB101] text-black`} />
            </div>
        </div>
    )
}

export default Notify
