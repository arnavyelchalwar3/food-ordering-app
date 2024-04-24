import React from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCart from './ItemCart';
const cart = () => {
  return (
   <>
   <div className=' fixed right-0 top-0 w-full lg:w-[20vw] h-full p-3 bg-white '>
       <div className='flex justify-between items-center my-3'>
        <span>My Order</span>
        <IoMdClose  className='border-2 boder-gray-600  font-bold 
        p-1 text-x-1 rounded-md hover:text-red-300 hover:border-red-300 
        cursor-pointer '/>
       </div>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
        <div className='absolute bottom-0'>
        <h2 className='font-semibold text-gray-800 `'>Items : </h2>
        <h3 className='font-semibold text-gray-800 `'> Total Amount:</h3>
        <hr className='w-[90] lg:w-[18vw] my-2' />
        <button className='bg-green-500 font-bold px-3 text-white py-2
        rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checlout</button>
    </div>
    </div>
    
   </> 
  )
}

export default cart