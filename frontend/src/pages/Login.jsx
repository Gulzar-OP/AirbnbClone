import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    
    return (
        <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4'>
            <button
                className='absolute top-6 left-6 md:top-8 md:left-8 p-2 hover:bg-white/50 rounded-full transition-all duration-200 z-10
                cursor-pointer'
                onClick={() => navigate('/')}
                aria-label="Back to home"
            >
                <FaArrowLeft size={24} />
            </button>
            
            <form className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center space-y-6 border border-gray-100'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center'>Welcome to Airbnb</h1>
                
                <div className='w-full space-y-3'>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700 block'>Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        placeholder='Enter your email'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                    />
                </div>
                
                <div className='w-full space-y-3 relative'>
                    <label htmlFor="password" className='text-sm font-medium text-gray-700 block'>Password</label>
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? (
                                <FaEyeSlash size={20} className="text-gray-400 hover:text-gray-600 transition-colors" />
                            ) : (
                                <FaEye size={20} className="text-gray-400 hover:text-gray-600 transition-colors" />
                            )}
                        </button>
                    </div>
                </div>

                <button 
                    type="submit"
                    className='w-full py-4 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'
                >
                    Login
                </button>
                
                <p className='text-sm text-gray-600 text-center'>
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate('/signUp')}
                        className='font-semibold text-red-500 hover:text-red-600 transition-colors'
                    >
                        Sign up
                    </button>
                </p>
            </form>
        </div>
    )
}
