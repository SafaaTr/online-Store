import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { LiaWindowClose } from "react-icons/lia";
import Links from './Links';
// import { Links } from 'react-router-dom';

function Menu() {
    const[showMenu ,setshowMenu]=useState(false)
  return (
    <div>
        <button onClick={()=>setshowMenu(true)}>
            <HiMenuAlt3 size={30} />
        </button>
        <div className={` fixed top-0 right-0 h-full w-250  bg-white transition-transform  duration-300 ${ showMenu? "translate-x-0" :"translate-x-full"} `}>
        <div className='flex flex-col lg:hidden mx-20 '>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-xl my-20'>SHOP.CO</h1>
                <button onClick={()=>setshowMenu(false)}>
                    <LiaWindowClose size={30} />
                </button>
            </div>
            <div>
                <Links
                 onClickItem={()=>setshowMenu(false)}
                />
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Menu