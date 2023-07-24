import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './website/header'
import Navbar from './website/Navbar'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Header/>} />
       
        </Routes>
    </div>
  )
}

export default Routing