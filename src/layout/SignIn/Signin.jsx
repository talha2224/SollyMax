import React from 'react'
import Button from '../../components/Button'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Signin = () => {

    const nav = useNavigate()
    return (
        <div className='w-screen h-screen bg-[#1E1E1E] flex justify-center items-center'>
            <div className="bg-white/30 shadow-md rounded-lg border border-gray-100/20 backdrop-blur-lg w-[90%] sm:[40%] md:w-[30%] lg:w-[30%] p-2">
                <div className='flex justify-center items-center mt-3'>
                    <img src={Logo} alt="" className=' text-center' />
                </div>
                <h1 className='font-bold text-3xl text-center text-white mt-2'>WELCOME BACK</h1>
                <p className='font-bold  text-center text-white mt-2 text-sm mb-2'>Enter your details in order to continue.</p>

                <input type="email" name="email" placeholder='Enter Your Email' className='w-[100%] h-[2.2rem] outline-none mb-2 px-3 rounded-md font-bold text-[#333333] placeholder:font-bold placeholder:text-[#333333]'/>
                <input type="password" name="password" placeholder='Enter Your Password' className='w-[100%] h-[2.2rem] outline-none mb-2 px-3 rounded-md font-bold text-[#333333] placeholder:font-bold placeholder:text-[#333333]'/>
                <p className='text-right mb-2'>Don't have an account? <span className='font-bold cursor-pointer text-[#33333]'>Register</span></p>
                <Button onClick={() => nav("/admin/home")} title={"Login"} className={`w-[100%] h-[2.2rem] rounded-md border-none cursor-pointer font-semibold bg-[#FBB101] text-white`} />
            </div>
        </div>
    )
}

export default Signin
