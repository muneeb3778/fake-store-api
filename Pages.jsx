import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Page() {

let [data,setdata]=useState([])




async function getdata() {
let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
setdata(res.data)  
console.log(data)
}
  
useEffect(()=>{
getdata()  
},[])



  return (
    <>
    
    <div className=' min-h-fit h-screen w-[80vw] ml-[20vw] pt-8 border-2'>
  
    </div>
    </>
  )
}

export default Page
