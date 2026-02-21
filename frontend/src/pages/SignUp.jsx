import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col rounded-lg shadow-lg p-8
         md:items-start '>
            <h1 className='text-[30px] text-[black]'>Welcome to Airbnb</h1>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]'>
                <label htmlFor="name">Username</label>
                <input type="text" name='name' id='name' placeholder='Name' className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
            </div>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] '>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' placeholder='Email' className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
            </div>
            <div className='w-[90%] flex items-start justify-start flex-col gap-[10px] relative'>
                <label htmlFor="password">Password</label>

                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="border-2 border-gray-300 rounded-md p-2 w-full mb-4 pr-10"
                />

                {!showPassword &&
                    <FaEye size={22} className="absolute right-3 top-[45px] cursor-pointer" 
                    onClick={()=>{setShowPassword(prev => !prev)}} 
                />}
                {showPassword && 
                    <FaEyeSlash size={22} className="absolute right-3 top-[45px] cursor-pointer" 
                    onClick={()=>{setShowPassword(prev => !prev)}}
                />}
            </div>

            <button 
                className='px-2 py-3 bg-red-500 rounded-2xl w-full text-white text-2xl mt-5'>
                Sign Up
            </button>
            <p className=' mt-5'>Already have an account ? <span className='text-red-400' 
            onClick={()=>navigate('/login')}>Login</span></p>
        </form>
        
    </div>
  )
}
