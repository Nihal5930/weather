import React from 'react'
import { useState,useEffect } from 'react'
export default function InputText(props) {
    // console.log(props.onChange)
    const [city,setCity]=useState('Raipur')
    useEffect(() => {
        try{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14e7bfb4db54ab27014c6510838c9bfe`
            const resp=await fetch(url)
            // console.log(resp.json)
            const respData=await resp.json()
            props.onChange(respData)
            // console.log(respData)
        }
        fetchApi();
        }
        catch(err){
            console.log(err)
        }
    }, [city])
  return (
    <div>
      <div>
            <input name='search' onChange={(e)=>{setCity(e.target.value)}} defaultValue={city} type="search" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        </div>
    </div>
  )
}
