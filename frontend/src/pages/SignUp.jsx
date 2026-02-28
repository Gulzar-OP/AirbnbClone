import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import { userDataContext } from '../Context/UserContext';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    let serverUrl = useContext(authDataContext)
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [userData,setUserData] = useContext(userDataContext)
    const handleSignUP = async()=>{
        // handle sign up logic
        try{
            e.preventDefault()
            let result = await axios.post(serverUrl +"/api/auth/signup",{
                name,
                email,
                password
            },{withCredentials:true})
            setUserData(result.data)
            navigate("/")
            console.log(result)
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4'>
            <button
                className='absolute top-6 left-6 md:top-8 md:left-8 p-2 hover:bg-white/50 rounded-full transition-all duration-200 z-10 cursor-pointer'
                onClick={() => navigate('/')}
                aria-label="Back to home"
            >
                <FaArrowLeft size={24} />
            </button>
            
            <form 
                action="" 
                className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center space-y-6 border border-gray-100'
                onSubmit={handleSignUP}
            >
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center'>Welcome to Airbnb</h1>
                
                <div className='w-full space-y-3'>
                    <label htmlFor="name" className='text-sm font-medium text-gray-700 block'>Username</label>
                    <input 
                        type="text" 
                        name='name' 
                        id='name' 
                        placeholder='Name' 
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200'
                        onChange={(e)=>setName(e.target.value)} 
                        value={name}
                    />
                </div>
                
                <div className='w-full space-y-3'>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700 block'>Email</label>
                    <input 
                        type="text" 
                        name='email' 
                        id='email' 
                        placeholder='Email' 
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200'
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email} 
                    />
                </div>
                
                <div className='w-full space-y-3 relative'>
                    <label htmlFor="password" className='text-sm font-medium text-gray-700 block'>Password</label>
                    <div className='relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200"
                            onChange={(e)=>setPassword(e.target.value)} 
                            value={password}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={()=>{setShowPassword(prev => !prev)}}
                        >
                            {!showPassword ? (
                                <FaEye size={20} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
                            ) : (
                                <FaEyeSlash size={20} className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
                            )}
                        </button>
                    </div>
                </div>

                <button 
                    className='w-full py-4 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'
                    type="submit"
                >
                    Sign Up
                </button>
                
                <p className='text-sm text-gray-600 text-center'>
                    Already have an account ?{' '}
                    <span 
                        className='font-semibold text-red-500 hover:text-red-600 transition-colors cursor-pointer' 
                        onClick={()=>navigate('/login')}
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    )
}
