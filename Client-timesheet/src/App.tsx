import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  

  return (
    <>
      <div>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
      </div>
    </>
  )
}

export default App
