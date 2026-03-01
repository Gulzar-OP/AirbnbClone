import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext'

export const listingDataContext = createContext()
export default function ListingContext({children}) {
    let [title,setTitle] = useState("")
    let [description,setDescription] = useState("")
    let [frontendImage1,setFrontendImage1] = useState(null)
    let [frontendImage2,setFrontendImage2] = useState(null)
    let [frontendImage3,setFrontendImage3] = useState(null)
    let [backendImage1,setBackendImage1] = useState(null)
    let [backendImage2,setBackendImage2] = useState(null)
    let [backendImage3,setBackendImage3] = useState(null)
    let [rent,setRent] = useState("")
    let [city,setCity] = useState("")
    let [landMark,setLandMark] = useState("")
    let [category,setCategory] = useState("")

    let{serverUrl} = useContext(authDataContext)

    const addListing = async()=>{
      try{
        let formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("backendImage1", backendImage1)
        formData.append("backendImage2", backendImage2)
        formData.append("backendImage3", backendImage3)
        formData.append("rent", rent)
        formData.append("city", city)
        formData.append("landMark", landMark)
        formData.append("category", category)

        let result = await axios.post(serverUrl + "/api/listing/add",formData,{
          withCredentials:true,
        })
        console.log(result)
      
      }catch(e){
        console.log(e)
      }
    }

    let value = {
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
        category,setCategory,
        // handleAddListing
    }
  return (
    <div>
        <listingDataContext.Provider value={value}>
            {children}
        </listingDataContext.Provider>
    </div>
  )
}
