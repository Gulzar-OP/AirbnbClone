import React, { createContext, useState } from 'react'
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
    let value = {
        title,
        description,
        frontendImage1,
        frontendImage2,
        frontendImage3,
        backendImage1,
        backendImage2,
        backendImage3,
        rent,
        city,
        landMark,
        category
    }
  return (
    <div>
        <listingDataContext.Provider value={value}>
            {children}
        </listingDataContext.Provider>
    </div>
  )
}
