import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Upload from './pages/Upload'
import Views from './pages/Views'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
<div>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/uploads' element={<Upload />}/>
    <Route path='/views' element={<Views />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
  </Routes>
  <Footer />
</div>
  )
}

export default App
