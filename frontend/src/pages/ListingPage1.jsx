import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
export default function ListingPage1() {
    const navigate = useNavigate()
  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative
    overflow-auto'>
        <form action="" className='max-w-[900px] w-[90%] h-[700px] flex items-center
        justify-start flex-col md:items-start gap-[10px]'>
                <div className='w-[50px] h-[50px] bg-red-500 cursor-pointer absolute top-[5%] left-[20px] rounded-full
                flex items-center justify-center' onClick={()=>navigate("/")}>
                    <FaArrowLeft size={24} className='text-white' />
                    

                </div>
                <div className='w-[200px] h-[50px] text-[20px] text-2xl bg-[#f14242] text-white rounded-md flex items-center justify-center absolute top-[5%]
                right-[20px] shadow-2xl'>
                        setup
                    
                </div>

                <div className='w-full space-y-3'>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700 block'>Title</label>
                    <input 
                        type="text" 
                        name='title' 
                        id='title' 
                        placeholder='Enter your Title'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                

        
                <div className='w-full space-y-3'>
                    <label htmlFor="description" className='text-sm font-medium text-gray-700 block'>Description</label>
                    <textarea 
                        type="text" 
                        name='description' 
                        id='description' 
                        placeholder='Enter your Description'
                        className='w-full h-30 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                <div className='w-full space-y-3'>
                    <label htmlFor="image1" className='text-sm font-medium text-gray-700 block'>Image 1</label>
                    <input 
                        type="file" 
                        name='image1' 
                        id='image1' 
                        placeholder='Upload Image 1'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                <div className='w-full space-y-3'>
                    <label htmlFor="image2" className='text-sm font-medium text-gray-700 block'>Image 2</label>
                    <input 
                        type="file" 
                        name='image2' 
                        id='image2' 
                        placeholder='Upload Image 2'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                <div className='w-full space-y-3'>
                    <label htmlFor="image3" className='text-sm font-medium text-gray-700 block'>Image 3</label>
                    <input 
                        type="file" 
                        name='image3' 
                        id='image3' 
                        placeholder='Upload Image 3'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
           
                <div className='w-full space-y-3'>
                    <label htmlFor="rent" className='text-sm font-medium text-gray-700 block'>Rent</label>
                    <input 
                        type="text" 
                        name='rent' 
                        id='rent' 
                        placeholder='Enter your Rent'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                <div className='w-full space-y-3'>
                    <label htmlFor="city" className='text-sm font-medium text-gray-700 block'>City</label>
                    <input 
                        type="text" 
                        name='city' 
                        id='city' 
                        placeholder='Enter your City'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
                <div className='w-full space-y-3'>
                    <label htmlFor="landmark" className='text-sm font-medium text-gray-700 block'>Landmark</label>
                    <input 
                        type="text" 
                        name='landmark' 
                        id='landmark' 
                        placeholder='Enter your Landmark'
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-200' 
                        required 
                    />
                </div>
            <button className='w-50 bg-red-500 text-white p-[10px] rounded-md mt-5 mb-10'>Next</button>
        </form>
    </div>
  )
}
