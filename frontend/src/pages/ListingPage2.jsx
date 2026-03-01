import React, { useContext } from "react";
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
import { listingDataContext } from "../Context/ListingContext";
export default function ListingPage2() {
  const navigate = useNavigate();
  let {category,setCategory} = useContext(listingDataContext)
  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center relative
        overflow-auto">
      <div className="w-[50px] h-[50px] bg-red-500 cursor-pointer absolute top-[5%] left-[20px] rounded-full
        flex items-center justify-center "
        onClick={() => navigate("/")}>
        <FaArrowLeft size={24} className="text-white" />
      </div>
      <div className="w-[200px] h-[50px] text-[20px] bg-[#f14242] text-white rounded-md flex items-center justify-center absolute top-[5%]
        right-[20px] shadow-2xl">
        set your Category
      </div>
      <div className="max-w-[900px] w-[100%] h-[550px] flex-wrap items-center justify-center
        flex gap-[15px] md:w-[70%]">

        <h1 className="text-[18px] text-black md:text-[30px] px-[10px]">Which of these best describes your place?</h1>

        <div className="max-w-[900px] w-[100%] h-[100%] flex-wrap items-center justify-center
          flex gap-[15px] md:w-[70%]">

          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "villa" ? "border-3 border-[#090808]" : ""}`}
            onClick={()=>{setCategory("villa")}}>
            <GiFamilyHouse size={30} className="text-black" />
            <h3>Villa</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "farmsHouse" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("farmsHouse")}}>
            <MdVilla size={30} className="text-black" />
            <h3>Farms House</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "poolHouse" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("poolHouse")}}>
            <MdOutlinePool size={30} className="text-black" />
            <h3>Pool House</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "rooms" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("rooms")}}>
            <MdBedroomParent size={30} className="text-black" />
            <h3>Rooms</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "cabin" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("cabin")}}>
            <GiVikingLonghouse size={30} className="text-black" />
            <h3>Cabin</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "flats" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("flats")}}>
            <MdOutlineHomeWork size={30} className="text-black" />
            <h3>Flats</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "pg" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("pg")}}>
            <IoBedOutline size={30} className="text-black" />
            <h3>PG</h3>
          </div>
          <div className={`w-[180px] h-[100px] flex justify-center items-center flex-col
            cursor-pointer border-2 hover:border-[#a6a5a5] text-[16px] rounded-lg ${category === "shops" ? "border-3 border-[#8b8b8b8]" : ""}`}
            onClick={()=>{setCategory("shops")}}>
            <FaShop size={30} className="text-black" />
            <h3>Shops</h3>
          </div>
        </div>
      <button className='absolute right-[5%] bottom-[1%] w-50 bg-red-500 text-white p-[10px] rounded-md mt-5 mb-10'
      onClick={()=>navigate("/listingpage3")}
      disabled={(!category)}>Next</button>
      </div>      
    </div>
    
  );
}
