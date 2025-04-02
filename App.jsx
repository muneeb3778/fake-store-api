import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Page from './pages'
import Singlepage from './Singlepage'
import Categories from './Categories'
import { Navbar } from './Navbar'
import Error from './Error'

function App() {


  return (
  <>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>,
<Route path='/home/categories/:ky' element={<Categories/>}/>,
<Route path='/home/:key' element={<Singlepage/>}/>,
<Route path='/page' element={<Page/>}/>,
<Route path='*' element={<Error/>}/>

</Routes>

</BrowserRouter>

</>  



    
  )
}

export default App


