import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { listingDataContext } from '../Context/ListingContext';
export default function ListingPage1() {
    const navigate = useNavigate()
    let {
        title,setTitle,
        description,setDescription,
        frontendImage1,setFrontendImage1,
        frontendImage2,setFrontendImage2,
        frontendImage3,setFrontendImage3,
        backendImage1,setBackendImage1,
        backendImage2,setBackendImage2,
        backendImage3,setBackendImage3,
        rent,setRent,
        city,setCity,
        landMark,setLandMark,
        category,setCategory
    } = useContext(listingDataContext)

    const handleImage1 = (e)=>{
        let file  = e.target.files[0]
        setBackendImage1(file)
        setFrontendImage1(URL.createObjectURL(file))
    }
    const handleImage2 = (e)=>{
        let file  = e.target.files[0]
        setBackendImage2(file)
        setFrontendImage2(URL.createObjectURL(file))
    }
    const handleImage3 = (e)=>{
        let file  = e.target.files[0]
        setBackendImage3(file)
        setFrontendImage3(URL.createObjectURL(file))
    }
  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative
    overflow-auto'>
        <form action="" className='max-w-[900px] w-[90%] h-[700px] flex items-center
        justify-start flex-col md:items-start gap-[10px]'
        onSubmit={(e)=>{e.preventDefault(); navigate("/listingpage2");}}>

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
                        onChange={(e)=>setTitle(e.target.value)} value={title}
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
                        onChange={(e)=>setDescription(e.target.value)} value={description}
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
                        // required 
                        onChange={handleImage1}
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
                        // required 
                        onChange={handleImage2}
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
                        // required 
                        onChange={handleImage3}
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
                        onChange={(e)=>setRent(e.target.value)} value={rent}
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
                        onChange={(e)=>setCity(e.target.value)} value={city}
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
                        onChange={(e)=>setLandMark(e.target.value)} value={landMark}
                    />
                </div>
                <button className='bg-red-500 text-white px-6 py-2 rounded-md mt-5 mb-10'>
                Next
                </button>
        </form>
    </div>
  )
}
