
import { Link, Outlet } from 'react-router-dom'
import Category from './Category'


export function Navbar() {




  return (
    <>
<Category/>

<nav className='flex justify-end gap-6 bg-gray-800 text-white h-[40px] text-black items-center top-0 left-0 right-0 fixed z-40'>

    
  
  <Link to="/home">
  <div>Home</div>
  </Link>
  
  <Link to="/contact">
  <div className='mr-6'>Contact</div>
  </Link>

</nav>

<Outlet/>

  </>
  )
}

