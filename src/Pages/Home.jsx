import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from './CategoryMenu'
import Fooditem from '../Components/Fooditem'
import Cart from '../Components/Cart'
const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <CategoryMenu/>
      <Fooditem/>
      <Cart/>
    </div>
  
    </>
    
  )
}

export default Home