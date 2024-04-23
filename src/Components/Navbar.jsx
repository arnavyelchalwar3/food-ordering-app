import React from 'react'

const Navbar = () => {
 
    return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div >
        <h3 className='text-xl font-bold text-gray-600'>
            {new Date().toUTCString().slice(0,16)}
        </h3>
        <h1 className='text-2xl font-bold'>WebSite Project Name</h1>
        </div>
     <div>
        <input 
        type="search" 
        name="search" 
        id="" 
        placeholder='search Food' 
        autoComplete='off' 
        className='p-3 border boder-gray-400 rounded-lg outline-none w-full lg:w-[25vw]   ' />
     </div>
    </nav>
  )
}

export default Navbar