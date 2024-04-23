import React from'react'
import {BrowserRouter, Route,Routes }from "react-router-dom"
import Home from './Pages/Home'
import Succes from './Pages/Succes'
import Error from './Pages/Error'
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Succes" element={<Succes/>}/>  
     <Route path="/*" element={<Error/>}/>  
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
