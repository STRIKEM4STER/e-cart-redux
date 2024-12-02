import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import { Route, Routes } from 'react-router-dom'

import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  

  return (
    <>
      
      <Header/>
       <Routes>

       <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />

       </Routes>
      <Footer/>

    </>
  )
}

export default App
