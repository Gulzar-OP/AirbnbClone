import React, { useContext, useState } from 'react'
import logo from "../assets/Logo.png"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { MdVilla } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GiVikingLonghouse } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';

export default function Nav() {
    let [showpopup,setShowpopup] = useState(false)
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    const handleLogout = async () => {
        // handle logout logic
        try{
            let result = await axios.post(serverUrl +"/api/auth/logout",{}, {withCredentials:true})
            console.log(result)
        }catch(e){
            console.log(e)
        }
    }
  return (
    <div>
        <div className='w-[100vw] min-h-[80px] 
        border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between'>
            <div><img src={logo} alt="logo" className='w-[130px]'/></div>

            <div className='w-[35%] relative hidden md:block'>
            <input type="text" className='w-[100%] px-[30px] py-[10px]
            border-[2px] border-[#bdbaba] outline-none overflow-auto
            rounded-[30px]' placeholder='Any Where | Any Location | Any City'/>
            <button className='absolute right-0 top-1/2 transform -translate-y-1/2 rounded-[50px] p-[10px]
            bg-red-500 text-white'><FaMagnifyingGlass  className='w-[24px] h-[24px] text-white'/></button>
        </div>
        <div className='flex items-center justify-center gap-[20px] relative'>
            <span className='text-[18px] cursor-pointer rounded-2xl
            hover:bg-[#ded9d9] px-[8px] py-[5px] md:block hidden'>List your home</span>
            <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px]
            border-[1px] border-[#bdbaba] rounded-[30px] hover:shadow-md' onClick={() => setShowpopup(!showpopup)}>
            <span><GiHamburgerMenu
            className='w-[20px] h-[20px]'/></span>
            <span><CgProfile className='w-[20px] h-[23px]' /></span></button>
            { showpopup  && <div className='w-[220px] h-[250px] absolute top-[60px] right-[10px] rounded-lg bg-red-400 '>
                <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
                    <li className='p-[10px] cursor-pointer hover:bg-[#f4f3f3] w-[100%]'onClick={() => navigate('/login')}>Login</li>
                    <li className='p-[10px] cursor-pointer hover:bg-[#f4f3f3] w-[100%]'onClick={handleLogout}>Logout</li>
                    {/* <div className='border-b-[1px] border-[#eee]'></div> */}
                    <li className='p-[10px] cursor-pointer hover:bg-[#f4f3f3] w-[100%]'onClick={() => navigate('/list-your-home')}>List Your Home</li>
                    <li className='p-[10px] cursor-pointer hover:bg-[#f4f3f3] w-[100%]'onClick={() => navigate('/my-listing')}>My Listing</li>
                    <li className='p-[10px] cursor-pointer hover:bg-[#f4f3f3] w-[100%]'onClick={() => navigate('/check-booking')}>Check Booking</li>
                </ul>
            </div>}
        </div>
        
        </div>
        <div className='w-[100%] flex items-center justify-center h-[60px]  md:hidden'>
            <div className='w-[80%] relative '>
            <input type="text" className='w-[100%] px-[30px] py-[10px]
            border-[2px] border-[#bdbaba] outline-none overflow-auto
            rounded-[30px]' placeholder='Any Where | Any Location | Any City'/>
            <button className='absolute right-0 top-1/2 transform -translate-y-1/2 rounded-[50px] p-[10px]
            bg-red-500 text-white'><FaMagnifyingGlass  className='w-[24px] h-[24px] text-white'/></button>
        </div>
        </div>
        <div className='w-[100vw] h-[85px] bg-white flex items-center justify-start cursor-pointer gap-[40px] overflow-auto
        md:justify-center px-[15px]'>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdWhatshot className='w-[24px] h-[24px]' />
                <h3>Trending</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdVilla className='w-[24px] h-[24px]' />
                <h3>Villa</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
                <GiFamilyHouse className='w-[24px] h-[24px]' />
                <h3>Farm House</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
                <MdOutlinePool className='w-[24px] h-[24px]' />
                <h3>Pool House</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdBedroomParent className='w-[24px] h-[24px]' />
                <h3>Rooms</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <MdOutlineHomeWork className='w-[24px] h-[24px]' />
                <h3>Flat</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <IoBedOutline className='w-[24px] h-[24px]' />
                <h3>PG</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <GiVikingLonghouse className='w-[24px] h-[24px]' />
                <h3>Cabins</h3>
            </div>
            <div className='flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
                <FaShop className='w-[24px] h-[24px]' />
                <h3>Shops</h3>
            </div>

        </div>

        
    </div>
  )
}
