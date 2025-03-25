import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";


function Category (){

let [dt,setdt]=useState([])
let [d,setd]=useState("")



useEffect(()=>{

axios.get("https://fakestoreapi.com/products/categories").then((res)=>{

setdt(res.data)
    
})

  
},[])





return (

<>
<div className="bg-gray-800 , w-[20vw] h-screen text-white text-[18px] flex flex-col  pt-12 fixed">
{dt.map((v,i)=>(
<NavLink to={`/home/categories/${v}`}>
<div className="p-2 cursor-pointer">{v}</div>
</NavLink>    
))}

</div>


</>

)


}


export default Category 
