import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import PrivateRouter from './component/Privaterouter'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
      </Routes>
    </div>
  )
}

export default AllRouter
