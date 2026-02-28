import React from 'react'
import { useContext } from 'react';
import { authDataContext } from './AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
export const userDataContext = createContext();

export default function UserContextProvider({ children }) {
    let {serverUrl} = useContext(authDataContext)
    let [userData, setUserData] = useState(null)

    const getCurrentUser = async()=>{
        try{
            let response = await axios.get(serverUrl + "/api/user/currentuser", {
                withCredentials: true
            });
            setUserData(response.data);
        }catch(err){
            console.error(err);
            setUserData(null)
        }
    }
    useEffect(() => {
        getCurrentUser();
    }, []);
    let value = {
        userData,
        setUserData
    }
  return (
    <div>
        <userDataContext.Provider value={value} >
          {children}
        </userDataContext.Provider>
    </div>
  )
}
