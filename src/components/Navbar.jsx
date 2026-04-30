import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

import Links from './Links';
import Menu from './Menu';

function Navbar({ setSearchValue }) {


  return (
    <nav className=' bg-white h-70 md:h-96 w-full shadow-2xl fixed top-0 py-20 md:px-60  px-30 flex  items-center justify-between z-50'>
        <h1 className='text-20 md:text-3xl font-extrabold'>SHOP.CO</h1>
        <div className='hidden  lg:flex'>
          <Links setSearchValue={setSearchValue}/>
        </div>
        <div className='lg:hidden'>
           <Menu/>
        </div>
       

       

    </nav>
  )
}

export default Navbar