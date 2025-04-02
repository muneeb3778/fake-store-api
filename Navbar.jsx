
import { NavLink, Outlet } from 'react-router-dom'
import Category from './Category'
import Home from './Home'
import style from "./style.module.css"
import { useReducer, useRef } from 'react'
import Page from './pages'

export function Navbar() {






  return (
    <>
<Category/>

<nav className='flex justify-end gap-6 bg-gray-800 text-white h-[40px] text-black items-center top-0 left-0 right-0 fixed z-40'>

    
  
  <NavLink to="/home">
  <div className={`${style.category}`}
  onClick={(e)=>{console.log(e.target)}}
  >Home</div>
  </NavLink>
  
  <NavLink to="/page">
  <div className={`${style.category} mr-6`}>Page</div>
  </NavLink>

</nav>

<Outlet/>

  </>
  )
}

