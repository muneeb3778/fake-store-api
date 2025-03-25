import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Singlepage from './Singlepage'
import Categories from '../Categories'
import { Navbar } from './Navbar'

function App() {


  return (
  <>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Navbar/>}
children={[
<Route path='/home' element={<Home/>}/>,
 <Route path='/home/categories/:ky' element={<Categories/>}/>,
<Route path='/home/:key' element={<Singlepage/>}/>,
<Route path='/contact' element={<Contact/>}/>,
]}


/>
</Routes>

</BrowserRouter>

</>  
    
  )
}

export default App


