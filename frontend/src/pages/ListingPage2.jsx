import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdWhatshot } from "react-icons/md";
import { MdVilla } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GiVikingLonghouse } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
export default function ListingPage2() {
  const navigate = useNavigate();
  return (
    <div
      className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative
        overflow-auto">
      <div
        className="w-[50px] h-[50px] bg-red-500 cursor-pointer absolute top-[5%] left-[20px] rounded-full
                    flex items-center justify-center "
        onClick={() => navigate("/")}>
        <FaArrowLeft size={24} className="text-white" />
      </div>
      <div
        className="w-[200px] h-[50px] text-[20px] bg-[#f14242] text-white rounded-md flex items-center justify-center absolute top-[5%]
                    right-[20px] shadow-2xl">
                    set your Category
      </div>
      <div className="max-w-[900px] w-[100%] h-[550px] flex-wrap items-center justify-center
                     flex gap-[40px] mt-[30px]">
        <h1 className="text-[18px] text-black md:text-[30px]">Which of these best describes your place?</h1>
        <div className="max-w-[900px] w-[100%] h-[100%] flex-wrap items-center justify-center
                      flex gap-[15px] md:w-[70%]">
          <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                        cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
            <GiFamilyHouse size={30} className="text-black" />
            <h3>Villa</h3>
          </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdVilla size={30} className="text-black" />
          <h3>Farms House</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdOutlinePool size={30} className="text-black" />
          <h3>Pool House</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdBedroomParent size={30} className="text-black" />
          <h3>Rooms</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <MdOutlineHomeWork size={30} className="text-black" />
          <h3>Flats</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <IoBedOutline size={30} className="text-black" />
          <h3>PG</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <GiVikingLonghouse size={30} className="text-black" />
          <h3>Cabin</h3>
        </div>
        <div className="w-[180px] h-[100px] flex justify-center items-center flex-col
                      cursor-pointer border-[2px] hover:border-[#a6a5a5] text-[16px] rounded-lg">
          <FaShop size={30} className="text-black" />
          <h3>Shops</h3>
        </div>
      </div>
      <button className='absolute right-[5%] bottom-[5%] w-50 bg-red-500 text-white p-[10px] rounded-md mt-5 mb-10'>Next</button>
      </div>
      
    </div>
    
  );
}
